export const animationOne = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const animationTwo = {
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: '-100vh',
    scale: 0.3,
  },
};
export const animationThree = {
  in: {
    opacity: 1,
    x: -300,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: 300,
  },
  end: {
    x: 0,
    opacity: 1,
  },
};

export const tranistion = {
  duration: 0.4,
};

export const titleAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const titleTransition = {
  duration: 0.8,
  delay: 0.6,
  ease: [0.165, 0.84, 0.44, 1],
};

export const titleAnimation2 = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export const titleTransition2 = {
  duration: 0.8,
  delay: 0.4,
  ease: [0.165, 0.84, 0.44, 1],
};
export const textAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export const textTransition = {
  duration: 0.8,
  delay: 0.7,
};

export const infoTextAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const infoTextTransition = {
  duration: 0.6,
  delay: 0.2,
};

export const socialAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
