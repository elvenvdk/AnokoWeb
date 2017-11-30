import React, { Component } from 'react';
import _ from 'lodash';
import {
    Carousel,
} from 'react-bootstrap';

import {
    LoLos,
    LePoisson,
    bklynClay,
    aceHotel
} from '../images';


class GalleryView extends Component {
    render() {
        return (
            <div className="container-fluid carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} src={LoLos} />
                        <Carousel.Caption>
                            <h3>LOLO's SEAFOOD</h3>
                            <p>
                            Members receive a discount off meals at LoLo's Seafood Shack. 
                            LoLo's Seafood Shack serves up a variety of seafood from the 
                            coastal comfort foods of the Cape like sauced shrimp to Caribbean 
                            street eats such as conch fritters. LoLo's is known for 
                            its famous Johnny Cake sandwiches and flavorful and fresh 
                            seafood steam-pots.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} src={LePoisson} />
                        <Carousel.Caption>
                            <h3>Le Poisson Rouge</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} src={bklynClay} />
                        <Carousel.Caption>
                            <h3>BKLYN CLAY</h3>
                            <p>
                            Members receive 20% discount on “Tryday nights”. “Trydays” for adults 
                            happen on the 1st and 3rd Friday of the month and are meant to 
                            give beginners a feel for the wheel. BKLYN CLAY is a modern ceramics 
                            studio for potters, artists, production clayworkers and hobbyists, with 
                            the first community Gas Kiln in Brooklyn.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} src={aceHotel} />
                        <Carousel.Caption>
                            <h3>Ace Hotel</h3>
                            <p>
                            Members receive a 10% discount off accommodations at Ace Hotel, 
                            a hip youthful hotel in midtown with a retro, artistic decor. 
                            The Lobby Bar features a rotating cast of craft beers & spirits, 
                            and a selections of snacks from the Breslin kitchen. During the day, the 
                            lobby takes on a co-working space vibe, and in the evening there is a 
                            lively bar where DJs spin vinyl or live bands play on select evenings
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}


export default GalleryView;
