import React from "react";

import Heading from "../common/Heading";

const headingSegments = [
  {
    text: "Explore Our Popular Data \n",
    color: "black",
  },
  { text: " Sources ", color: "text-secondaryBlue-300" },
];

const PopularDataSource = () => {
  return (
    <div>
      <Heading
        description={`Unite integrates with 100+ data sources across advertising, analytics, CRM, eCommerce, and finance — with new connectors added monthly.`}
        heading={headingSegments}
      />
    </div>
  );
};

export default PopularDataSource;
