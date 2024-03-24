import { useState, useEffect } from "react";
import "./Carousel.scss";
import leftArrow from "../../images/leftArrow.png";
import rightArrow from "../../images/rightArrow.png";

function Carousel({ images, images_content }) {
    const [activeImg, setActiveImg] = useState((images.length - 1) / 2);
    const [items, setItems] = useState(images);
    const [ishover, setIshover] = useState(false);

    const rightClick = () => {
        const newItems = [...items];

        const firstElement = newItems.shift();
        newItems.push(firstElement);

        setItems(newItems);
        setActiveImg((preactiveImg) => (preactiveImg + 1) % 5);
    };

    const leftClick = () => {
        const newItems = [...items];

        const lastElement = newItems.pop();
        newItems.unshift(lastElement);

        setItems(newItems);
        setActiveImg((preactiveImg) => (preactiveImg - 1 + 5) % 5);
    };

    const OpenHover = () => {
        setIshover(true);
    };
    const closeHover = () => {
        setIshover(false);
    };

    return (
        <div className="Carousel">
            {/* Images */}
            <div className="gallery-wraper">
                <div className="gallery-container">
                    {items.map((item, index) => (
                        <img
                            className={`gallery-item gallery-item-${index + 1}`}
                            src={item}
                            alt="#"
                            onMouseOver={OpenHover}
                            onMouseOut={closeHover}
                        />
                    ))}
                    <div
                        className={`${ishover ? "img_text" : "hide_text"}`}
                        onMouseOver={OpenHover}
                        onMouseOut={closeHover}
                    >
                        {images_content[activeImg]}
                    </div>
                </div>
            </div>

            {/* Arrows */}
            <div className="gallery-controls">
                <div className="gallery-controls-box">
                    <img src={leftArrow} alt="#" onClick={leftClick} />
                    <div className="dot-box">
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className={`dots ${
                                    activeImg === index ? "active-dots" : ""
                                }`}
                            ></div>
                        ))}
                    </div>
                    <img src={rightArrow} alt="#" onClick={rightClick} />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
