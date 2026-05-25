'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import { Clock, X, ArrowRight, Tag } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'The Complete Guide to Aluminium Windows',
    excerpt: 'Discover everything about aluminium windows, from types and benefits to installation and maintenance tips...',
    content: `Aluminium windows have become the preferred choice for modern homes and commercial buildings across India. Their combination of strength, durability, and sleek aesthetics makes them an ideal solution for contemporary architecture.\n\n## Types of Aluminium Windows\n\n**Sliding Windows** are perfect for spaces where you want maximum ventilation without the window projecting inward or outward. They operate on a horizontal track system and are ideal for rooms with limited space.\n\n**Casement Windows** open outward like a door, providing excellent ventilation and unobstructed views. They offer superior sealing when closed, making them ideal for energy efficiency.\n\n**Fixed Windows** don't open but provide maximum natural light and panoramic views. They're often combined with operable windows for a complete solution.\n\n**Tilt & Turn Windows** offer dual functionality - tilt for ventilation or turn fully for easy cleaning and maximum airflow.\n\n## Benefits of Aluminium Windows\n\n1. **Durability**: Aluminium doesn't rust, rot, or warp, lasting 30+ years with minimal maintenance\n2. **Strength**: Supports larger glass panes with slimmer frames\n3. **Energy Efficiency**: Thermal break technology provides excellent insulation\n4. **Low Maintenance**: No painting or sealing required\n5. **Eco-Friendly**: 100% recyclable material\n\n## Installation Tips\n\nAlways work with certified installers who follow manufacturer specifications. Proper installation is crucial for performance, water resistance, and longevity. Ensure proper flashing and sealing around all joints.`,
    date: '15 Jan 2025',
    category: 'Guide',
    readTime: '8 min read',
    gradient: 'from-blue-900 to-blue-600',
  },
  {
    id: 2,
    title: 'Sliding vs Casement Windows: Which is Right for You?',
    excerpt: 'Compare sliding and casement windows to find the perfect match for your home...',
    content: `Choosing between sliding and casement windows is one of the most common decisions homeowners face. Both have distinct advantages, and the right choice depends on your specific needs, space constraints, and aesthetic preferences.\n\n## Sliding Windows\n\n**Advantages:**\n- Space-efficient design - no swing space needed\n- Easy to operate with minimal effort\n- Excellent for wide openings\n- Modern, clean aesthetic\n- Can accommodate fly screens easily\n\n**Best For:** Bedrooms, living rooms, areas with limited space, and modern architectural designs.\n\n## Casement Windows\n\n**Advantages:**\n- Superior ventilation - can catch and direct breezes\n- Better energy efficiency with tighter seals\n- Unobstructed views when open\n- Easier to clean from inside\n- Better security with multi-point locking\n\n**Best For:** Kitchens, bathrooms, areas needing maximum ventilation, and traditional homes.\n\n## Making Your Decision\n\nConsider these factors:\n1. **Space availability** - Sliding wins in tight spaces\n2. **Ventilation needs** - Casement provides better airflow\n3. **Energy efficiency** - Casement typically seals better\n4. **Maintenance** - Both are low-maintenance with aluminium\n5. **Aesthetic preference** - Sliding is modern, casement is classic`,
    date: '22 Jan 2025',
    category: 'Comparison',
    readTime: '6 min read',
    gradient: 'from-teal-900 to-teal-600',
  },
  {
    id: 3,
    title: 'Why Thermal Break Windows Are Worth the Investment',
    excerpt: 'Learn how thermal break technology can reduce energy costs and improve comfort...',
    content: `Thermal break windows represent a significant advancement in window technology, and their growing popularity in India is well-deserved. Understanding the technology and its benefits can help you make an informed investment decision.\n\n## What is Thermal Break Technology?\n\nA thermal break is a polyamide (nylon) strip that separates the interior and exterior aluminium profiles. This barrier dramatically reduces heat transfer between the outside and inside of your home.\n\n## Key Benefits\n\n**Energy Savings**: Thermal break windows can reduce energy costs by up to 50% by minimizing heat gain in summer and heat loss in winter. This translates to significant savings on air conditioning and heating bills.\n\n**Condensation Control**: By maintaining a warmer interior surface temperature, thermal break windows significantly reduce condensation, preventing mold growth and water damage.\n\n**Sound Insulation**: The polyamide barrier also acts as an acoustic insulator, reducing noise transmission by up to 40% compared to standard aluminium windows.\n\n**Comfort**: More consistent indoor temperatures eliminate cold spots near windows, improving overall comfort.\n\n## Cost Analysis\n\nWhile thermal break windows cost 20-30% more upfront, the payback period is typically 3-5 years through energy savings alone. Over a 20-year lifespan, the total savings far exceed the initial investment.\n\n## Climate Considerations\n\nIn India's diverse climate zones, thermal break windows are particularly valuable in:\n- North India (extreme winters)\n- West India (intense summer heat)\n- High-altitude locations\n- Air-conditioned commercial buildings`,
    date: '5 Feb 2025',
    category: 'Technology',
    readTime: '7 min read',
    gradient: 'from-emerald-900 to-emerald-600',
  },
  {
    id: 4,
    title: 'Choosing the Right Door for Your Home',
    excerpt: 'From sliding to fold-and-slide, find the perfect door solution for every room...',
    content: `Doors are more than just entry points - they define the character of your home and impact daily living quality. Understanding different door types helps you make the perfect choice for each space.\n\n## Sliding Doors\n\nSliding doors are the versatile workhorse of modern homes. They operate on tracks, moving horizontally without requiring swing space.\n\n**Ideal For:** Patios, balconies, living rooms, and spaces where you want seamless indoor-outdoor flow.\n\n**Key Features:**\n- 2-track and 3-track options\n- Can span up to 6 meters wide\n- Interlock stiles for security\n- Available with built-in blinds\n\n## Casement Doors\n\nClassic hinged doors that swing open, offering a traditional feel with modern performance.\n\n**Ideal For:** Main entrances, bedroom balconies, and areas where a full opening is desired.\n\n**Key Features:**\n- Single or double door configurations\n- Multi-point locking for security\n- Superior weather sealing\n- Optional sidelights and transoms\n\n## Fold & Slide Doors\n\nThe ultimate in opening technology - these doors fold accordion-style to create massive openings.\n\n**Ideal For:** Large living spaces, restaurants, showrooms, and luxury homes.\n\n**Key Features:**\n- Can span 10+ meters\n- Panels stack neatly to one or both sides\n- Smooth roller mechanism\n- Creates a seamless wall-to-wall opening\n\n## Decision Framework\n\n1. **Measure your opening** - Width determines which options work\n2. **Consider usage frequency** - High-traffic areas need durable hardware\n3. **Think about furniture placement** - Swing doors need clearance\n4. **Climate matters** - Thermal break for extreme conditions\n5. **Security requirements** - Multi-point locks for ground floor`,
    date: '18 Feb 2025',
    category: 'Guide',
    readTime: '5 min read',
    gradient: 'from-amber-900 to-amber-600',
  },
];

