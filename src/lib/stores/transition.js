import { fade } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';

export const pageTransition = (node) => {
  return fade(node, {
    duration: 1110,
    easing: cubicOut,
    opacity: 0
  });
};