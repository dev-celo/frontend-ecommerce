import { render, screen, fireEvent } from '@testing-library/react';
import IncreaseProduct from '../../../src/components/Buttons/IncreaseProduct';
import { useShoppingCart } from '../../../src/components/context/shoppingCartContext.jsx';
import { vi } from 'vitest';

// Mock do useShoppingCart
vi.mock('../../../src/components/context/shoppingCartContext.jsx', () => ({
  useShoppingCart: vi.fn(), // Mock do hook
}));

describe('IncreaseProduct Component', () => {
  test('Renderiza o botão de aumento corretamente', () => {
    // Simula uma quantidade maior que 0
    const quantity = 1;
    const increaseCartQuantity = vi.fn(); // Mock da função increaseCartQuantity
    const selectedSize = 'M';
    
    // Configura o hook useShoppingCart para retornar os valores mockados
    useShoppingCart.mockReturnValue({ increaseCartQuantity, selectedSize });

    render(<IncreaseProduct id={3} quantity={quantity} />);

    // Verifica se o botão de aumento está presente
    const increaseButton = screen.getByRole('button', { name: '+' });
    expect(increaseButton).toBeInTheDocument();

    // Simula um clique no botão de aumento
    fireEvent.click(increaseButton);

    // Verifica se a função de aumento foi chamada com os argumentos corretos
    expect(increaseCartQuantity).toHaveBeenCalledWith(3, quantity, 'M');
  });

  test('Não renderiza o botão de aumento quando a quantidade é 0', () => {
    // Simula uma quantidade igual a 0
    const quantity = 0;

    render(<IncreaseProduct id={123} quantity={quantity} />);

    // Verifica se o botão de aumento não está presente
    const increaseButton = screen.queryByRole('button', { name: '+' });
    expect(increaseButton).not.toBeInTheDocument();
  });
});
