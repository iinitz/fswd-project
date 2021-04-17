import React from "react"
import { Carousel } from 'react-bootstrap';

import './Home.css'

const Home = () => {
    return (
        <div className="page-home">
            {/* Promotion */}
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/400?text=Second slide&bg=373940"
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item  interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/400?text=Third slide&bg=373940"
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>

            {/* Banner */}
            <div></div>
        </div>
    )
};

export default Home;