import { render, fireEvent, waitFor } from '@testing-library/react';
import NavBar from '../../../src/components/Header/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { vi } from "vitest"
import Header from '../../../src/components/Header/Header';

// Mock do closeBar
const closeBarMock = vi.fn();

// Mock do módulo shoppingCartContext
vi.mock('../../../src/components/context/shoppingCartContext', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useShoppingCart: () => ({
            closeBar: closeBarMock,
        }),
    };
});

describe('NavBar Component Tests', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: vi.fn(), // Deprecated
                removeListener: vi.fn(), // Deprecated
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            })),
        });
    });

    test('Navbar is rendered', () => {
        const { getByTestId } = render(
            <Router>
                <NavBar isOpen={true} />
            </Router>
        );

        // Verifica se o elemento do navbar foi renderizado
        const navbarElement = getByTestId('navbar-component');
        expect(navbarElement).toBeInTheDocument();
    });

    test('Navbar is closed by default', () => {
        const { queryByTestId } = render(
            <Router>
                <Header />
            </Router>
        );

        // Verifica se o elemento do navbar não está presente
        const navbarElement = queryByTestId('navbar-component');
        expect(navbarElement).toBeNull();
    });

    test('Clicking close button calls closeBar function', async () => {
        const { getByTestId } = render(
            <Router>
                <NavBar isOpen={true} />
            </Router>
        );

        // Encontra o botão de fechar
        const closeButton = getByTestId('close-button');

        // Simula um clique no botão de fechar
        fireEvent.click(closeButton);

        // Aguarda para garantir que as chamadas assíncronas (se houver) sejam concluídas
        await waitFor(() => {
            // Verifica se closeBar foi chamada
            expect(closeBarMock).toHaveBeenCalled();
        });
    });
});
