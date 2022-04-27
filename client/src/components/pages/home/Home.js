import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import forest from "./images/definitlyNJ.jpg";
import pastPic from "./images/history1.jpg";
import topo from "./images/topo.PNG";
import toporeal from "./images/toporeal.PNG";
import Navbar from "../../Navbar";
import { Card } from "react-bootstrap";
// import topoLink from "https://react-spring.io/components/parallax#parallax"

export default function Home() {
  return (
    <>
      <Navbar />
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
          sticky={{ start: 1.1, end: 1.6 }}
        >
          <h1 className="heading F-3"> brief History</h1>
        </ParallaxLayer>
        {/* single History card */}
        <ParallaxLayer
          speed={2}
          offset={2.3}
          factor={3}
          sticky={{ start: 1.3, end: 1.6 }}
          className="center"
          // style={{ ...center }}
        >
          <h1 className="cardText F-2 ">
            This is an example text box so that I can do sizing when I actually
            fill this out{" "}
          </h1>
        </ParallaxLayer>
        {/* Double History cards */}
        {/* image of past */}
        <ParallaxLayer
          speed={0.1}
          offset={2.4}
          factor={3}
          className="centerLeft"
        >
          <img className="pastPicture" src={pastPic} alt="forest in the past" />
        </ParallaxLayer>
        {/* description of the image */}
        <ParallaxLayer
          speed={2}
          offset={2.3}
          factor={3}
          sticky={{ start: 2.8, end: 3.2 }}
          className="centerRight"
        >
          <h1 className="cardText F-2 ">
            This is a picture of some people logging, so sad I know, dont worry
            tho they are gonna stop because I asked them nicely
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={4}
          factor={5}
          style={{ backgroundColor: "#227B69" }}
        ></ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={4.2} sticky={{ start: 4.2, end: 5 }}>
          <h1 className="heading F-3">Topography</h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={4.5}
          factor={3}
          sticky={{ start: 4.5, end: 5.5 }}
          className="centerStart"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={toporeal} />
            <Card.Body>
              <Card.Title>Trails</Card.Title>
              <Card.Text>
                The interstate parkway provides a variety of trails for people to enjoy
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.alltrails.com/trail/us/new-jersey/long-path-gw-bridge-to-lamont-doherty-earth-observatory">All Trails</Card.Link>
            </Card.Body>
          </Card>
          
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={4.5}
          factor={3}
          sticky={{ start: 4.5, end: 5.5 }}
          className="centerRight"
        >
          <a
            href={"https://react-spring.io/components/parallax#parallax"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img src={topo} alt="" />
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
