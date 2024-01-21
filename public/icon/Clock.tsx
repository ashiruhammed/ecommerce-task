import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Clock = ({
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
    <path
      d="M8.5 14.667a6.08 6.08 0 0 1-6-6 6.08 6.08 0 0 1 6-6 6.08 6.08 0 0 1 6 6 6.08 6.08 0 0 1-6 6ZM8.5 4a4.73 4.73 0 0 0-4.667 4.667 4.73 4.73 0 0 0 4.666 4.666 4.73 4.73 0 0 0 4.667-4.666A4.73 4.73 0 0 0 8.499 4Zm3.333 5.333h-4v-4h1.333V8h2.667v1.333Zm2.194-4.861-2.006-2 .94-.945 2.006 2-.94.944v.001Zm-11.056 0-.944-.945 1.994-2 .944.945-1.993 2h-.001Z"
      fill="#23A6F0"
    />
  </svg>
);

export default memo(Clock);
