import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SearchIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#prefix__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m17.19 15.478 6.456 6.456a1.21 1.21 0 1 1-1.713 1.711l-6.455-6.456a9.6 9.6 0 1 1 1.71-1.71h.002ZM9.6 16.8A7.2 7.2 0 1 0 9.6 2.4a7.2 7.2 0 0 0 0 14.4Z"
        fill="#252B42"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);


export default memo(SearchIcon);
