import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Arrow = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 10 16"
    fill="none"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#prefix__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.68.18a.615.615 0 0 1 .872 0l7.384 7.385a.615.615 0 0 1 0 .87L1.552 15.82a.616.616 0 0 1-.871-.872L7.63 8 .68 1.052a.615.615 0 0 1 0-.871Z"
        fill={props.color || "#23A6F0"}
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" transform="translate(.5)" d="M0 0h9v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default memo(Arrow);
