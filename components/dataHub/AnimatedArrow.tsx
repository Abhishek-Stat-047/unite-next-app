export default function AnimatedArrow() {
  return (
    <div className="relative h-64 w-full flex items-center justify-center">
      {/* Container with relative positioning */}
      <div className="relative w-4/5 h-10">
        {/* Dotted line */}
        <div className="absolute w-full border-t-2 border-dotted border-gray-900" />

        {/* Moving dot */}
        <div className="absolute h-4 w-4 bg-black rounded-full top-1/2 transform -translate-y-1/2 animate-move-right" />
      </div>

      {/* CSS for the animation */}
      <style jsx>{`
        @keyframes moveRight {
          0% {
            left: 0%;
          }
          100% {
            left: calc(100% - 16px);
          }
        }

        .animate-move-right {
          animation: moveRight 2s infinite linear;
        }
      `}</style>
    </div>
  );
}
