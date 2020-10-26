import React, { useEffect, useState } from "react";
import { Grid, Image } from "semantic-ui-react";

import "./style.css";

const HomeSlideShow = ({ images = [], interval = 10000 }) => {

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
            <Grid id="home-slideshow-container">
                <Grid.Row id="slide-holder">
                    <section className="slide" id="current">
                        <Image fluid size="massive" style={currentSlideStyle} id="slide-thumbnail"/>
                    </section>
                </Grid.Row>
                <Grid.Row id="slideshow-controller">
                    <span onClick={previous}>Previous</span>
                    <span onClick={next}>Next</span>
                </Grid.Row>
            </Grid>
        </>
    )

}

export default HomeSlideShow;