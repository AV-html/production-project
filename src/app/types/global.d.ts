declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
  /* React v18: React.FunctionComponent<React.SVGAttributes<SVGAElement>> */
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare const __IS_DEV__: boolean;
