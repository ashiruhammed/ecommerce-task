import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Stat = ({
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
        d="M16.333 13.833H2v-13a.167.167 0 0 0-.167-.166H.667A.167.167 0 0 0 .5.833v14.334c0 .091.075.166.167.166h15.666a.167.167 0 0 0 .167-.166V14a.167.167 0 0 0-.167-.167ZM3.5 12.5h11.167a.167.167 0 0 0 .166-.167V3.25a.167.167 0 0 0-.285-.119l-4.381 4.382-2.613-2.584a.167.167 0 0 0-.235 0L3.38 8.88a.164.164 0 0 0-.048.117v3.337c0 .092.075.167.167.167Z"
        fill="#23856D"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path
          fill="#fff"
          transform="translate(.5 .667)"
          d="M0 0h16v14.667H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default memo(Stat);
