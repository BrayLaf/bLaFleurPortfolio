'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

// ─── Video Player ─────────────────────────────────────────────────────────────

function VideoPlayer({ src }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const video = videoRef.current;
        if (video) {
          video.src = src;
          video.load();
          video.play().catch(() => {});
        }
        setReady(true);
        observer.disconnect();
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div className="mb-6">
      <p className="text-foreground/70 text-xs mb-1">Demo</p>
      <div ref={containerRef} className="border-2 border-primary/20 rounded-lg overflow-hidden">
        {!ready && <div className="w-full aspect-video bg-primary/5 animate-pulse" />}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full ${ready ? 'block' : 'hidden'}`}
        />
      </div>
    </div>
  );
}

// ─── Slideshow ────────────────────────────────────────────────────────────────

function Slideshow({ images }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const goTo = useCallback((next) => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
    timeoutRef.current = setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, 150);
  }, []);

  const prev = useCallback(() => {
    goTo((index - 1 + images.length) % images.length);
  }, [index, images.length, goTo]);

  const next = useCallback(() => {
    goTo((index + 1) % images.length);
  }, [index, images.length, goTo]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  }, [prev, next]);

  const single = images.length === 1;
  const current = images[index];

  return (
    <div>
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative aspect-video rounded-lg overflow-hidden border-2 border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/30 mb-3"
      >
        <div className={`absolute inset-0 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 672px) 100vw, 672px"
            className="object-contain"
            quality={90}
          />
        </div>

        {!single && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 border-2 border-primary rounded-full p-1.5 text-primary bg-background/80 hover:bg-primary/10 transition-colors"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 border-2 border-primary rounded-full p-1.5 text-primary bg-background/80 hover:bg-primary/10 transition-colors"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {!single && (
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? 'bg-primary' : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-foreground/70 text-xs">{index + 1} / {images.length}</span>
        </div>
      )}
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function ProjectShowcase({ videoSrc, images }) {
  if (!videoSrc && (!images || images.length === 0)) return null;

  return (
    <div className="mt-4">
      {videoSrc && <VideoPlayer src={videoSrc} />}
      {images && images.length > 0 && <Slideshow images={images} />}
    </div>
  );
}
