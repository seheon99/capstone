export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function range(start: number, end: number, step = 1) {
  return Array.from(
    { length: (end - 1 - start) / step + 1 },
    (_, i) => start + i * step,
  );
}
