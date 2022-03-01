import * as nextImage from 'next/image';

import '../src/styles/global.scss';

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'base',
    values: [
      {
        name: 'base',
        value: '#D1D0D9',
      },
      {
        name: 'container',
        value: '#F5F5F5',
      },
    ],
  }
};
