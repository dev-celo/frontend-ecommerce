import { render, screen } from '@testing-library/react';
import Feature from '../../../src/components/Feature/Feature';

// Dados de teste
const features = [
  {
    key: 1,
    imgSrc: 'example.jpg',
    altText: 'Example Alt Text'
  },
  {
    key: 2,
    imgSrc: 'example2.jpg',
    altText: 'Example Alt Text 2'
  }
];

describe('Feature Component', () => {
  test('Renderiza as features corretamente', () => {
    render(<Feature features={features} />);

    // Verifica se as imagens estão presentes com os atributos corretos
    const featureImages = screen.getAllByRole("img");
    expect(featureImages.length).toBe(features.length); // Verifica o número de imagens renderizadas

    featureImages.forEach((img, index) => {
      expect(img.src).toContain(features[index].imgSrc); // Verifica o src da imagem
      expect(img.alt).toBe(features[index].altText); // Verifica o alt da imagem
    });
  });
});
