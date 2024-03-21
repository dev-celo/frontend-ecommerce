import { render, screen } from '@testing-library/react';
import { DoubleBanner } from '../../../src/components/DoubleBanner/DoubleBanner';
import { Banner } from '../../../src/components/BannerDiscount/Banner';

describe('DoubleBanner Component', () => {
  test('Renderiza os banners corretamente', () => {
    render(<DoubleBanner />);

    const bannerTitle1 = screen.getByTestId('banner-title-1');
    expect(bannerTitle1).toBeInTheDocument();

    const bannerSubtitle1 = screen.getByTestId('banner-subtitle-1');
    expect(bannerSubtitle1).toBeInTheDocument();

    const bannerDescription1 = screen.getByTestId('banner-description-1');
    expect(bannerDescription1).toBeInTheDocument();

    const bannerButton1 = screen.getByTestId('banner-button-1');
    expect(bannerButton1).toBeInTheDocument();

    const bannerTitle2 = screen.getByTestId('banner-title-2');
    expect(bannerTitle2).toBeInTheDocument();

    const bannerSubtitle2 = screen.getByTestId('banner-subtitle-2');
    expect(bannerSubtitle2).toBeInTheDocument();

    const bannerDescription2 = screen.getByTestId('banner-description-2');
    expect(bannerDescription2).toBeInTheDocument();

    const bannerButton2 = screen.getByTestId('banner-button-2');
    expect(bannerButton2).toBeInTheDocument();
  });
});

describe('Banner Component', () => {
  test('Renderiza o banner corretamente', () => {
    render(<Banner />);

    const bannerTitle = screen.getByTestId('banner-title');
    expect(bannerTitle).toBeInTheDocument();

    const bannerSubtitle = screen.getByTestId('banner-subtitle');
    expect(bannerSubtitle).toBeInTheDocument();

    const bannerButton = screen.getByTestId('banner-button');
    expect(bannerButton).toBeInTheDocument();
  });
});
