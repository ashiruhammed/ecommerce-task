import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const TwitterIcon = ({
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
        d="M5.026 14c6.039 0 9.341-5.002 9.341-9.333 0-.14 0-.282-.006-.422a6.687 6.687 0 0 0 1.64-1.702c-.601.265-1.238.44-1.89.518a3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.086.793A3.286 3.286 0 0 0 7.875 5.03 9.325 9.325 0 0 1 1.108 1.6a3.289 3.289 0 0 0 1.018 4.383A3.323 3.323 0 0 1 .64 5.576v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 12.58a6.315 6.315 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 14Z"
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

export default memo(TwitterIcon);
