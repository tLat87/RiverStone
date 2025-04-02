import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={80}
        fill="none"
        {...props}
    >
        <Rect width={80} height={80} fill="#fff" rx={15.652} />
        <Path
            fill="#247B4D"
            d="m31.833 50.5 28.25-28.25c.667-.667 1.445-1 2.334-1s1.666.333 2.333 1c.667.667 1 1.459 1 2.377 0 .917-.333 1.709-1 2.373L34.167 57.667c-.667.666-1.445 1-2.334 1-.888 0-1.666-.334-2.333-1L15.167 43.333c-.667-.666-.987-1.457-.96-2.373.026-.916.374-1.708 1.043-2.377.669-.669 1.461-1.002 2.377-1 .915.003 1.706.336 2.373 1L31.833 50.5Z"
        />
    </Svg>
)
export default SvgComponent
