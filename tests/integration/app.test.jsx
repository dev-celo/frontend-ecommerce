import { screen } from '@testing-library/react';
import App from '../../src/App';
import { vi } from 'vitest';
import renderWithRouter from '../../src/utilities/renderWithRouter';
import { BrowserRouter } from 'react-router-dom';

beforeAll(() => {
    window.matchMedia = window.matchMedia || function () {
        return {
            matches: false,
            media: '',
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
        };
    };
});

describe('Testing routes in App component', () => {
    test('renders home page when at /ecommerce', () => {
        renderWithRouter(<App />, { wrapper: BrowserRouter, route: '/ecommerce/' });

        const home = screen.getByTestId('home-page');

        expect(home).toBeInTheDocument();
    });

    test('renders login page when at /ecommerce/login', () => {
        renderWithRouter(<App />, { wrapper: BrowserRouter, route: '/ecommerce/login' });

        const login = screen.getByTestId('login-page');

        expect(login).toBeInTheDocument();
    });

    test('renders register page when at /ecommerce/register', () => {
        renderWithRouter(<App />, { wrapper: BrowserRouter, route: '/ecommerce/register' });

        const Register = screen.getByTestId('register-page');

        expect(Register).toBeInTheDocument();
    });

    test('renders details product page when at /ecommerce/product/:typeProduct/:id', () => {
        renderWithRouter(<App />, { wrapper: BrowserRouter, route: '/ecommerce/product/shirts/1' });

        const detailsPage = screen.getByTestId('details-page');

        expect(detailsPage).toBeInTheDocument();
    });
});