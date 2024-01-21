import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const NonRatedStar = ({
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
      d="M5.998 13.13 4.63 19.05a.916.916 0 0 0 1.402.97l4.995-3.33 4.994 3.33a.918.918 0 0 0 1.392-1.015l-1.678-5.87 4.16-3.745a.918.918 0 0 0-.54-1.596l-5.23-.416-2.263-5.009a.915.915 0 0 0-1.67 0L7.928 7.377 2.7 7.793a.917.917 0 0 0-.568 1.57l3.866 3.768Zm2.617-3.967a.915.915 0 0 0 .763-.538l1.65-3.651 1.65 3.651a.915.915 0 0 0 .763.538l3.643.289-3 2.7a.92.92 0 0 0-.269.934l1.15 4.022-3.427-2.285a.913.913 0 0 0-1.017 0L6.94 17.211l.963-4.17a.917.917 0 0 0-.253-.862L4.863 9.462l3.752-.3Z"
      fill="#F3CD03"
    />
  </svg>
);

export default memo(NonRatedStar);
