'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { ArrowRight, Wind, DoorOpen, Square, MoveHorizontal, DoorOpenIcon, Columns } from 'lucide-react';

const products = [
  {
    title: 'Sliding Windows',
    description: 'Smooth horizontal sliding mechanism for effortless ventilation and panoramic views.',
    icon: MoveHorizontal,
    gradient: 'from-blue-900/80 to-blue-700/60',
  },
  {
    title: 'Casement Windows',
    description: 'Hinged side-opening windows providing maximum airflow and unobstructed views.',
    icon: Wind,
    gradient: 'from-teal-900/80 to-teal-700/60',
  },
  {
    title: 'Fixed Windows',
    description: 'Stationary windows designed to bring in natural light and frame beautiful views.',
    icon: Square,
    gradient: 'from-emerald-900/80 to-emerald-700/60',
  },
  {
    title: 'Sliding Doors',
    description: 'Wide opening sliding doors for seamless indoor-outdoor living experience.',
    icon: Columns,
    gradient: 'from-cyan-900/80 to-cyan-700/60',
  },
  {
    title: 'Casement Doors',
    description: 'Elegant hinged doors offering superior insulation and classic aesthetics.',
    icon: DoorOpen,
    gradient: 'from-violet-900/80 to-violet-700/60',
  },
  {
    title: 'Fold & Slide Doors',
    description: 'Innovative folding doors that create expansive openings for grand spaces.',
    icon: DoorOpenIcon,
    gradient: 'from-amber-900/80 to-amber-700/60',
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
            Discover our range of high-quality aluminium windows and doors, crafted with Japanese precision.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-2"
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
                  {/* Image placeholder */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <Icon className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                    {/* Decorative corner */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 opacity-20"
                      style={{
                        background: `linear-gradient(135deg, transparent 50%, ${colorTheme.accent}40 50%)`,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-xl mb-2 text-gray-900 group-hover:translate-x-1 transition-transform"
                      style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                      style={{ color: colorTheme.accent }}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
