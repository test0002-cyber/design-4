'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Mail, Phone, MapPin, Send, ArrowUp } from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

const partnerLogos = [
  { name: 'LIXIL', src: 'https://www.lixil.com/common/img/logo.svg', isSvg: true },
  { name: 'TOSTEM', src: CDN + 'wp-content/uploads/2020/12/tostem-sm.png', isSvg: false },
  { name: 'GROHE', src: 'https://static.cdnlogo.com/logos/g/44/grohe.svg', isSvg: true },
  { name: 'American Standard', src: 'https://www.lixil.com/en/about/img/about_brand_as_img.jpg', isSvg: false },
  { name: 'INAX', src: 'https://www.lixil.com/en/about/img/about_brand_inax_img.jpg', isSvg: false },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/tostemindia', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { name: 'YouTube', href: 'https://www.youtube.com/c/tostemindia', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'Instagram', href: 'https://www.instagram.com/tostemindia/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/tostemindia/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'Pinterest', href: 'https://in.pinterest.com/tostemindia/', icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z' },
];

const productLinks = [
  'Aluminium Doors', 'Aluminium Windows', 'Steel Entrance Doors',
  'Facades', 'Interior', 'Airflow System',
];

const quickLinks = [
  'About Tostem', 'Why Tostem', 'Our Series', 'Colour Options',
  'Blog', 'TADA', 'Gallery', 'E-catalogue',
];

export default function Footer() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative text-white mt-auto"
      style={{ background: colorTheme.primaryDark }}
    >
      {/* Newsletter Bar */}
      <div
        className="border-b border-white/10"
        style={{ background: colorTheme.primary }}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-white/60 text-sm">Get the latest updates on products, offers, and industry insights from TOSTEM India.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-all flex-1 md:w-72"
                style={{ borderRadius: designTheme.buttonRadius }}
              />
              <button
                className="px-5 py-2.5 font-semibold text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 shrink-0"
                style={{ background: colorTheme.accent, borderRadius: designTheme.buttonRadius }}
              >
                <Send className="w-4 h-4" /> Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={CDN + 'wp-content/uploads/2020/07/logo-ftr-130x25.png'}
                alt="TOSTEM India"
                width={130}
                height={25}
                unoptimized
                className="h-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Tostem India, LIXIL Window Systems Private Limited — bringing Japanese precision engineering to aluminium windows and doors. With over 100 years of LIXIL group heritage, we deliver premium quality products across India.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300 text-white/60 hover:text-white hover:scale-110"
                  style={{ borderRadius: designTheme.cardRadius }}
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item}>
                  <a href="#products" className="text-white/60 hover:text-white text-sm transition-all duration-300 hover:pl-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-all duration-300 hover:pl-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: colorTheme.accent }} />
                <span className="text-white/60 text-sm leading-relaxed">
                  Plot No.75, Sector 8, IMT Manesar,<br />
                  Gurgaon, Haryana 122050
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: colorTheme.accent }} />
                <span className="text-white/60 text-sm leading-relaxed">
                  Plot No. F.S. NO. 341, CTS NO. 1272,<br />
                  29, Jagat Vidya Marg, MIG Colony,<br />
                  Bandra East, Mumbai, Maharashtra 400051
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: colorTheme.accent }} />
                <div>
                  <a href="tel:18001036855" className="text-white/60 hover:text-white text-sm transition-colors block">
                    1800 103 6855 (Toll Free)
                  </a>
                  <a href="tel:+9101244350000" className="text-white/60 hover:text-white text-sm transition-colors block">
                    +91 0124 4350000
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" style={{ color: colorTheme.accent }} />
                <a href="mailto:support.lwsindia@lixil.com" className="text-white/60 hover:text-white text-sm transition-colors">
                  support.lwsindia@lixil.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* LIXIL Group Partners */}
      <div className="border-t border-white/10 py-8">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-white/40 uppercase tracking-wider mb-4 text-center">LIXIL Group Brands</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {partnerLogos.map((logo) => (
              <div key={logo.name} className="opacity-50 hover:opacity-100 transition-opacity duration-300" style={{ filter: 'brightness(0) invert(1)' }}>
                {logo.isSvg ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-6 w-auto"
                    style={{ maxWidth: '80px' }}
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={60}
                    height={24}
                    unoptimized
                    className="h-6 w-auto"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t border-white/10"
        style={{ background: colorTheme.primaryDark }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Tostem India, LIXIL Window Systems Private Limited. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110"
        style={{ background: colorTheme.accent, boxShadow: `0 4px 15px ${colorTheme.accent}40` }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
