import React from 'react';
import { render } from '@testing-library/react';
import BrandDeals from './BrandDeals.jsx';

jest.mock('/public/brand1.png', () => 'brand1.png');
jest.mock('/public/brand2.png', () => 'brand2.png');
jest.mock('/public/brand3.png', () => 'brand3.png');
jest.mock('/public/brand4.png', () => 'brand4.png');

describe('BrandDeals Component', () => {
    it('should match the snapshot', () => {
        const brandDeals = render(<BrandDeals />);
        expect(brandDeals).toMatchSnapshot();
    });
});