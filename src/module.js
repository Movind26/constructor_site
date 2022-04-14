import image from './assets/image.png';

export const model = [
  {
    type: 'title',
    value: 'Site constructor on pure JavaScript',
    options: {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
      }
    },
  },
  { type: 'text', value: 'here we go with some text' },
  { type: 'columns', value: ['1111111111', '222222222', '333333333'] },
  { type: 'image', value: image },
];
