export const triggerConfetti = (options?: any) => {
  if (typeof window !== 'undefined') {
    import('canvas-confetti').then((confettiModule) => {
      const confetti = confettiModule.default || confettiModule;
      if (typeof confetti === 'function') {
        confetti(options || { particleCount: 70, spread: 60, origin: { y: 0.6 } });
      }
    }).catch(() => {
      // Ignore if confetti fails
    });
  }
};
