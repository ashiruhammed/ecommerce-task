import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const HackIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 72 72"
    fill="none"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M65.76 19.86a3 3 0 0 0-1.62-1.62A3 3 0 0 0 63 18H48a3 3 0 0 0 0 6h7.77L39 40.77l-9.87-9.9a3 3 0 0 0-4.26 0l-18 18a3 3 0 0 0 0 4.26 3 3 0 0 0 4.26 0L27 37.23l9.87 9.9a3 3 0 0 0 4.26 0L60 28.23V36a3 3 0 1 0 6 0V21a3.002 3.002 0 0 0-.24-1.14Z"
      fill="#23A6F0"
    />
  </svg>
);

export default memo(HackIcon);
