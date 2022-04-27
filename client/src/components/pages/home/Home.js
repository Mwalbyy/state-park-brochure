import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import forest from "./images/definitlyNJ.jpg";
import pastPic from "./images/history1.jpg";
import topo from "./images/topo.PNG";
// import topoLink from "https://react-spring.io/components/parallax#parallax"

export default function Home() {
  const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const alignCenterLeft = {
    display: "flex",
    justifyContent: "center",
  };
  const alignCenterRight = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "5%",
  };
  return (
    <>
      <Parallax pages={8}>
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
            <h1 className="centerClass F-3">New Jersey Cedar reserve </h1>
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
        <ParallaxLayer
          speed={0.5}
          offset={1.1}
          sticky={{ start: 1.1, end: 1.9 }}
        >
          <h1 className="heading F-3"> brief History</h1>
        </ParallaxLayer>
        {/* single History card */}
        <ParallaxLayer
          speed={2}
          offset={2.3}
          factor={3}
          sticky={{ start: 1.3, end: 1.9 }}
          style={{ ...center }}
        >
          <h1 className="cardText F-2 ">
            This is an example text box so that I can do sizing when I actually
            fill this out{" "}
          </h1>
        </ParallaxLayer>
        {/* Double History cards */}
        <ParallaxLayer
          speed={2}
          offset={2.3}
          factor={3}
          sticky={{ start: 2.6, end: 3.2 }}
          style={{ ...alignCenterRight }}
        >
          <h1 className="cardText F-2 ">
            This is a picture of some people logging, so sad I know, dont worry
            tho they are gonna stop because I asked them nicely
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={3}
          offset={2.3}
          factor={3}
          sticky={{ start: 2.6, end: 3.2 }}
          style={{ ...alignCenterLeft }}

        >
          <img
            className="pastPicture"
            src={pastPic}
            alt="forest in the past"
          />
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={4}
          factor={5}
          style={{ backgroundColor: "#227B69" }}
        ></ParallaxLayer>
        <ParallaxLayer speed={0.5} offset={4.2} sticky={{ start: 4.2, end: 5 }}>
          <h1 className="heading F-3">Topography</h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={2}
          offset={4.5}
          factor={3}
          sticky={{ start: 4.5, end: 5.5 }}
          style={{ ...center }}
        >
          <a href={"https://react-spring.io/components/parallax#parallax"} target={"_blank"} rel={"noreferrer"}>
          <img
            src={topo}
            alt=" forest in the past"
          />
          </a>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={6.5}
          factor={4}
          style={{ backgroundColor: "#56A873" }}
        ></ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={6.7} sticky={{ start: 6.7, end: 8 }}>
          <h1 className="heading weatherH1 F-3">Current Weather</h1>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
