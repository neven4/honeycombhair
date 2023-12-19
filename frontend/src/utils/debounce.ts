export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  wait: number
) {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<F>) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
