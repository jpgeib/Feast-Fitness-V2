import React, { Component } from "react";
import { Header, Image, Icon } from "semantic-ui-react";
import GreenVeggies from "../../assets/images/Leafy-Green.jpg";
import MixedVeggies from "../../assets/images/alt-veggie-backdrop1-edited.jpg";
import VeggieBasket from "../../assets/images/alt-veggie-backdrop2.jpg";

import "./style.css";

class HomeSlideShow extends Component {

    state = {
        slide: ""
    }

    render() {
        
        return (
            <>
                <section id="home-slideshow-container">
                    <div id="slide-holder">
                        <section className="slide" id="previous">
                            <div className="slide-thumbnail"></div>
                        </section>
                        <section className="slide" id="current">
                            <div className="slide-thumbnail"></div>
                        </section>
                        <section className="slide" id="next">
                            <div className="slide-thumbnail"></div>
                        </section>
                    </div>
                    <div id="slideshow-controller">
                        <span>Previous</span>
                        <span>Next</span>
                    </div>
                </section>
            </>
        )
    }
}

export default HomeSlideShow;