import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

function renderWithRouter(ui, { route = '/ecommerce' }) {
    window.history.pushState({}, '', route)
    return {
        user: userEvent.setup(),
        ...render(ui, { wrapper: BrowserRouter })
    }
}

export default renderWithRouter;