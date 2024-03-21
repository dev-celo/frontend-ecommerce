import { fireEvent, render } from "@testing-library/react";
import DecreaseProduct from "../../../src/components/Buttons/DecreaseProduct";
import { vi } from "vitest";
import { useShoppingCart } from "../../../src/components/context/shoppingCartContext";

describe("IncreaseProduct Component", () => {
    vi.mock("../../../src/components/context/shoppingCartContext.jsx", () => ({
        useShoppingCart: vi.fn(),
    }));

    test("Renderiza o botão de diminuição corretamente com quantity maior que um", () => {
        const decreaseCartQuantity = vi.fn();
        useShoppingCart.mockReturnValue({ decreaseCartQuantity });

        const { getByTestId } = render(<DecreaseProduct id={1} quantity={2} />)

        const decreaseButton = getByTestId("decrease-button");
        expect(decreaseButton).toBeInTheDocument

        fireEvent.click(decreaseButton);

        expect(decreaseCartQuantity).toHaveBeenCalled();
    });

    test("Não renderiza o botão de diminuição corretamente com quantity menor que um", () => {
        const decreaseCartQuantity = vi.fn();
        useShoppingCart.mockReturnValue({ decreaseCartQuantity });

        const { queryByRole } = render(<DecreaseProduct id={1} quantity={1} />)

        const decreaseButton = queryByRole('button', { name: '-' });
        expect(decreaseButton).not.toBeInTheDocument();
    });
})