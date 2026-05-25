'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "TOSTEM windows transformed our home completely. The thermal break technology has made our living room so much more comfortable, and the noise reduction is remarkable. Truly Japanese quality!",
    name: 'Rajesh Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
  },
  {
    quote: "We installed TOSTEM sliding doors for our new villa, and the result is stunning. The build quality, smooth operation, and elegant design exceeded our expectations. Highly recommended!",
    name: 'Priya Patel',
    location: 'Bangalore, Karnataka',
    rating: 5,
  },
  {
    quote: "As an architect, I recommend TOSTEM to all my clients. The range of colours, the precision engineering, and the after-sales support are unmatched in the Indian market.",
    name: 'Ar. Vikram Mehta',
    location: 'Delhi NCR',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { colorTheme, designTheme } = useTheme();
  const [current, setCurrent] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span
            className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
            style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
          >
            Testimonials
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div
            className="relative p-8 md:p-12 text-center"
            style={{
              borderRadius: designTheme.cardRadius,
              boxShadow: designTheme.cardShadow,
              border: designTheme.cardBorder,
              background: designTheme.cardBg,
            }}
          >
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: `${colorTheme.accent}15` }}
              >
                <Quote className="w-6 h-6" style={{ color: colorTheme.accent }} />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#f59e0b' }} />
              ))}
            </div>

            {/* Quote text */}
            <blockquote
              key={current}
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 animate-fade-in"
            >
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="animate-fade-in">
              <div
                className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg"
                style={{ background: colorTheme.accent }}
              >
                {testimonials[current].name.charAt(0)}
              </div>
              <div className="font-bold text-gray-900">{testimonials[current].name}</div>
              <div className="text-sm text-gray-500">{testimonials[current].location}</div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 rounded-full transition-all hover:scale-110"
                style={{ background: `${colorTheme.accent}15`, color: colorTheme.accent }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="transition-all duration-300"
                    style={{
                      width: i === current ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: i === current ? colorTheme.accent : 'rgba(0,0,0,0.15)',
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="p-2 rounded-full transition-all hover:scale-110"
                style={{ background: `${colorTheme.accent}15`, color: colorTheme.accent }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
