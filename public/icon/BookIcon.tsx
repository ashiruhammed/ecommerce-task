import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const BookIcon = ({
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
      d="M6 24v34.587S19.863 58.071 36 66c16.137-7.929 30-7.413 30-7.413V24s-16.362 0-30 7.413C22.362 24 6 24 6 24ZM36 24a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      fill="#23A6F0"
    />
  </svg>
);

export default memo(BookIcon);
