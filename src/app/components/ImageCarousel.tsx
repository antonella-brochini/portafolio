"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import styles from "./ImageCarousel.module.css";

export type ImageCarouselLabels = {
  prev: string;
  next: string;
  zoom: string;
  close: string;
};

export type ImageCarouselProps = {
  images: string[];
  altBase: string;
  labels: ImageCarouselLabels;
};

export default function ImageCarousel({
  images,
  altBase,
  labels,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [mounted, setMounted] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  const n = images?.length ?? 0;

  const go = useCallback(
    (delta: number) => {
      if (n <= 0) return;
      setIndex((i) => (i + delta + n) % n);
    },
    [n]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (n > 0 && index >= n) setIndex(0);
  }, [n, index]);

  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(false);
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, go]);

  useEffect(() => {
    if (!lightbox) return;
    const id = requestAnimationFrame(() => {
      closeBtnRef.current?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [lightbox]);

  useEffect(() => {
    const root = thumbsRef.current;
    if (!root) return;
    const thumb = root.querySelector(`[data-thumb-index="${index}"]`);
    thumb?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [index]);

  if (!n) return null;

  const altFor = (i: number) => `${altBase} (${i + 1} / ${n})`;
  const showNav = n > 1;

  const modal =
    lightbox &&
    mounted &&
    createPortal(
      <div
        className={styles.modalRoot}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-lightbox-title"
      >
        <span id="gallery-lightbox-title" className={styles.srOnly}>
          {labels.zoom}
        </span>
        <button
          type="button"
          className={styles.modalBackdrop}
          aria-label={labels.close}
          onClick={() => setLightbox(false)}
        />
        <div
          className={styles.modalPanel}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <div className={styles.modalToolbar}>
            <button
              ref={closeBtnRef}
              type="button"
              className={styles.modalClose}
              aria-label={labels.close}
              onClick={() => setLightbox(false)}
            >
              <FaTimes aria-hidden />
            </button>
          </div>
          <div className={styles.modalBody}>
            {showNav && (
              <button
                type="button"
                className={`${styles.navBtn} ${styles.modalNav} ${styles.modalNavLeft}`}
                aria-label={labels.prev}
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
              >
                <FaChevronLeft size={18} aria-hidden />
              </button>
            )}
            <div className={styles.modalImageWrap}>
              <Image
                src={images[index]}
                alt={altFor(index)}
                fill
                sizes="96vw"
                className={styles.modalImage}
                priority
              />
            </div>
            {showNav && (
              <button
                type="button"
                className={`${styles.navBtn} ${styles.modalNav} ${styles.modalNavRight}`}
                aria-label={labels.next}
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
              >
                <FaChevronRight size={18} aria-hidden />
              </button>
            )}
            {showNav && (
              <span className={styles.modalCounter} aria-live="polite">
                {index + 1} / {n}
              </span>
            )}
          </div>
        </div>
      </div>,
      document.body
    );

  return (
    <div className={styles.gallery}>
      <div className={styles.mainStage}>
        {showNav && (
          <span className={styles.counter} aria-hidden="true">
            {index + 1} / {n}
          </span>
        )}
        <div className={styles.aspectMain}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              className={styles.motionLayer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
            >
              <button
                type="button"
                className={styles.mainImageBtn}
                aria-label={labels.zoom}
                onClick={() => setLightbox(true)}
              >
                <Image
                  src={images[index]}
                  alt={altFor(index)}
                  fill
                  sizes="(max-width: 768px) 90vw, 70vw"
                  className={styles.mainImage}
                  priority={index === 0}
                />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
        <span className={styles.zoomHint} aria-hidden="true">
          {labels.zoom}
        </span>
        {showNav && (
          <>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navPrev}`}
              aria-label={labels.prev}
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
            >
              <FaChevronLeft size={16} aria-hidden />
            </button>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navNext}`}
              aria-label={labels.next}
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
            >
              <FaChevronRight size={16} aria-hidden />
            </button>
          </>
        )}
      </div>

      <div ref={thumbsRef} className={styles.thumbsRow}>
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            data-thumb-index={i}
            className={`${styles.thumbBtn} ${i === index ? styles.thumbActive : ""}`}
            onClick={() => setIndex(i)}
            aria-label={altFor(i)}
            aria-current={i === index ? "true" : undefined}
          >
            <Image
              src={src}
              alt=""
              width={88}
              height={62}
              className={styles.thumbImg}
              loading={i === index ? "eager" : "lazy"}
            />
          </button>
        ))}
      </div>

      {modal}
    </div>
  );
}
