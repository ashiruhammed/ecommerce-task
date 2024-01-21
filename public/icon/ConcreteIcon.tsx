import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const ConcreteIcon = ({
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
      d="M42.75 22.5H58.5V27H42.75v-4.5ZM42.75 33.75H58.5v4.5H42.75v-4.5ZM42.75 45H58.5v4.5H42.75V45ZM13.5 22.5h15.75V27H13.5v-4.5ZM13.5 33.75h15.75v4.5H13.5v-4.5ZM13.5 45h15.75v4.5H13.5V45Z"
      fill="#23A6F0"
    />
    <path
      d="M63 11.25H9a4.505 4.505 0 0 0-4.5 4.5v40.5a4.505 4.505 0 0 0 4.5 4.5h54a4.505 4.505 0 0 0 4.5-4.5v-40.5a4.505 4.505 0 0 0-4.5-4.5Zm-54 4.5h24.75v40.5H9v-40.5Zm29.25 40.5v-40.5H63v40.5H38.25Z"
      fill="#23A6F0"
    />
  </svg>
);

export default memo(ConcreteIcon);
