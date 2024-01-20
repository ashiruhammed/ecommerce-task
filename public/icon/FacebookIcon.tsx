import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const FacebookIcon = ({
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
        d="M16.003 8.05c0-4.446-3.582-8.05-8-8.05C3.582.001 0 3.604 0 8.051c0 4.017 2.926 7.347 6.75 7.951v-5.625H4.72V8.051h2.032V6.276c0-2.017 1.195-3.131 3.022-3.131.877 0 1.792.157 1.792.157v1.98h-1.01c-.993 0-1.303.621-1.303 1.258v1.51h2.219l-.354 2.326H9.252v5.625c3.824-.604 6.75-3.934 6.75-7.951Z"
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

export default FacebookIcon;
