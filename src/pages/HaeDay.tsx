import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';

const HaeDay: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: ResizeObserver | null = null;
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(`${process.env.PUBLIC_URL || ''}/jurnalul-ioanei-content.html`);
        const html = await res.text();
        if (cancelled || !contentRef.current) return;
        contentRef.current.innerHTML = html;

        // Re-create <style> tags so browsers apply rules consistently
        contentRef.current.querySelectorAll('style').forEach((oldStyle) => {
          const newStyle = document.createElement('style');
          newStyle.textContent = oldStyle.textContent;
          oldStyle.replaceWith(newStyle);
        });

        // Scale each .slide-frame from 1080px source to its rendered width
        const SOURCE = 1080;
        observer = new ResizeObserver((entries) => {
          entries.forEach((e) => {
            const w = e.contentRect.width;
            if (w > 0) (e.target as HTMLElement).style.setProperty('--scale', String(w / SOURCE));
          });
        });
        contentRef.current.querySelectorAll('.slide-frame').forEach((f) => observer!.observe(f));
      } catch (err) {
        console.error('Failed to load HAE Day content', err);
      }
    })();

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <SEO
        title="HAE Day · Jurnalul Ioanei"
        description="16 mai — Ziua Internațională a Angioedemului Ereditar. Povestea Ioanei, o viață cu AEE citită pagină cu pagină."
        path="/jurnalul-ioanei"
      />

      {/* HAE Day intro — site-themed header replacing the source's hero */}
      <section
        className="pt-[120px] pb-14 sm:pb-20 px-6 text-center relative"
        style={{ background: 'linear-gradient(180deg, #fef9ec 0%, #fdfcfa 100%)' }}
      >
        <div className="max-w-[860px] mx-auto">
          <div className="text-[11px] font-extrabold uppercase tracking-[5px] text-secondary-500 mb-5">
            Asociația HAERO · 16 mai · HAE Day
          </div>
          <h1 className="font-playfair text-[40px] sm:text-[52px] lg:text-[64px] font-bold text-neutral-900 leading-[1.05] tracking-tight mb-6">
            Ziua Internațională a{' '}
            <em className="italic text-secondary-600 font-semibold">Angioedemului Ereditar</em>
          </h1>
          <p className="text-[17px] sm:text-[18px] leading-[1.7] text-neutral-600 max-w-[680px] mx-auto">
            Jurnalul Ioanei — o viață cu angioedem ereditar, citită pagină cu pagină.
            De la 10 ani, când nimeni nu știa ce e umflătura aceea, până la 65 — un drum
            despre diagnostic, tratament, maternitate, comunitate.
          </p>
          <div
            className="inline-flex items-center gap-4 mt-7 font-playfair text-[20px] sm:text-[22px] font-semibold text-accent-600"
          >
            <span>10 ani</span>
            <span style={{ fontFamily: 'Caveat, cursive' }} className="text-neutral-500 text-2xl">↝</span>
            <span>80 ani</span>
          </div>
        </div>
      </section>

      <div ref={contentRef} />
    </>
  );
};

export default HaeDay;
