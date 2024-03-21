import { render, fireEvent } from '@testing-library/react';
import Hero from '../../../src/components/Hero/Hero';
import { BrowserRouter } from 'react-router-dom';
import { axe } from 'jest-axe';

describe('Hero Component', () => {
    test('Renderização básica', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );

        const heroSection = getByTestId('hero');
        expect(heroSection).toBeInTheDocument();

        // Defina um array com os test ids dos elementos internos
        const elementTestIds = ['trade-offer', 'super-deals', 'all-products', 'coupons', 'shop-now'];

        // Verifica se cada elemento interno está presente no componente
        elementTestIds.forEach((testId) => {
            const element = getByTestId(testId);
            expect(element).toBeInTheDocument();
        });
    });

    test('Presença de elementos', () => {
        const testDataIds = [
            'trade-offer',
            'super-deals',
            'all-products',
            'coupons',
            'shop-now'
        ];
        const { getByTestId } = render(<Hero />);

        testDataIds.forEach((id) => {
            const dataID = getByTestId(id)

            expect(dataID).toBeInTheDocument
        })
    });

    test('Classes CSS', () => {
        const { container } = render(<Hero />);
        const section = container.querySelector("#hero");

        expect(section).toHaveClass("cont");
    });

    test('Texto', () => {
        const { getByText } = render(<Hero />);

        expect(getByText('Trade-in-offer')).toBeInTheDocument();
        expect(getByText('Super value deals')).toBeInTheDocument();
        expect(getByText('On all products')).toBeInTheDocument();
        expect(getByText('Save more with coupons & up to 70% off!')).toBeInTheDocument();
        expect(getByText('Shop Now')).toBeInTheDocument();
    });

    test('Evento de clique no botão', () => {
        const { getByText } = render(<Hero />);
        const button = getByText('Shop Now');
        fireEvent.click(button);
    });

    test('Acessibilidade', async () => {
        const { container } = render(<Hero />);
        const results = await axe(container);

        // Verifica se não há violações de acessibilidade
        expect(results.violations.length).toBe(0);
    });
});
