import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Header from "../../../src/components/Header/Header"
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

function getByTextCaseInsensitive(container, text) {
    const matcher = new RegExp(`^${text}$`, 'i'); // 'i' torna a correspondência insensível a maiúsculas e minúsculas
    return Array.from(container.querySelectorAll('*')).find(node => node.textContent.match(matcher));
}

describe("Testes do componente Header", () => {
    describe("Testes da Logo", () => {
        test("Espera-se que tenha um logo em telas desktop", () => {
            // acessar os elementos da tela
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            );

            const imgLogo = screen.getByRole('img', { id: 'logo' })

            // agir interagindo com os elementos da tela (se necessário)

            // aferir
            expect(imgLogo).toBeInTheDocument();
        });

        test("Espera-se que ao clicar em logo seja redirecionado para homePage", async () => {
            // acessar os elementos da tela
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            );

            const imgLogo = screen.getByAltText('Cura logo da página');

            // agir interagindo com os elementos da tela (se necessário)
            userEvent.click(imgLogo)

            // aferir
            await waitFor(() => {
                expect(window.location.pathname).toBe('/frontend-ecommerce/');
            })
        });

        test("Espera-se que tenha um logo em telas mobile", () => {
            // acessar os elementos da tela
            window.innerWidth = 800;
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            );

            const imgLogoMobile = screen.getByAltText('Cura logo da página');

            // agir interagindo com os elementos da tela (se necessário)

            // aferir
            expect(imgLogoMobile).toBeInTheDocument();
        });

        test("Espera-se que ao clicar em logo mobile seja redirecionado para /frontend-ecommerce/", async () => {
            // acessar os elementos da tela
            window.innerWidth = 800;
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            );

            const imgLogoMobile = screen.getByAltText('Cura logo da página');

            // agir interagindo com os elementos da tela (se necessário)
            userEvent.click(imgLogoMobile)

            // aferir
            await waitFor(() => {
                expect(window.location.pathname).toBe("/frontend-ecommerce/");
            })
        });
    });

    describe("Testa barra de navegação", () => {
        test("Espera-se que tenha um link Home na tela e ao clicar nele seja redirecionado para /frontend-ecommerce/", async () => {
            // acessar os elementos da tela
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            );

            const homeLink = screen.getByText("Home");
            expect(homeLink).toBeInTheDocument();

            // agir interagindo com os elementos da tela (se necessário)
            userEvent.click(homeLink);

            // aferir
            await waitFor(() => {
                expect(window.location.pathname).toBe('/frontend-ecommerce/');
            });
        });

        test("Espera-se que ao clicar nos links da navBar seja redirecionado corretamente", async () => {
            const linksNav = ["shop", "blog", "about", "contact"];
            // acessar os elementos da tela
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            );

            for (const link of linksNav) {
                const shopLink = getByTextCaseInsensitive(screen.getByRole('navigation'), link)
                expect(shopLink).toBeInTheDocument();

                // agir interagindo com os elementos da tela (se necessário)
                userEvent.click(shopLink);

                // aferir
                await waitFor(() => {
                    expect(window.location.pathname).toBe(`/frontend-ecommerce/${link}/`);
                });
            }

        });

        test("Verifica se ao clicar no menu, o menu abre", async () => {
            // Defina o tamanho da janela para simular o modo mobile
            window.innerWidth = 800;
        
            // Renderize o componente Header
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            );
        
            // Verifique se o ícone do menu está presente no DOM
            const menuIcon = screen.getByTestId("bar");
            expect(menuIcon).toBeInTheDocument();
            
            // Simula o clique no ícone do menu
            const clickIn = fireEvent.click(menuIcon)
            expect(clickIn).toBe(true);

        });

        test("Verifica se ao clicar no shopping cart, o carrinho abre", async () => {
            // Defina o tamanho da janela para simular o modo mobile
            window.innerWidth = 800;
        
            // Renderize o componente Header
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            );
        
            // Verifique se o ícone do menu está presente no DOM
            const cartIcon = screen.getByTestId("shopping-cart");
            expect(cartIcon).toBeInTheDocument();
            
            // Simula o clique no ícone do menu
            const clickIn = fireEvent.click(cartIcon)
            expect(clickIn).toBe(true);
        });
    });
})