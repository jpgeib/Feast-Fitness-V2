import React, { Component } from "react";
import { Header, Image, Icon } from "semantic-ui-react";
import GreenVeggies from "../../assets/images/Leafy-Green.jpg";
import MixedVeggies from "../../assets/images/alt-veggie-backdrop1-edited.jpg";
import VeggieBasket from "../../assets/images/alt-veggie-backdrop2.jpg";

import "./style.css";

class HomeSlideShow extends Component {
    render() {
        return (
            <>
                <div id="home-slideshow-container">
                    <div className="slide fade">
                        <div className="number">1 / 3</div>
                        <Image src={GreenVeggies} size="large" />
                        <Header as="h3" className="caption">Healthy Food</Header>
                    </div>
                    <div className="slide fade">
                        <div className="number">2 / 3</div>
                        <Image src={MixedVeggies} size="large" />
                        <Header as="h3" className="caption">Healthy Food</Header>
                    </div>
                    <div className="slide fade">
                        <div className="number">3 / 3</div>
                        <Image src={VeggieBasket} size="large" />
                        <Header as="h3" className="caption">Healthy Food</Header>
                    </div>

                    <a className="prev" onClick=""><Icon name="arrow circle left" /></a>
                    <a className="next" onClick=""><Icon name="arrow circle right" /></a>
                </div>
                <br />
                <div id="slide-tracker">
                    <span className="dot" onClick="" ></span>
                    <span className="dot" onClick="" ></span>
                    <span className="dot" onClick="" ></span>
                </div>
            </>
        )
    }
}

export default HomeSlideShow;