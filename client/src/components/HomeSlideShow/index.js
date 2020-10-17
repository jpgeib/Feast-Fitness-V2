import React, { useEffect, useState } from "react";
import { Header, Image, Icon } from "semantic-ui-react";

import "./style.css";

const HomeSlideShow = ({ images = [], interval = 3000 }) => {

    const [thumbnails, setThumbnails] = useState([]);
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(() => {
        setThumbnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('" + images[currentSlide] + "')"
        });

        if(currentSlide>0) {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[currentSlide-1] + "')"
            });
        } else {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[images.length-1] + "')"
            });
        }

        if(currentSlide === images.length-1) {
            setNextSlideStyle({
                backgroundImage: "url('" + images[0] + "')"
            });
        } else {
            setNextSlideStyle({
                backgroundImage: "url('" + images[currentSlide+1] + "')"
            });
        }

        const imageLoop = setInterval(() => {
            if(currentSlide === images.length-1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(imageLoop);
    }, [images, currentSlide, interval]);

    const previous = () => {
        if(currentSlide>0) {
            setCurrentSlide(currentSlide-1);
        } else {
            setCurrentSlide(thumbnails.length-1)
        }
    };

    const next = () => {
        if(currentSlide === thumbnails.length-1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide+1)
        }
    };

    return (
        <>
            <section id="home-slideshow-container">
                <div id="slide-holder">
                    <section className="slide" id="previous">
                        <div style={previousSlideStyle} className="slide-thumbnail"></div>
                    </section>
                    <section className="slide" id="current">
                        <div style={currentSlideStyle} className="slide-thumbnail"></div>
                    </section>
                    <section className="slide" id="next">
                        <div style={nextSlideStyle} className="slide-thumbnail"></div>
                    </section>
                </div>
                <div id="slideshow-controller">
                    <span onClick={previous}>Previous</span>
                    <span onClick={next}>Next</span>
                </div>
            </section>
        </>
    )

}

export default HomeSlideShow;