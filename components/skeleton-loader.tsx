export function SkeletonLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] ${className}`}>
      <div className="w-full h-full bg-transparent"></div>
    </div>
  )
}

export function ImageSkeleton({ width, height, className = "" }: { width?: string | number, height?: string | number, className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ width, height }}>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:200%_100%]"></div>
    </div>
  )
}

export function TextSkeleton({ lines = 3, className = "" }: { lines?: number, className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer bg-[length:200%_100%] ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        ></div>
      ))}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <ImageSkeleton height={200} className="w-full" />
      <TextSkeleton lines={1} className="mt-4" />
      <TextSkeleton lines={3} />
    </div>
  )
}

