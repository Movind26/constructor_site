export function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}

// преобразователь объекта в строчку стилей
export function css(styles = {}) {
  const toString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
}
