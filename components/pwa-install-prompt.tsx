"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { X, Download, Smartphone, Share, Plus } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function PWAInstallPrompt() {
  const t = useTranslations("pwa");
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if already installed or dismissed
    const dismissed = localStorage.getItem("pwa-prompt-dismissed");
    const dismissedTime = dismissed ? parseInt(dismissed, 10) : 0;
    const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
    
    // Show again after 7 days
    if (dismissed && daysSinceDismissed < 7) {
      return;
    }

    // Check if running in standalone mode (already installed)
    const standalone = window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    if (standalone) return;

    // Check if iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent);
    setIsIOS(isIOSDevice && isSafari);

    // Listen for beforeinstallprompt event (Chrome, Edge, etc.)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show prompt after a short delay for better UX
      setTimeout(() => setShowPrompt(true), 2000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // For iOS, show prompt after delay
    if (isIOSDevice && isSafari) {
      setTimeout(() => setShowPrompt(true), 3000);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === "accepted") {
        setShowPrompt(false);
        localStorage.setItem("pwa-installed", "true");
      }
    } catch (error) {
      console.error("Installation failed:", error);
    }
    
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPrompt(false);
      localStorage.setItem("pwa-prompt-dismissed", Date.now().toString());
      setIsClosing(false);
    }, 300);
  };

  const handleRemindLater = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPrompt(false);
      // Will show again in 1 day
      const oneDayAgo = Date.now() - (6 * 24 * 60 * 60 * 1000);
      localStorage.setItem("pwa-prompt-dismissed", oneDayAgo.toString());
      setIsClosing(false);
    }, 300);
  };

  if (!showPrompt || isStandalone) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 transition-all duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleDismiss}
      />
      
      {/* Modal */}
      <div 
        className={`relative w-full max-w-md bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 rounded-2xl shadow-2xl border border-zinc-700/50 overflow-hidden transform transition-all duration-300 ${
          isClosing ? "translate-y-full sm:translate-y-0 sm:scale-95 opacity-0" : "translate-y-0 sm:scale-100 opacity-100"
        }`}
      >
        {/* Decorative top gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />
        
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-200 z-10"
          aria-label={t("close")}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 pt-8">
          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                <Download className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-center text-white mb-2">
            {t("title")}
          </h2>
          
          {/* Description */}
          <p className="text-zinc-400 text-center text-sm mb-6 leading-relaxed">
            {t("description")}
          </p>

          {isIOS ? (
            /* iOS Instructions */
            <div className="space-y-4">
              <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50">
                <p className="text-sm text-zinc-300 mb-3 font-medium">{t("iosInstructions")}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Share className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-sm text-zinc-400">{t("iosStep1")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Plus className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-sm text-zinc-400">{t("iosStep2")}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleDismiss}
                className="w-full py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium transition-all duration-200"
              >
                {t("understood")}
              </button>
            </div>
          ) : (
            /* Chrome/Edge/etc. Install buttons */
            <div className="space-y-3">
              <button
                onClick={handleInstall}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-zinc-900 font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-5 h-5" />
                {t("install")}
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={handleRemindLater}
                  className="flex-1 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium transition-all duration-200"
                >
                  {t("later")}
                </button>
                <button
                  onClick={handleDismiss}
                  className="flex-1 py-3 px-4 rounded-xl border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50 text-zinc-400 font-medium transition-all duration-200"
                >
                  {t("cancel")}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Features list */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-center gap-4 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {t("feature1")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {t("feature2")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

