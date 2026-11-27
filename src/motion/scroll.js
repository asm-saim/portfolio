// Single owner for the Lenis instance so route transitions can reset scroll
// without threading a ref through the tree.
let instance = null;

export const setLenis = (lenis) => {
  instance = lenis;
};

export const scrollToTop = () => {
  if (instance) {
    instance.scrollTo(0, { immediate: true, force: true });
    return;
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

// Cancel any in-flight smooth scroll so the page holds still behind a modal.
export const freezeScroll = () => {
  instance?.reset();
};
