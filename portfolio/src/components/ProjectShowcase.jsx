'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

export default function ProjectShowcase({ videoSrc, images = [], videoLabel = 'Demo' }) {
  const slides = [
    ...(videoSrc ? [{ type: 'video', src: videoSrc, label: videoLabel }] : []),
    ...images.map(img => ({ type: 'image', ...img, label: img.label ?? img.alt })),
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  // Lazy-load video when carousel scrolls into view
  useEffect(() => {
    if (!videoSrc) return;
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const video = videoRef.current;
        if (video) { video.src = videoSrc; video.load(); }
        setVideoLoaded(true);
        observer.disconnect();
      },
      { threshold: 0.1 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [videoSrc]);

  // Play video when on its slide, pause otherwise
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoLoaded) return;
    if (videoSrc && index === 0) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [index, videoLoaded, videoSrc]);

  const goTo = useCallback((next) => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
    timeoutRef.current = setTimeout(() => { setIndex(next); setVisible(true); }, 150);
  }, []);

  const prev = useCallback(() => goTo((index - 1 + slides.length) % slides.length), [index, slides.length, goTo]);
  const next = useCallback(() => goTo((index + 1) % slides.length), [index, slides.length, goTo]);
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  }, [prev, next]);

  if (slides.length === 0) return null;

  const single = slides.length === 1;
  const current = slides[index];
  const isVideoSlide = videoSrc && index === 0;

  return (
    <div className="mt-4">
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative aspect-video rounded-lg overflow-hidden border-2 border-primary/20 bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/30 mb-3"
      >
        {/* Image slides */}
        {slides.map((slide, i) =>
          slide.type === 'image' ? (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-300 ${i === index && visible ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 672px) 100vw, 672px"
                className="object-contain"
                quality={90}
              />
            </div>
          ) : null
        )}

        {/* Video slide */}
        {videoSrc && (
          <div className={`absolute inset-0 transition-opacity duration-300 ${isVideoSlide && visible ? 'opacity-100' : 'opacity-0'}`}>
            {!videoLoaded && <div className="absolute inset-0 bg-primary/5 animate-pulse" />}
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Label pill */}
        <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
          <span className="px-2.5 py-0.5 bg-background/85 border border-primary/30 rounded-full text-xs text-foreground/70 backdrop-blur-sm">
            {current.label}
          </span>
        </div>

        {/* Nav arrows */}
        {!single && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 border-2 border-primary rounded-full p-1.5 text-primary bg-background/80 hover:bg-primary/10 transition-colors"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 border-2 border-primary rounded-full p-1.5 text-primary bg-background/80 hover:bg-primary/10 transition-colors"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {!single && (
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 w-2 rounded-full transition-colors ${i === index ? 'bg-primary' : 'bg-primary/30 hover:bg-primary/50'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-foreground/70 text-xs">{index + 1} / {slides.length}</span>
        </div>
      )}
    </div>
  );
}
