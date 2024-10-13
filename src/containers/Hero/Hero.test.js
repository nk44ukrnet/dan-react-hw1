import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Hero from "./Hero.jsx";

jest.mock('./icons/ChevronLeft.svg?react', () => () => <svg data-testid="chevron-left" />);
jest.mock('./icons/ChevronRight.svg?react', () => () => <svg data-testid="chevron-right" />);

describe('Hero component testing', () => {
    it('should render the first slide by default', ()=>{
        render(<Hero />);
        expect(screen.getByText('Summer Value Pack')).toBeInTheDocument();
        expect(screen.getByText('Shop Now')).toBeInTheDocument();
    })

    it('should navigate to the next slide on "next" button click', ()=>{
        render(<Hero />);
        const nextBtn = screen.getByRole('button', { name: /next/i });
        fireEvent.click(nextBtn);

        expect(screen.getByText('Winter Value Pack')).toBeInTheDocument();
        expect(screen.getByText('Shop Later')).toBeInTheDocument();
    })

    it('should navigate to the previous slide on "prev" button click', ()=>{
        render(<Hero />);
        const prevBtn = screen.getByRole('button', { name: /previous/i });
        fireEvent.click(prevBtn);

        expect(screen.getByText('Spring Value Pack')).toBeInTheDocument();
        expect(screen.getByText('Shop Any Time')).toBeInTheDocument();
    })


    test('should jump to the correct slide on dot click', () => {
        render(<Hero />);

        const secondSlideDot = screen.getAllByRole('button', { name: '' })[1];
        fireEvent.click(secondSlideDot);

        expect(screen.getByText('Winter Value Pack')).toBeInTheDocument();
        expect(screen.getByText('Shop Later')).toBeInTheDocument();
    });

    test('should wrap to the first slide after the last slide on "Next" click', () => {
        render(<Hero />);
        const nextButton = screen.getByRole('button', { name: /next/i });

        // Click "Next" multiple times to cycle through all slides
        fireEvent.click(nextButton); // 1st -> 2nd slide
        fireEvent.click(nextButton); // 2nd -> 3rd slide
        fireEvent.click(nextButton); // 3rd -> 1st slide (wrap around)

        expect(screen.getByText('Summer Value Pack')).toBeInTheDocument();
        expect(screen.getByText('Shop Now')).toBeInTheDocument();
    });
})