import React, { memo } from "react";

// @ts-ignore
const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});
Try.displayName = "Try";

export default Try;