export default function BlogSection() {
  const { colorTheme, designTheme } = useTheme();
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);
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
    <section id="blog" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span
            className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
            style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
          >
            Our Blog
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
          >
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice and guides to help you make informed decisions about your windows and doors.
          </p>
        </div>

        {/* Blog Layout: Left 1 large + Right 3 small */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Large blog card */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div
              className="group cursor-pointer overflow-hidden h-full transition-all duration-300 hover:-translate-y-1"
              style={{
                borderRadius: designTheme.cardRadius,
                boxShadow: designTheme.cardShadow,
                border: designTheme.cardBorder,
              }}
              onClick={() => setSelectedBlog(blogs[0])}
            >
              {/* Image */}
              <div className={`relative h-56 md:h-64 bg-gradient-to-br ${blogs[0].gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-6xl font-black">01</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-white rounded-full"
                    style={{ background: colorTheme.accent }}
                  >
                    <Tag className="w-3 h-3" /> {blogs[0].category}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{blogs[0].date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blogs[0].readTime}</span>
                </div>
                <h3
                  className="text-xl mb-2 text-gray-900 group-hover:translate-x-1 transition-transform"
                  style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
                >
                  {blogs[0].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blogs[0].excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                  style={{ color: colorTheme.accent }}
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Right: 3 stacked small cards */}
          <div className="space-y-4">
            {blogs.slice(1).map((blog, i) => (
              <div
                key={blog.id}
                className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <div
                  className="group cursor-pointer flex gap-4 p-4 transition-all duration-300 hover:-translate-x-1"
                  style={{
                    borderRadius: designTheme.cardRadius,
                    boxShadow: designTheme.cardShadow,
                    border: designTheme.cardBorder,
                    background: designTheme.cardBg,
                  }}
                  onClick={() => setSelectedBlog(blog)}
                >
                  {/* Thumbnail */}
                  <div className={`relative w-24 h-24 shrink-0 bg-gradient-to-br ${blog.gradient} rounded-lg overflow-hidden flex items-center justify-center`}>
                    <span className="text-white/20 text-2xl font-black">0{i + 2}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1.5">
                      <span
                        className="px-2 py-0.5 text-[10px] font-semibold rounded-full"
                        style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
                      >
                        {blog.category}
                      </span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 group-hover:translate-x-0.5 transition-transform">
                      {blog.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">{blog.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className={`text-center mt-10 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold transition-all hover:scale-105"
            style={{
              background: colorTheme.accent,
              borderRadius: designTheme.buttonRadius,
            }}
          >
            View All Blogs <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Blog Popup Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedBlog(null)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto animate-slide-up"
            style={{
              borderRadius: designTheme.cardRadius,
              background: designTheme.cardBg,
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all"
              aria-label="Close blog"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Header Image */}
            <div className={`relative h-48 md:h-64 bg-gradient-to-br ${selectedBlog.gradient}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/10 text-8xl font-black">BLOG</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                <span
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-white rounded-full mb-2"
                  style={{ background: colorTheme.accent }}
                >
                  <Tag className="w-3 h-3" /> {selectedBlog.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedBlog.title}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                <span>{selectedBlog.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{selectedBlog.readTime}</span>
              </div>
              <div className="prose prose-gray max-w-none">
                {selectedBlog.content.split('\n\n').map((para, i) => {
                  if (para.startsWith('## ')) {
                    return <h2 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">{para.replace('## ', '')}</h2>;
                  }
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return <h3 key={i} className="text-lg font-bold text-gray-900 mt-4 mb-2">{para.replace(/\*\*/g, '')}</h3>;
                  }
                  if (para.startsWith('1. ') || para.startsWith('- ')) {
                    const items = para.split('\n');
                    return (
                      <ul key={i} className="list-disc pl-6 space-y-1 my-2">
                        {items.map((item, j) => (
                          <li key={j} className="text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{
                            __html: item.replace(/^[0-9]+\.\s|^-\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          }} />
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i} className="text-gray-700 text-sm leading-relaxed mb-3" dangerouslySetInnerHTML={{
                    __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
