export const AnimatedElements = () => {
  return (
    <>
      {/* Floating Delivery Icons */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </div>

      <div className="absolute top-40 right-20 animate-float-delayed opacity-20">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-accent"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </div>

      <div className="absolute bottom-32 left-1/4 animate-float opacity-15">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-secondary"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </div>

      {/* Animated Route Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,100 Q 200,50 400,100 T 800,100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary animate-dash"
          strokeDasharray="10,5"
        />
        <path
          d="M 100,200 Q 300,150 500,200 T 900,200"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-accent animate-dash-delayed"
          strokeDasharray="10,5"
        />
      </svg>

      {/* Moving Dots */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary rounded-full animate-ping opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping opacity-30 animation-delay-1000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-secondary rounded-full animate-ping opacity-30 animation-delay-2000"></div>
    </>
  );
};
