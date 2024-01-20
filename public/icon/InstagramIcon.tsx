import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const InstagramIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#prefix__a)">
      <path
        d="M8 0C5.83 0 5.556.01 4.703.048 3.85.088 3.27.222 2.76.42c-.533.2-1.017.516-1.417.923-.406.4-.721.883-.923 1.417C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372.854.038 1.126.048 3.3.048 2.173 0 2.444-.01 3.298-.048.85-.04 1.434-.174 1.943-.372a3.915 3.915 0 0 0 1.415-.923c.445-.445.719-.891.924-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.047-3.299c-.04-.851-.175-1.433-.372-1.941a3.927 3.927 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.944-.372C10.444.01 10.172 0 7.998 0h.003Zm-.717 1.442h.718c2.136 0 2.39.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.454.546.599.92.11.281.24.705.274 1.485.04.843.047 1.096.047 3.231s-.007 2.389-.046 3.232c-.036.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.6.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.32-.64.6-.92.28-.28.545-.453.92-.598.281-.11.704-.24 1.484-.276.738-.034 1.024-.044 2.515-.045v.002Zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92Zm-4.27 1.122a4.11 4.11 0 1 0-.128 8.217 4.11 4.11 0 0 0 .128-8.217Zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h16.001v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default InstagramIcon;
