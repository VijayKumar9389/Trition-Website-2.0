import './Slider.css';
import { Slides } from './Slides';
import React, { useEffect, useState, useRef } from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

function Slider() {

    const [current, setCurrent] = useState(0);
    const length = Slides.length - 1;
    const timeout = useRef(null);

    useEffect(() => {

        timeout.current = setTimeout(nextSlide, 15000)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }

    }, [current, length])


    const nextSlide = () => {
        setCurrent(current === length ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length : current - 1);
    };

    return (
        <div id='slider-container' data-aos="slide-up">
            {Slides.map((slide, index) => {
                return (
                    <div key={index} id='slide-container'>
                        {index === current && (
                            <>
                                <div id='loading-bar'></div>
                                <img id='slide-img' src={slide.image} data-aos="fade-in" />
                                <div id='slide-content'>
                                    <div id='content-wrapper'>
                                        <h1 data-aos="fade-up">{slide.title}</h1>
                                        <p data-aos="fade-in" data-aos-delay="900">{slide.desc}</p>
                                    </div>
                                </div>
                            </>
                        )};
                    </div>
                );
            })}
            <div id='slider-btn-wrapper'>
                <IoArrowBack className='slider-btn' onClick={prevSlide} />
                <IoArrowForward className='slider-btn' onClick={nextSlide} />
            </div>
        </div>
    );
}

export default Slider;