"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { X, Download, Share, Plus } from "lucide-react";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

// ============================================
// PWA PROMPT CONFIGURATION
// ============================================
const PWA_CONFIG = {
  // Minimum visits before showing prompt (1 = show to new visitors)
  MIN_VISITS_BEFORE_PROMPT: 1,
  
  // Delay in ms before showing prompt after conditions are met
  // Allows user to start engaging with content first
  PROMPT_DELAY_MS: 5000,
  
  // Days to wait after user clicks "Cancel" / X button
  DAYS_AFTER_DISMISS: 30,
  
  // Days to wait after user clicks "Remind Later"
  DAYS_AFTER_REMIND_LATER: 3,
  
  // Whether to show on desktop browsers (false = mobile only)
  // PWA install is primarily a mobile experience
  SHOW_ON_DESKTOP: false,
};

// Helper: Check if device is mobile
function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  const mobileKeywords = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i;
  
  // Also check screen width as backup
  const isSmallScreen = window.innerWidth <= 1024;
  
  return mobileKeywords.test(userAgent) || isSmallScreen;
}

// Helper: Track and get visit count
function trackVisit(): number {
  const VISIT_KEY = "pwa-visit-count";
  const LAST_VISIT_KEY = "pwa-last-visit";
  
  const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
  const lastVisitTime = lastVisit ? parseInt(lastVisit, 10) : 0;
  const hoursSinceLastVisit = (Date.now() - lastVisitTime) / (1000 * 60 * 60);
  
  // Only count as new visit if more than 1 hour since last visit
  // Prevents counting page refreshes as new visits
  let visitCount = parseInt(localStorage.getItem(VISIT_KEY) || "0", 10);
  
  if (hoursSinceLastVisit > 1) {
    visitCount += 1;
    localStorage.setItem(VISIT_KEY, visitCount.toString());
  }
  
  localStorage.setItem(LAST_VISIT_KEY, Date.now().toString());
  
  return visitCount;
}

export function PWAInstallPrompt() {
  const t = useTranslations("pwa");
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Memoized function to trigger prompt display
  const triggerPrompt = useCallback(() => {
    setTimeout(() => setShowPrompt(true), PWA_CONFIG.PROMPT_DELAY_MS);
  }, []);

  useEffect(() => {
    // Skip on desktop if configured
    if (!PWA_CONFIG.SHOW_ON_DESKTOP && !isMobileDevice()) {
      return;
    }

    // Track visit and check engagement
    const visitCount = trackVisit();
    if (visitCount < PWA_CONFIG.MIN_VISITS_BEFORE_PROMPT) {
      return; // Not enough engagement yet
    }

    // Check if already installed
    const installed = localStorage.getItem("pwa-installed");
    if (installed === "true") {
      return;
    }

    // Check dismissal cooldown
    const dismissed = localStorage.getItem("pwa-prompt-dismissed");
    if (dismissed) {
      const dismissedTime = parseInt(dismissed, 10);
      const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      const requiredDays = PWA_CONFIG.DAYS_AFTER_DISMISS;
      
      if (daysSinceDismissed < requiredDays) {
        return; // Still in cooldown period
      }
    }

    // Check "remind later" cooldown
    const remindLater = localStorage.getItem("pwa-prompt-remind-later");
    if (remindLater) {
      const remindTime = parseInt(remindLater, 10);
      const daysSinceRemind = (Date.now() - remindTime) / (1000 * 60 * 60 * 24);
      
      if (daysSinceRemind < PWA_CONFIG.DAYS_AFTER_REMIND_LATER) {
        return; // Still in remind later period
      }
    }

    // Check if running in standalone mode (already installed as PWA)
    const standalone = window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    if (standalone) return;

    // Check if iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent);
    setIsIOS(isIOSDevice && isSafari);

    // Listen for beforeinstallprompt event (Chrome, Edge, Samsung Internet, etc.)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      triggerPrompt();
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // For iOS Safari, show custom instructions prompt
    if (isIOSDevice && isSafari) {
      triggerPrompt();
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, [triggerPrompt]);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === "accepted") {
        setShowPrompt(false);
        localStorage.setItem("pwa-installed", "true");
        // Clear visit tracking on successful install
        localStorage.removeItem("pwa-visit-count");
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
      // Full dismiss - wait 30 days before showing again
      localStorage.setItem("pwa-prompt-dismissed", Date.now().toString());
      localStorage.removeItem("pwa-prompt-remind-later");
      setIsClosing(false);
    }, 300);
  };

  const handleRemindLater = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPrompt(false);
      // Shorter wait - 7 days (user showed interest but not ready)
      localStorage.setItem("pwa-prompt-remind-later", Date.now().toString());
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
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-zinc-200 p-3">
                <Image 
                  src="/casa break and casa can.svg" 
                  alt="CasaBreak" 
                  width={200} 
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
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

