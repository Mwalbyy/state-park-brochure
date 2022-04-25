import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import forest from "./images/njTest2.jpg";

export default function Home() {
  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer
        
          speed={1}
          factor={2}
          style={{ backgroundImage: `linear-gradient(to bottom, transparent,70%, #162529), url(${forest})` , backgroundSize: "cover" }}
        >
          <ParallaxLayer
            speed={.5}
          >
            <h1 className="parkName F-3">New Jersey Cedar reserve </h1>
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={1}
          factor={2}
          style={{ backgroundColor: "#162529" }}
        >
          <ParallaxLayer
            speed={.5}
            offset={.5}
          >
            <h1 className="parkName F-3"> brief History</h1>
          </ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
