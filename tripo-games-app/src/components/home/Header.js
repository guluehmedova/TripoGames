import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import headerCardData from "../../datas/headerCartData";
import HeaderCard from "./HeaderCard";
import HeaderSimpleCard from "./HeaderSimpleCard";

export default function Header() {

    // const [scrollPosition, setScrollPosition] = useState(52.8459);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollPosition(window.scrollY);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    // const imageStyle = {
    //     transform: `translate3d(${scrollPosition}px,0 , 0)`,
    // };
    //


    const headerCards = headerCardData.map((card) => {
        return (<HeaderCard key={card.id} {...card} />)
    })

    console.log(headerCards)


    return (
        <header className="header">
            <Navbar />

            <img className="herp-img"
                src="./images/home/hero_image.webp"
                alt=""
            // style={imageStyle}
            />

            <div className="container">
                <div className="content animate__animated animate__pulse">
                    <div className="col-lg-12">
                        <h1 className="header-title">
                            Made to Be Played
                        </h1>
                        <p>
                            The Very Best in Mobile Gaming
                        </p>
                        <div className="img">
                            <a href="#">
                                <img src="./images/home/applestore.webp" alt="" />

                            </a>
                            <a href="#">
                                <img src="./images/home/googleplay.webp" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <section className="header-card">
                <div className="container">
                    <div className="row">
                        {headerCards}
                        <HeaderSimpleCard />
                    </div>
                </div>
            </section>
        </header>
    )
}

//52.8459 - scroll up
//-151.9 - scroll down
// -15 .... 52