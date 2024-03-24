import React from "react";
import Carousel from "../Carousel/Carousel";
import "./Body.scss";
import img1 from "../../images/caraimg1.png";
import img2 from "../../images/caraimg2.png";
import img3 from "../../images/caraimg3.png";
import img4 from "../../images/caraimg4.png";
import img5 from "../../images/caraimg5.png";

function Body() {
    const images = [img4, img5, img1, img2, img3];
    const images_content = [
        "Flowers",
        "Abstract art 1",
        "Modern kitchen utensils",
        "Abstract art 2",
        "Flower pots",
    ];
    return (
        <div className="Body">
            <h1>Featured Products</h1>
            <p>Explore and discover a variety of products</p>
            <Carousel images={images} images_content={images_content} />
        </div>
    );
}

export default Body;
