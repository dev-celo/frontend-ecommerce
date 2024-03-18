import { render } from '@testing-library/react';
import Footer from '../../../src/components/Footer/Footer';

describe('Footer Component', () => {
    test('Renderização básica', () => {
        const { getByTestId } = render(<Footer />);
        
        // Verifica os links na seção "About"
        const aboutSection = getByTestId("about-section");
        const aboutLinks = aboutSection.querySelectorAll('a');
        expect(aboutLinks.length).toBe(5); // 5 links de "About"
    
        // Verifica os links na seção "My count"
        const myCountSection = getByTestId("my-count-section");
        const myCountLinks = myCountSection.querySelectorAll('a');
        expect(myCountLinks.length).toBe(5); // 5 links de "My count"
    
        // Verifica os ícones de mídia social
        const socialIcons = getByTestId("contact-section").querySelectorAll('.icon i');
        expect(socialIcons.length).toBe(4); // 4 ícones de mídia social
    
        // Verifica as imagens dos métodos de download e pagamento
        const paymentImages = getByTestId("install-app-section").querySelectorAll('img');
        expect(paymentImages.length).toBe(3); // 3 imagens de métodos de download e pagamento
      });
});
