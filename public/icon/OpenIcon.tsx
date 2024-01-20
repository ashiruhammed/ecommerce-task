

import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const OpenIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 14"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M.571 0H23.43v2.286H.57V0Zm5.715 5.714h17.143V8H6.286V5.714Zm7.143 5.715h10v2.285h-10V11.43Z"
      fill="#252B42"
    />
  </svg>
);
 
export default memo(OpenIcon);
