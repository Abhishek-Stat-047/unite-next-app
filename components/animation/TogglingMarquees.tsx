import DataCardMarquee from "./DataCardMarquee";

import {
  DataSourcesOne,
  DataSourcesTwo,
  DataSourcesThree,
  DataDestinationOne,
  DataDestinationTwo,
  DataDestinationThree,
} from "@/utils/constants";

const TogglingMarquees = () => {
  return (
    <>
      <style>{`
        .animation-wrapper {
          position: relative;
          width: 100%;
          min-height: 400px; /* Adjust based on your content */
        }
        .marquee-group {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          animation-duration: 6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-fill-mode: forwards;
        }
        .sources-group {
          animation-name: fadeSources;
        }
        .destination-group {
          animation-name: fadeDestinations;
        }
        @keyframes fadeSources {
          0%, 33.33% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
        @keyframes fadeDestinations {
          0%, 33.33% {
            opacity: 0;
          }
          50%, 83.33% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
      <div className="relative py-16">
        {/* Container that provides the space */}
        <div className="animation-wrapper">
          {/* SOURCES */}
          <div className="sources-group marquee-group center space-y-7">
            <div className="relative w-[80%] center overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <DataCardMarquee data={DataSourcesOne} />
            </div>
            <div className="relative w-full overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-60 bg-gradient-to-r from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-60 bg-gradient-to-l from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <DataCardMarquee data={DataSourcesTwo} direction="right" />
            </div>
            <div className="relative w-[80%] center overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <DataCardMarquee data={DataSourcesThree} />
            </div>
          </div>
          {/* DESTINATIONS */}
          <div className="destination-group marquee-group center space-y-7">
            <div className="relative w-[80%] center overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <DataCardMarquee data={DataDestinationOne} direction="right" />
            </div>
            <div className="relative w-full overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-60 bg-gradient-to-r from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-60 bg-gradient-to-l from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <DataCardMarquee data={DataDestinationTwo} direction="right" />
            </div>
            <div className="relative w-[80%] center overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white via-white/20 to-transparent backdrop-blur-[1px] z-10" />
              <DataCardMarquee data={DataDestinationThree} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TogglingMarquees;
