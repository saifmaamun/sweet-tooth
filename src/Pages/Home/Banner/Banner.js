import React from 'react';
import { Carousel } from 'react-bootstrap';
import carusel1 from '../../../images/banner-img/carusel-1.png'
import carusel2 from '../../../images/banner-img/carusel-2.png'
import carusel3 from '../../../images/banner-img/carusel-3.png'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carusel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-info fw-bold">Have a Refreshed Smile</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carusel2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-info fw-bold">Prevent Your Tooth From Destruction</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carusel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-info fw-bold">Shine Your Tooth</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;