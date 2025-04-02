import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={135}
        height={135}
        fill="none"
        {...props}
    >
        <Rect width={135} height={135} fill="#fff" rx={15.652} />
        <Path fill="#FDD72E" d="M45 28.912v78.75l61.875-39.375L45 28.912Z" />
    </Svg>
)
export default SvgComponent
