import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeIn = (element: Element, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power2.out',
    }
  );
};

export const staggerFadeIn = (elements: NodeListOf<Element> | Element[], staggerDelay = 0.1) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: staggerDelay,
      ease: 'power2.out',
    }
  );
};

export const drawLine = (path: SVGPathElement, delay = 0) => {
  const length = path.getTotalLength();
  return gsap.fromTo(
    path,
    {
      strokeDasharray: length,
      strokeDashoffset: length,
    },
    {
      strokeDashoffset: 0,
      duration: 1.5,
      delay,
      ease: 'power2.out',
    }
  );
};

export const scaleIn = (element: Element, delay = 0) => {
  return gsap.fromTo(
    element,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      delay,
      ease: 'back.out(1.7)',
    }
  );
};

export const slideInLeft = (element: Element, delay = 0) => {
  return gsap.fromTo(
    element,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power3.out',
    }
  );
};

export const slideInRight = (element: Element, delay = 0) => {
  return gsap.fromTo(
    element,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power3.out',
    }
  );
};

export const createScrollTrigger = (
  element: Element,
  animation: gsap.core.Tween,
  start = 'top 80%'
) => {
  return ScrollTrigger.create({
    trigger: element,
    start,
    onEnter: () => animation.play(),
    onLeaveBack: () => animation.pause(0),
  });
};