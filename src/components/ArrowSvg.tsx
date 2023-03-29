import * as React from "react"
import { SVGProps } from "react"

/**
 * Svg component for arrow
 * @param props 
 * @returns 
 */
const ArrowSvg= (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={44}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.54 25.555h9.291V43.97c0 .269.159.526.442.718.283.191.668.301 1.072.305h17.503c.404-.004.79-.114 1.073-.305.283-.192.442-.45.442-.718V25.555h9.295c.27 0 .536-.047.77-.137.235-.09.43-.219.565-.374a.78.78 0 0 0 .206-.512.778.778 0 0 0-.206-.512L23.43 1.513a1.41 1.41 0 0 0-.563-.376c-.235-.09-.5-.137-.771-.137-.27 0-.537.047-.77.137a1.41 1.41 0 0 0-.565.376L1.206 24.02a.779.779 0 0 0-.206.512c0 .18.07.356.206.512.135.155.33.284.564.374.234.09.5.137.77.137Z"
      fill={props.fill}
      stroke="none"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArrowSvg