import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const YoutubeIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 17 16"
    fill="none"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#prefix__a)">
      <path
        d="M9.051 1.999h.09c.821.003 4.986.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.1.38.171.883.22 1.402l.01.104.021.26.008.104c.066.914.073 1.77.075 1.957v.075c-.002.194-.01 1.108-.082 2.06l-.008.105-.01.104c-.05.572-.123 1.14-.234 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.57.334-6.18.335h-.143c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.17-.007-.172-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.11-.417-.185-.986-.235-1.558L1.09 9.82l-.008-.104A31.402 31.402 0 0 1 1 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.12-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007c.952-.03 1.904-.048 2.856-.051h.193v-.001Zm-1.65 3.21v4.818l4.156-2.408L7.4 5.209Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" transform="translate(.5)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default YoutubeIcon;
