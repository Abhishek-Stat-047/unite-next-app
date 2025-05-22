const GradientTriangle = () => {
  return (
    <svg
      fill="none"
      height="70"
      viewBox="0 0 80 70"
      width="80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55.999 70.0002L21.499 70.0002L0 0L80 0L55.999 70.0002Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear"
          x1="40"
          x2="40"
          y1="0"
          y2="70"
        >
          <stop stopColor="#EEF1F6" />
          <stop offset="1" stopColor="#ADC4F7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientTriangle;
