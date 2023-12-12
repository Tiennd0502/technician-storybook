import { Global } from '@emotion/react';

import adventProBold from 'assets/fonts/AdventPro-Bold.ttf';
import adventProLight from 'assets/fonts/AdventPro-Light.ttf';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Advent Pro';
        font-display: swap;
        font-weight: 700;
        font-style: normal;
        src: url('${adventProBold}') format('woff2');
      }
			
      @font-face {
        font-family: 'Advent Pro';
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        src: url('${adventProLight}') format('woff2');
      }
    `}
  />
);

export default Fonts;
