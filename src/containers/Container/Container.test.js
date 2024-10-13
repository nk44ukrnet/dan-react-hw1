import React from 'react';
import { render } from '@testing-library/react';
import Container from "./Container.jsx";

describe('Container component testing', () => {
    it('should match snapshot', () => {
        const { container } = render(<Container />);
        expect(container).toMatchSnapshot();
    })
})