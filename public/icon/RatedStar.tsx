import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const RatedStar = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 23 22"
    fill="none"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M21.097 8.412a.918.918 0 0 0-.797-.62l-5.229-.415-2.262-5.01a.916.916 0 0 0-1.672 0l-2.262 5.01-5.23.415a.917.917 0 0 0-.567 1.572l3.864 3.767-1.367 5.918a.917.917 0 0 0 1.404.97l4.994-3.33 4.994 3.33a.918.918 0 0 0 1.392-1.015l-1.678-5.87 4.16-3.745a.919.919 0 0 0 .256-.977Z"
      fill="#F3CD03"
    />
  </svg>
);

export default memo(RatedStar);
