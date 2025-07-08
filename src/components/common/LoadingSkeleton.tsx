interface LoadingSkeletonProps {
  height?: string;
  className?: string;
}

export function LoadingSkeleton({
  height = "h-96",
  className = "",
}: LoadingSkeletonProps) {
  return (
    <div
      className={`${height} animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer ${className}`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="h-8 bg-gray-300 rounded-lg w-64 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-80 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 rounded-t-lg mb-4"></div>
      <div className="space-y-3 p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-300 rounded w-16"></div>
          <div className="h-6 bg-gray-300 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="animate-pulse bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <div className="h-3 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300 rounded w-4/6"></div>
      </div>
    </div>
  );
}
