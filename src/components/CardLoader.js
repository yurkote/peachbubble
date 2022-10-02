import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={234.8}
    height={316}
    viewBox="0 0 234.8 316"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="32" y="12" rx="0" ry="0" width="0" height="59" />
    <rect x="573" y="549" rx="0" ry="0" width="44" height="28" />
    <rect x="0" y="16" rx="10" ry="10" width="215" height="214" />
    <rect x="0" y="235" rx="5" ry="5" width="214" height="15" />
    <rect x="0" y="260" rx="5" ry="5" width="115" height="20" />
    <rect x="166" y="265" rx="5" ry="5" width="50" height="50" />
    <rect x="0" y="285" rx="5" ry="5" width="80" height="30" />
  </ContentLoader>
);

export default MyLoader;
