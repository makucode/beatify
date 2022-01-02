export const fadeIn = {
    pageInitial: {
        opacity: 0,
        filter: "blur(5px)",
    },
    pageAnimate: {
        opacity: 1,
        filter: "blur(0px)",
    },
    pageExit: {
        opacity: 0,
        filter: "blur(5px)",
    },
};

export const fadeInUp = {
    pageInitial: {
        opacity: 0,
        transform: "scale(0.985)",
    },
    pageAnimate: {
        opacity: 1,
        transform: "scale(1)",
    },
    pageExit: {
        opacity: 0,
        transform: "scale(0.985)",
    },
};
