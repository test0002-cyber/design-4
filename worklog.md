# Worklog: Update Tostem India Website with Verified Image/Video URLs

**Date:** 2025-03-04
**Task:** Replace all placeholder/unverified image and video URLs with verified real URLs scraped from the Tostem India website.

## CDN Base
All URLs use the CDN base: `https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/`

## Files Updated

### 1. ProductsSection.tsx
- **Aluminium Doors:** `/2020/08/` → `/2025/04/Aluminum-Doors-Home-Office.jpg`
- **Aluminium Windows:** `/2020/08/` → `/2025/04/Aluminium-Windows-Home-Office-1.jpg`
- **Steel Entrance Doors:** `/2020/07/Steel-Door.jpg` → `/2020/07/home-gallery-img-1-748x441.jpg` (no dedicated steel door image; using real gallery image)
- **Facades:** `/2020/08/Facade-Home-Office.jpg` → `/2025/04/Exteriors-23.jpg`
- **Interior:** `/2020/08/Interior-Home-Office.jpg` → `/2025/04/Formal-living-to-landscape.jpg`
- **Airflow System:** `/2020/08/Airflow-System-Home-Office.jpg` → `/2025/04/Oxygen_54.jpg`

### 2. SeriesSection.tsx
- **Grants:** `/2020/08/Grants-Series.jpg` → `/2025/04/AP-Palazzo-70.jpg`
- **ATIS:** `/2020/08/ATIS-Series.jpg` → `/2025/04/Chantra-Khiri-20.jpg`
- **We Plus:** `/2020/08/We-Plus-Series.jpg` → `/2025/04/SJP1631-Enhanced-NR-Edit.jpg`
- **We 70:** `/2020/08/We-70-Series.jpg` → `/2025/04/Baan-Nawat-43.jpg`
- **Giesta:** `/2020/08/Giesta-Series.jpg` → `/2025/04/DSC03783-1.jpg`

### 3. GallerySection.tsx
- Replaced 12 items (4 real + 8 fake) with 24 all-real gallery/project images from the website
- Updated image paths from `/2024/09/` to `/2025/04/` for project images
- Added new verified project images: Chantra Khiri, Nature Island, Exteriors, Sarin Vista, Oxygen, Nirvana Beyond, Exion, Formal Living, Plover, Tara Keree, The Connect, Warangkana House, Tostem Chevalife, SJP, De Vielle, DJI Aerial, Central Dry Court

### 4. TestimonialsSection.tsx
- **Mr. Amarnath thumbnail:** `.jpg` → `amarnath.png` (verified real image)
- **Mr. Dheeraj thumbnail:** `.jpg` → `testimonials_img.png` (verified real image)
- **Real Homes thumbnail:** `.jpg` → `/2020/09/testimonials-min-1349x284.jpg` (verified testimonials banner)
- **Added Mr. Pratap testimonial:** New 4th testimonial with verified video URL and thumbnail

### 5. PartnersSection.tsx
- Fixed all partner logo paths from `/2020/07/` to `/2020/12/` (correct CDN path)
- **Removed PERMA partner** (no real logo available; was using LIXIL logo as placeholder)
- Now 5 verified partners: LIXIL, TOSTEM, GROHE, American Standard, INAX

### 6. AwardsSection.tsx
- **Red Dot 2020 image:** `/2020/07/` → `/2025/04/Red-dot-125x127.jpeg`
- **Added Red Dot 2024:** New award with `/2024/05/redot_img.jpg`
- **iF Design Award:** Updated year from 2019 to 2024, added `/2024/05/if_designed.jpg`
- **Replaced Good Design Award** with **German Design Award 2024** with `/2024/06/german_design.jpg`
- **Replaced Green Building Certification** with **AAMA Certification** with `/2021/05/aama.jpg`
- **Replaced ISO 9001** with **SGS Certification** with `/2021/05/sgs.jpg`
- **Added JIS Certification** with `/2021/05/jis.jpg`
- **Added TIS Certification** with `/2021/05/tis.jpg`
- **Added ASTM Certification** with `/2021/05/astm-logo.jpg`
- **Removed Best Aluminium Window Brand** (no real image)
- Total: 9 awards (up from 6), all with verified real images

### 7. BlogSection.tsx
- **Blog 1 (Stained Glass):** `/2024/08/` → `/2025/10/Different-Stained-Glass-Designs-for-Doors-and-Windows.jpg`
- **Blog 2 (Plywood Almirah):** `/2024/07/` → `/2025/10/Plywood-Almirah-banner.jpg`
- **Blog 3 (French Doors):** `/2024/06/` → `/2021/02/French-Doors-627x317.jpg`
- **Blog 4 (Aluminium Door):** `/2024/05/` → `/2021/02/Amazing-Aluminium-Door-422x329.jpg`

### 8. Footer.tsx
- Fixed all partner logo paths from `/2020/07/` to `/2020/12/` (consistent with PartnersSection)

## Verification
- `bun run lint` — PASSED (no errors)
- Dev server running successfully on port 3000
- All pages compiling without errors
