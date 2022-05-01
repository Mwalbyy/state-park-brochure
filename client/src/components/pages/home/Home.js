import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import forest from "./images/definitlyNJ.jpg";
import pastPic from "./images/pastPic.jpg";
import topographyReal from "./images/topographyReal.PNG";
import { Card } from "react-bootstrap";
// import topographyLink from "https://react-spring.io/components/parallax#parallax"
// https://earth.google.com/web/@40.98667028,-73.9053768,38.22883411a,2295.25763915d,35y,-77.59128487h,65.92113942t,-0r

export default function Home() {
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
            <h1 className="centerClass F-3">Palisades Interstate Park</h1>
          </ParallaxLayer>
        </ParallaxLayer>
        {/* backGround for the history section */}
        <ParallaxLayer
          speed={1}
          offset={1}
          factor={6}
          style={{ backgroundColor: "#162529" }}
        ></ParallaxLayer>
        {/* Title of about section */}
        <ParallaxLayer
          speed={0.5}
          offset={1.1}
          sticky={{ start: 1.1, end: 1.6 }}
        >
          <h1 className="heading F-3">About</h1>
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
            The Palisades Interstate Park in New Jersey is about twelve miles
            long and half a mile wide, with 2,500 acres of wild Hudson River
            shorefront, uplands, and cliffs
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
            Palisade is derived from the same root as the word pole, ultimately
            from the Latin word palus, meaning stake. A "palisade" is, in
            general, a defensive fence or wall made up of wooden stakes or tree
            trunks.
          </h1>
        </ParallaxLayer>
        {/* background for topography section */}
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
          <Card className="cardTopoLong">
            <Card.Img variant="top" src={topographyReal} />
            <Card.Body>
              <Card.Title>Trails</Card.Title>
              <Card.Text>
                The interstate parkway provides a variety of trails for people
                to enjoy
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link
                href="https://www.alltrails.com/trail/us/new-jersey/long-path-gw-bridge-to-lamont-doherty-earth-observatory"
                target={"_blank"}
              >
                All Trails
              </Card.Link>
            </Card.Body>
          </Card>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={4.5}
          factor={3}
          sticky={{ start: 4.5, end: 5.5 }}
          className="centerRightCard"
        >
          <Card className="cardTopoStub">
            <Card.Body>
              <Card.Title className="F-3">
                Palisades Interstate Parkway
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                New Jersey{" "}
              </Card.Subtitle>
              <Card.Text>
                Google earth provides you with an accurate representation of
                what the Palisades look like
              </Card.Text>
              <Card.Link href="https://earth.google.com/web/@40.9870157,-73.90637425,116.55005094a,1005.26551458d,35y,-77.58230428h,65.91054926t,0r">
                Earth Link
              </Card.Link>
            </Card.Body>
          </Card>
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
