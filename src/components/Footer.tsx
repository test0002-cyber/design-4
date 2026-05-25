'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { colorTheme, designTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative text-white"
      style={{ background: colorTheme.primaryDark }}
    >
      {/* Newsletter Bar */}
      <div
        className="border-b border-white/10"
        style={{ background: colorTheme.primary }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-white/60 text-sm">Get the latest updates on products, offers, and industry insights.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-all flex-1 md:w-72"
                style={{ borderRadius: designTheme.buttonRadius }}
              />
              <button
                className="px-5 py-2.5 font-semibold text-white flex items-center gap-2 transition-all hover:scale-105 shrink-0"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black tracking-wider" style={{ color: colorTheme.accent }}>TOSTEM</span>
              <span className="text-xs tracking-widest text-white/40 mt-1">INDIA</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Tostem India brings Japanese precision engineering to aluminium windows and doors. With 25+ years of legacy, we deliver premium quality products across 860+ cities in India.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all text-white/60 hover:text-white"
                  style={{ borderRadius: designTheme.cardRadius }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Products</h4>
            <ul className="space-y-2.5">
              {['Sliding Windows', 'Casement Windows', 'Fixed Windows', 'Tilt & Turn Windows', 'Sliding Doors', 'Casement Doors', 'Fold & Slide Doors'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors hover:pl-1 inline-block">
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
              {['About Us', 'Our Series', 'Colour Options', 'Designs', 'Blog', 'Careers', 'Dealer Locator', 'Download Brochure'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors hover:pl-1 inline-block">
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
                <span className="text-white/60 text-sm">
                  Tostem India Pvt. Ltd.<br />
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: colorTheme.accent }} />
                <a href="tel:+911234567890" className="text-white/60 hover:text-white text-sm transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" style={{ color: colorTheme.accent }} />
                <a href="mailto:info@tostemindia.com" className="text-white/60 hover:text-white text-sm transition-colors">
                  info@tostemindia.com
                </a>
              </li>
            </ul>

            {/* Certifications */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 mb-2">Certified By</p>
              <div className="flex gap-3">
                {['ISO 9001', 'ISO 14001', 'JIS'].map((cert) => (
                  <span
                    key={cert}
                    className="px-2 py-1 text-[10px] font-semibold rounded"
                    style={{ background: `${colorTheme.accent}20`, color: colorTheme.accentLight }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
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
            <p>&copy; {new Date().getFullYear()} Tostem India Pvt. Ltd. All rights reserved.</p>
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
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full text-white shadow-lg transition-all hover:scale-110"
        style={{ background: colorTheme.accent }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
