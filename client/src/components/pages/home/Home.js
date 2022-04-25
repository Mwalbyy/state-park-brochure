import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import forest from "./images/njTest2.jpg";
import pastPic from "./images/history1.jpg";

export default function Home() {
  const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const alignCenterRight = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  };
  const alignCenterLeft = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  };
  return (
    <>
      <Parallax pages={6}>
        {/* Cover page */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent,90%, #162529), url(${forest})`,
            backgroundSize: "cover",
          }}
        >
          <ParallaxLayer speed={0.5}>
            <h1 className="parkName F-3">New Jersey Cedar reserve </h1>
          </ParallaxLayer>
        </ParallaxLayer>
        {/* backGround for the history section */}
        <ParallaxLayer
          speed={1}
          offset={1}
          factor={6}
          style={{ backgroundColor: "#162529" }}
        ></ParallaxLayer>
        {/* Title of history section */}
        <ParallaxLayer speed={0.5} offset={1.1} sticky={{ start: 1.1, end: 3.5 }}>
          <h1 className="heading F-3"> brief History</h1>
        </ParallaxLayer>
        {/* single History card */}
        <ParallaxLayer
          speed={2}
          offset={2.3}
          factor={3}
          sticky={{ start: 1.3, end: 2 }}
          style={{ ...center }}
        >
          <h1 className="cardText F-1 ">SUP</h1>
        </ParallaxLayer>
        {/* Double History cards */}
        <ParallaxLayer
          speed={2}
          offset={2.3}
          factor={3}
          sticky={{ start: 2.3, end: 3.5 }}
          style={{ ...alignCenterLeft }}
        >
          <h1 className="cardText F-1 ">SUP</h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={2}
          offset={2.3}
          factor={3}
          sticky={{ start:  2.3, end: 3.5 }}
          style={{ ...alignCenterRight }}
        >
          <h1 className=" ">
            <img src={pastPic} alt="BigCo Inc. logo" />
          </h1>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
