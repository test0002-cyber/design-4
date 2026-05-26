'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Clock, X, ArrowRight, Tag } from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

const blogs = [
  {
    id: 1,
    title: 'Different Stained Glass Designs for Doors and Windows',
    excerpt: 'Stained glass designs add character and charm to doors and windows, transforming ordinary spaces into extraordinary works of art. Discover the various styles, patterns, and techniques used in modern stained glass design for aluminium windows and doors.',
    content: `Stained glass designs have been a timeless element in architecture, adding beauty, color, and character to doors and windows. Today, with modern aluminium framing technology, stained glass can be incorporated into contemporary homes with stunning results.\n\n## Types of Stained Glass Designs\n\n**Traditional Stained Glass** features hand-painted or kiln-fired designs with rich, vibrant colors. These work beautifully in casement and fixed windows, creating focal points that draw the eye.\n\n**Beveled Glass** uses angled cuts to create prismatic light effects. When sunlight passes through beveled glass, it creates rainbow reflections that dance across your room.\n\n**Etched Glass** offers a subtle, sophisticated look with frosted patterns that provide privacy while allowing light to pass through. Ideal for bathroom windows and entrance doors.\n\n**Textured Glass** incorporates three-dimensional surface patterns that add depth and visual interest while maintaining varying levels of privacy.\n\n## Incorporating Stained Glass in Aluminium Frames\n\nModern aluminium frames from TOSTEM provide the perfect structure for stained glass panels. The slim profiles maximise the visible glass area, while the robust aluminium frame ensures longevity and weather protection.\n\n## Design Tips\n\n1. **Consider the light direction** — East-facing windows get morning light, west-facing get evening warmth\n2. **Match your home style** — Art deco patterns for heritage homes, geometric for modern\n3. **Balance privacy and light** — Combine clear and textured glass panels\n4. **Think about colour harmony** — Stained glass colours should complement your interior palette`,
    date: '10 Jan 2025',
    category: 'Design',
    readTime: '6 min read',
    image: CDN + 'wp-content/uploads/2025/10/Different-Stained-Glass-Designs-for-Doors-and-Windows.jpg',
  },
  {
    id: 2,
    title: 'Plywood Almirah Design Ideas: Modern Storage Solutions with Window Integration',
    excerpt: 'Explore creative plywood almirah designs that seamlessly integrate with modern window systems for optimised storage and natural light flow in your living spaces.',
    content: `Modern plywood almirah designs are evolving beyond traditional standalone furniture pieces. Today\'s innovative approaches integrate storage solutions with window systems, creating seamless, space-efficient designs that maximise both storage and natural light.\n\n## Window-Integrated Storage Concepts\n\n**Bay Window Almirah** transforms the space around bay windows into built-in storage with seating. This creates a cozy reading nook with hidden storage beneath and shelves flanking the window.\n\n**Floor-to-Ceiling Window Wall Units** combine full-height aluminium windows with integrated storage cabinets on either side, creating a stunning wall feature that balances openness with functionality.\n\n**Window Seat Storage** utilises the space below windows for pull-out drawers and lift-top storage, perfect for bedrooms and living rooms.\n\n## Material Selection\n\nWhen combining plywood almirahs with aluminium window systems, consider:\n1. **Moisture-resistant plywood** — Essential near windows that may experience condensation\n2. **Matching finishes** — Coordinate plywood laminate colours with aluminium frame finishes\n3. **Hardware quality** — Use premium hinges and slides that complement window hardware\n4. **Thermal considerations** — Ensure adequate insulation between window and cabinet`,
    date: '22 Jan 2025',
    category: 'Interior',
    readTime: '5 min read',
    image: CDN + 'wp-content/uploads/2025/10/Plywood-Almirah-banner.jpg',
  },
  {
    id: 3,
    title: 'French Doors vs Sliding Doors for Balcony: Which is a Better Option?',
    excerpt: 'A detailed comparison between French doors and sliding doors for balcony access, helping you choose the best option for your home based on space, aesthetics, and functionality.',
    content: `Choosing between French doors and sliding doors for your balcony is a significant decision that affects both the functionality and aesthetics of your living space. Let's break down the key differences to help you make an informed choice.\n\n## French Doors\n\nFrench doors are classic hinged doors that swing open inward or outward, typically in a double-door configuration.\n\n**Advantages:**\n- Classic, elegant aesthetic that adds character\n- Full opening width when both doors are open\n- Superior weather sealing when closed\n- Traditional charm that enhances property value\n- Can be fitted with multi-point locking systems\n\n**Best For:** Traditional homes, smaller balconies, properties where aesthetics are paramount.\n\n## Sliding Doors\n\nSliding doors operate on tracks, moving horizontally without requiring swing space.\n\n**Advantages:**\n- Space-efficient — no swing clearance needed\n- Can span much wider openings (up to 6m+)\n- Unobstructed views when closed\n- Modern, clean aesthetic\n- Easier to operate for elderly and children\n\n**Best For:** Modern homes, large balconies, spaces where you want maximum glass area.\n\n## Making Your Decision\n\nConsider: available space, balcony size, architectural style, frequency of use, and your budget. Both options are available in TOSTEM's premium aluminium series with thermal break technology.`,
    date: '5 Feb 2025',
    category: 'Comparison',
    readTime: '7 min read',
    image: CDN + 'wp-content/uploads/2021/02/French-Doors-627x317.jpg',
  },
  {
    id: 4,
    title: 'Amazing Aluminium Door Designs to Transform Your Home',
    excerpt: 'Discover stunning aluminium door designs that combine modern aesthetics with superior performance. From sleek sliding doors to grand entrance solutions, find the perfect door for every space.',
    content: `Aluminium doors have revolutionised home design in India, offering a perfect blend of strength, elegance, and low maintenance. Here are some amazing designs that can transform your home.\n\n## Sliding Door Designs\n\n**Full-Glass Sliding Doors** create a seamless connection between indoor and outdoor spaces. With TOSTEM's ultra-slim Grants series profiles, you get maximum glass area with minimal frame visibility.\n\n**Multi-Track Sliding Doors** allow multiple panels to stack, creating expansive openings perfect for living rooms opening onto terraces or gardens.\n\n## Casement Door Designs\n\n**French Casement Doors** offer timeless elegance with modern performance. Both panels open fully without a central mullion, providing unobstructed views and access.\n\n**Tilt-and-Turn Doors** provide dual functionality — tilt for ventilation or turn fully for access. Ideal for spaces where you want flexible operation options.\n\n## Entrance Door Designs\n\n**GIESTA Steel Entrance Doors** combine Italian design with robust steel construction. Available in numerous design panels, these doors make a powerful first impression while providing exceptional security.\n\n## Design Considerations\n\n1. **Frame colour** — Match or contrast with your window frames for visual coherence\n2. **Hardware finish** — Choose handles and locks that complement the door style\n3. **Glass type** — Consider privacy, insulation, and acoustic needs\n4. **Size proportions** — Larger doors create more visual impact and better flow`,
    date: '18 Feb 2025',
    category: 'Design',
    readTime: '5 min read',
    image: CDN + 'wp-content/uploads/2021/02/Amazing-Aluminium-Door-422x329.jpg',
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
            Knowledge Experience
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
          >
            Latest From Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice, design inspiration, and guides to help you make informed decisions about windows and doors.
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
                background: designTheme.cardBg,
              }}
              onClick={() => setSelectedBlog(blogs[0])}
            >
              {/* Real Image */}
              <div className="relative h-56 md:h-72 overflow-hidden img-zoom-container">
                <Image
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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
                  className="text-xl mb-2 text-gray-900 group-hover:translate-x-1 transition-transform duration-300 line-clamp-2"
                  style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
                >
                  {blogs[0].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blogs[0].excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300 group-hover:gap-2"
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
                  className="group cursor-pointer flex gap-4 p-4 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderRadius: designTheme.cardRadius,
                    boxShadow: designTheme.cardShadow,
                    border: designTheme.cardBorder,
                    background: designTheme.cardBg,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = designTheme.cardHoverShadow; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = designTheme.cardShadow; }}
                  onClick={() => setSelectedBlog(blog)}
                >
                  {/* Thumbnail */}
                  <div className="relative w-28 h-28 shrink-0 overflow-hidden img-zoom-container rounded-lg">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="112px"
                    />
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
                    <h4 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 group-hover:translate-x-0.5 transition-transform duration-300">
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
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
          onClick={() => setSelectedBlog(null)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto modal-content"
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
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Close blog"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Header Image */}
            <div className="relative h-56 md:h-72 overflow-hidden">
              <Image
                src={selectedBlog.image}
                alt={selectedBlog.title}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
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
