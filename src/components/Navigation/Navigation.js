import { useState, useEffect, useRef } from "react";
import "./Navigation.scss";
import logo from "../../images/Intersect.png";
import searchIcon from "../../images/Vector.png";
import downIcon from "../../images/chevron-down.png";

function Navigation({ items }) {
    const [visibleItems, setVisibleItems] = useState(items);
    const [hiddenItems, setHiddenItems] = useState([]);

    const [open, setOpen] = useState(false);

    const fitsInMainMenu = (items, screenWidth) => {};

    const updateMenuItems = () => {
        const screenWidth = window.innerWidth;
        let mainItems = items;
        let moreItems = items;

        if (screenWidth < 640) {
            mainItems = items.slice(0, 0);
            moreItems = items.slice(0);
        } else if (screenWidth < 750) {
            mainItems = items.slice(0, 1);
            moreItems = items.slice(1);
        } else if (screenWidth < 780) {
            mainItems = items.slice(0, 2);
            moreItems = items.slice(2);
        } else if (screenWidth < 850) {
            mainItems = items.slice(0, 3);
            moreItems = items.slice(3);
        } else if (screenWidth < 1000) {
            mainItems = items.slice(0, 4);
            moreItems = items.slice(4);
        } else if (screenWidth < 1100) {
            mainItems = items.slice(0, 5);
            moreItems = items.slice(5);
        } else if (screenWidth < 1240) {
            mainItems = items.slice(0, 6);
            moreItems = items.slice(6);
        } else {
            mainItems = items.slice(0, 7);
            moreItems = items.slice(7);
        }
        setVisibleItems(mainItems);
        setHiddenItems(moreItems);
    };

    useEffect(() => {
        updateMenuItems();

        window.addEventListener("resize", updateMenuItems);

        return () => {
            window.removeEventListener("resize", updateMenuItems);
        };
    }, []);

    const handleOpen = () => {
        if (open) setOpen(false);
        else setOpen(true);
    };

    return (
        <header className="header">
            {/* Left */}
            <div className="left">
                <img src={logo} alt="#" />
                <span style={{ fontSize: "2rem" }} className="heading">
                    E-COMM
                </span>
            </div>

            {/* Center */}
            <ul className="center">
                {/* Visible items */}
                {visibleItems.map((item, index) => (
                    <li key={index} className="visible_items">
                        {item}
                    </li>
                ))}

                {/* more section */}
                {hiddenItems.length > 0 && (
                    <li className="hidden_items">
                        <div className="more-section">
                            <span>MORE</span>
                            <img src={downIcon} alt="#" onClick={handleOpen} />
                        </div>
                        <ul
                            style={{
                                position: "absolute",
                                top: "11vh",
                                right: "25vw",
                                backgroundColor: "#2F302C",
                                borderRadius: "8px",
                                listStyle: "none",
                                zIndex: "100",
                                paddingBottom: "0",
                                display: open ? "block" : "none",
                                cursor: "pointer",
                            }}
                            className="hidden_items_container"
                        >
                            {hiddenItems.map((item, index) => (
                                <li
                                    style={{ padding: "1rem" }}
                                    key={index}
                                    className="single_hidden_item"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </li>
                )}
            </ul>

            {/* Right */}
            <div className="right">
                <img src={searchIcon} alt="#" />
                <input
                    placeholder="Search Something"
                    className="heavy-placeholder"
                />
            </div>
        </header>
    );
}

export default Navigation;
