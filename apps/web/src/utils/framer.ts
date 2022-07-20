const pageEasing = [0.87, 0, 0.13, 1];
const pageTransition = {
    duration: 0.3,
    ease: pageEasing,
};

const mainEasing = [0.6, 0.05, -0.01, 0.9];
const mainTransition = {
    duration: 0.6,
    ease: mainEasing,
};

//! VARIANTS

export const pageVariants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};
