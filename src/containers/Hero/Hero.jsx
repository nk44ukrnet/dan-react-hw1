import React from 'react';
import Container from "../Container/Container.jsx";
import ChevronLeft from './icons/ChevronLeft.svg?react';
import ChevronRight from './icons/ChevronRight.svg?react';
import Button from "../../components/Button/Button.jsx";
import {useState} from "react";
import './Hero.scss';


const heroSlides = [
    {
        preTitle: `T-shirt / Tops`,
        title: `Summer Value Pack`,
        subTitle: `cool / colorful / comfy`,
        image: `/public/banner1.png`,
        buttonText: `Shop Now`,
    },
    {
        preTitle: `T-rock / Boxers`,
        title: `Winter Value Pack`,
        subTitle: `Top / powerful / modest`,
        image: `/public/banner2.png`,
        buttonText: `Shop Later`,
    },
    {
        preTitle: `T-must / Woops`,
        title: `Spring Value Pack`,
        subTitle: `Bottom / weak / humble`,
        image: `/public/banner3.png`,
        buttonText: `Shop Any Time`,
    },
]

export default function Hero() {
    const [slideNumber, setSlideNumber] = useState(0);

    function handleNextSlide() {
        if ((slideNumber + 1) > heroSlides.length - 1) {
            setSlideNumber(0);
        } else {
            setSlideNumber(prevState => prevState + 1);
        }
    }

    function handlePrevSlide() {
        if ((slideNumber - 1) < 0) {
            setSlideNumber(heroSlides.length - 1);
        } else {
            setSlideNumber(prevState => prevState - 1);
        }
    }

    return (
        <section className="hero" style={{backgroundImage: `url(${heroSlides[slideNumber].image}`}}>
            <Container>
                <div className="hero__slide">
                    <p className="hero__subtitle">{heroSlides[slideNumber].preTitle}</p>
                    <h2 className="hero__title">{heroSlides[slideNumber].title}</h2>
                    <p className="hero__subtitle">{heroSlides[slideNumber].subTitle}</p>

                    <Button classNames="button button-white">{heroSlides[slideNumber].buttonText}</Button>
                </div>
            </Container>
            {heroSlides.length > 1 && <div className="hero__slide-controls">
                <button type="button" className="hero__arrows hero__arrows--prev" onClick={handlePrevSlide} aria-label="previous">
                    <ChevronLeft/></button>
                <button type="button" className="hero__arrows hero__arrows--next" onClick={handleNextSlide} aria-label="next">
                    <ChevronRight/></button>
                <div className="hero__dots">
                    {heroSlides.map((slide, index) => {
                        let activeCSSClass = '';
                        if (index === slideNumber) {
                            activeCSSClass = ' active';
                        }
                        return <button
                            key={index}
                            type="button"
                            className={`hero__dot ${activeCSSClass} `}
                                       onClick={() => {
                                           setSlideNumber(index)
                                       }}></button>
                    })}
                </div>
            </div>}
        </section>
    );
};