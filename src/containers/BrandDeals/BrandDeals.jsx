import React from 'react';
import Container from "../Container/Container.jsx";
import Brand1 from '/public/brand1.png';
import Brand2 from '/public/brand2.png';
import Brand3 from '/public/brand3.png';
import Brand4 from '/public/brand4.png';
import Brand5 from '/public/brand5.png';
import './BrandDeals.scss';

export default function BrandDeals() {
    // const Brand1 = require('/public/brand1.png');
    // const Brand2 = require('/public/brand2.png');
    // const Brand3 = require('/public/brand3.png');
    // const Brand4 = require('/public/brand4.png');
    // const Brand5 = require('/public/brand5.png');
    return (
        <div className="brand-deals">
            <Container>
                <div className="brand-deals__inner">
                    <h2 className="brand-deals__heading">Top Brands Deal</h2>
                    <p className="brand-deals__subheading">Up To <span>60%</span> off on brands</p>
                    <div className="brand-deals__images">
                        <img src={Brand1} alt="brand logo" loading="lazy"/>
                        <img src={Brand2} alt="brand logo" loading="lazy"/>
                        <img src={Brand3} alt="brand logo" loading="lazy"/>
                        <img src={Brand4} alt="brand logo" loading="lazy"/>
                        <img src={Brand5} alt="brand logo" loading="lazy"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};