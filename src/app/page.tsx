'use client';

import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import StatsBand from '@/components/StatsBand';
import ProductsSection from '@/components/ProductsSection';
import SeriesSection from '@/components/SeriesSection';
import ColourSection from '@/components/ColourSection';
import BlogSection from '@/components/BlogSection';
import GallerySection from '@/components/GallerySection';
import VideoSection from '@/components/VideoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSlider />
          <StatsBand />
          <ProductsSection />
          <SeriesSection />
          <ColourSection />
          <BlogSection />
          <GallerySection />
          <VideoSection />
          <TestimonialsSection />
          <CTABand />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
