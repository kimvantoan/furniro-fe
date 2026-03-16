export default function StarRating({ rating }: { rating: number }) {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = rating >= star;
          const half = !filled && rating >= star - 0.5;
          return (
            <svg
              key={star}
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <defs>
                <linearGradient id={`half-${star}`}>
                  <stop offset="50%" stopColor="#FFAD33" />
                  <stop offset="50%" stopColor="#D1D5DB" />
                </linearGradient>
              </defs>
              <path
                d="M10 1l2.39 4.85 5.35.78-3.87 3.77.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.26 6.63l5.35-.78L10 1z"
                fill={
                  filled ? "#FFAD33" : half ? `url(#half-${star})` : "#D1D5DB"
                }
              />
            </svg>
          );
        })}
      </div>
    );
  }