const form = document.querySelector('#form');
const text = document.querySelector('.form__text');
const out = document.querySelector('.output');
const prepositions = [
  'в',
  'без',
  'до',
  'для',
  'за',
  'через',
  'над',
  'по',
  'из',
  'у',
  'около',
  'под',
  'о',
  'про',
  'на',
  'к',
  'перед',
  'при',
  'с',
  'между',
  'во',
  'и',
];

function formatStr(str) {
  return str
    .replace(
      /(\S+?)( )/g,
      (_, p) => p + (prepositions.includes(p.toLowerCase()) ? '&nbsp;' : ' '),
    )
    .replace(/©/g, '&copy;')
    .replace(/#|№/g, '&#8470;')
    .replace(/\s-\s/g, (_, p) => (p ? ' ' + '&mdash;' + ' ' : ''))
    .replace(/((?:^|>)[^<]*)(^|\s|\(|-|=)"|«/g, '$1$2&laquo;')
    .replace(/((?:^|>)[^<]*)"|»([\s,<=.:;!?\-)])/g, '$1&raquo;$2')
    .replace(/>"|»/g, '>&raquo;');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const textStr = formatStr(text.value);
  out.textContent = textStr;
});

form.addEventListener('reset', () => {
  form.reset();
  out.textContent = '';
});
