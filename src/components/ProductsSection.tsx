'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { ArrowRight } from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

const products = [
  {
    title: 'Aluminium Doors',
    description: 'Elegant and durable aluminium doors featuring Japanese precision engineering. Available in Sliding, Casement, French, Folding, Corner Slider, and Slide & Fold designs.',
    image: CDN + 'wp-content/uploads/2020/08/Aluminum-Doors-Home-Office.jpg',
    designs: ['Sliding', 'Casement', 'French', 'Folding', 'Corner Slider'],
  },
  {
    title: 'Aluminium Windows',
    description: 'Premium aluminium windows crafted for Indian homes with superior thermal insulation, sound reduction, and weather resistance.',
    image: CDN + 'wp-content/uploads/2020/08/Aluminium-Windows-Home-Office-1.jpg',
    designs: ['Sliding', 'Casement', 'Awning', 'Fixed', 'Glass To Glass'],
  },
  {
    title: 'Steel Entrance Doors',
    description: 'GIESTA steel entrance doors — combining robust security with sophisticated Italian design for an impressive first impression.',
    image: CDN + 'wp-content/uploads/2020/07/Steel-Door.jpg',
    designs: ['Single Door', 'Double Door'],
  },
  {
    title: 'Facades',
    description: 'Stunning curtain wall and storefront facade systems that transform building exteriors with modern elegance and structural integrity.',
    image: CDN + 'wp-content/uploads/2020/08/Facade-Home-Office.jpg',
    designs: ['Curtain Wall', 'Store Front'],
  },
  {
    title: 'Interior',
    description: 'Beautiful interior solutions including hanging, swing, and fixed divider doors that redefine spaces within your home or office.',
    image: CDN + 'wp-content/uploads/2020/08/Interior-Home-Office.jpg',
    designs: ['Hanging', 'Swing', 'Fixed Divider'],
  },
  {
    title: 'Airflow System',
    description: 'Advanced ventilation and louver systems designed to maximize airflow while maintaining aesthetics and protection from the elements.',
    image: CDN + 'wp-content/uploads/2020/08/Airflow-System-Home-Office.jpg',
    designs: ['Ventilator', 'Louver'],
  },
];

export default function ProductsSection() {
  const { colorTheme, designTheme } = useTheme();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span
            className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
            style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
          >
            Our Products
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
          >
            Premium Aluminium Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality aluminium windows, doors, and building solutions, crafted with Japanese precision for Indian homes.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={product.title}
              className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="h-full overflow-hidden card-hover-lift"
                style={{
                  borderRadius: designTheme.cardRadius,
                  boxShadow: designTheme.cardShadow,
                  border: designTheme.cardBorder,
                  background: designTheme.cardBg,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = designTheme.cardHoverShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = designTheme.cardShadow;
                }}
              >
                {/* Real Image */}
                <div className="relative h-52 overflow-hidden img-zoom-container">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-30 group-hover:opacity-10"
                    style={{ background: `linear-gradient(to top, ${colorTheme.primary}80, transparent)` }}
                  />
                  {/* Design tags */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {product.designs.slice(0, 3).map((design) => (
                      <span
                        key={design}
                        className="px-2 py-0.5 text-[10px] font-semibold text-white rounded backdrop-blur-sm"
                        style={{ background: `${colorTheme.accent}cc` }}
                      >
                        {design}
                      </span>
                    ))}
                    {product.designs.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold text-white/80 rounded backdrop-blur-sm bg-white/20">
                        +{product.designs.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl mb-2 text-gray-900 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300 group-hover:gap-2"
                    style={{ color: colorTheme.accent }}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
