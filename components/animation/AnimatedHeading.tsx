import Heading from "../common/Heading";

const AnimatedHeading = () => {
  return (
    <>
      <style>{`
        .heading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
          position: relative;
          min-height: 60px; /* Adjust based on your heading height */
        }
        .text {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          animation-duration: 6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-fill-mode: forwards;
          white-space: nowrap;
        }
        .sources {
          animation-name: fadeInOut;
          animation-delay: 0s;
        }
        .destination {
          animation-name: fadeInOut;
          animation-delay: 3s;
        }
        @keyframes fadeInOut {
          0%, 33.33% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>
      <div className="heading-container">
        <Heading
          className="text sources"
          heading={[{ text: " Sources ", color: "text-secondaryBlue-300" }]}
        />
        <Heading
          className="text destination"
          heading={[{ text: " Destination", color: "text-secondaryBlue-300" }]}
        />
      </div>
    </>
  );
};

export default AnimatedHeading;
