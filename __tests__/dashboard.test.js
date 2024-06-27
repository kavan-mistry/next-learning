import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Page from '../src/app/dashboard/page'
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: '',
      asPath: '/',
      push: jest.fn(),
    };
  },
}));

describe('dashboard', () => {

    it('render dashboard', () => {

        render(<Page />);

        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
    });

    it('displays the click count initially as 0', () => {
        render(<Page />);

        const clickCount = screen.getByText(/You clicked 0 times/i);
        expect(clickCount).toBeInTheDocument();
    });

    it('increments the click count on button click', () => {
        render(<Page />);

        const button = screen.getByRole('button', { name: /Click me/i });
        const initialCount = screen.getByText(/You clicked 0 times/i);

        fireEvent.click(button);

        expect(initialCount).toBeInTheDocument();
        expect(screen.getByText(/You clicked 1 times/i)).toBeInTheDocument();
    });

});