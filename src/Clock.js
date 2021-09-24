import React, { useState, useEffect } from "react";
import UTC1 from "./timeZones/UTC1";
import UTC2 from "./timeZones/UTC2";
import UTC3 from "./timeZones/UTC3";
import UTC4 from "./timeZones/UTC4";
import UTC5 from "./timeZones/UTC5";
import UTC6 from "./timeZones/UTC6";
import UTC7 from "./timeZones/UTC7";
import UTC8 from "./timeZones/UTC8";
import UTC9 from "./timeZones/UTC9";
import UTC10 from "./timeZones/UTC10";
import UTC11 from "./timeZones/UTC11";
import UTC12 from "./timeZones/UTC12";
import UTC0 from "./timeZones/UTC0";
import UTC_1 from "./timeZones/UTC_1";
import UTC_2 from "./timeZones/UTC_2";
import UTC_3 from "./timeZones/UTC_3";
import UTC_4 from "./timeZones/UTC_4";
import UTC_5 from "./timeZones/UTC_5";
import UTC_6 from "./timeZones/UTC_6";
import UTC_7 from "./timeZones/UTC_7";
import UTC_8 from "./timeZones/UTC_8";
import UTC_9 from "./timeZones/UTC_9";
import UTC_10 from "./timeZones/UTC_10";
import UTC_11 from "./timeZones/UTC_11";
import UTC_12 from "./timeZones/UTC_12";

const Clock = () => {
  let global = new Date().getTimezoneOffset();

  return (
    <main>
      {global === -60 && <UTC1 />}
      {global === -120 && <UTC2 />}
      {global === -180 && <UTC3 />}
      {global === -240 && <UTC4 />}
      {global === -300 && <UTC5 />}
      {global === -360 && <UTC6 />}
      {global === -420 && <UTC7 />}
      {global === -480 && <UTC8 />}
      {global === -540 && <UTC9 />}
      {global === -600 && <UTC10 />}
      {global === -660 && <UTC11 />}
      {global === -720 && <UTC12 />}
      {global === 0 && <UTC0 />}
      {global === 60 && <UTC_1 />}
      {global === 120 && <UTC_2 />}
      {global === 180 && <UTC_3 />}
      {global === 240 && <UTC_4 />}
      {global === 300 && <UTC_5 />}
      {global === 360 && <UTC_6 />}
      {global === 420 && <UTC_7 />}
      {global === 480 && <UTC_8 />}
      {global === 540 && <UTC_9 />}
      {global === 600 && <UTC_10 />}
      {global === 660 && <UTC_11 />}
      {global === 720 && <UTC_12 />}
    </main>
  );
};

export default Clock;
