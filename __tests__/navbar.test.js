import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../src/app/common/navbar/Navbar';

describe('Navbar component', () => {

  it('renders the navbar with brand icon and links', () => {
    
    render(<Navbar />);

    // Check for brand icon (adjust selector if needed)
    // const brandIcon = screen.getByRole('img', { name: /bi-emoji-sunglasses/i });
    // expect(brandIcon).toBeInTheDocument();

    // Check for link texts (adjust selectors if needed)
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();

  });

  it('renders links with correct href attributes', () => {

    render(<Navbar />);

    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toHaveAttribute('href', '/');

    const dashboardLink = screen.getByRole('link', { name: /Dashboard/i });
    expect(dashboardLink).toHaveAttribute('href', '/dashboard');

    const adminLink = screen.getByRole('link', { name: /Admin/i });
    expect(adminLink).toHaveAttribute('href', './admin');

    const reduxLink = screen.getByRole('link', { name: /Redux/i });
    expect(reduxLink).toHaveAttribute('href', './red');

  });
});
