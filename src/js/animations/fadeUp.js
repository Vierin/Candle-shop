export const fadeUp = (el, delay) => {
    gsap.killTweensOf(el, { opacity: true, y: true });
    let delayTime = delay;
    return gsap.fromTo(el, { opacity: 0, y: 25 }, { duration: 0.45, opacity: 1, y: 0, ease: 'sine', delay: delayTime });
};