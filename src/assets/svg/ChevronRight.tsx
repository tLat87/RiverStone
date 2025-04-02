import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M10.157 12.71 4.5 18.369l-1.414-1.414 4.95-4.95-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SvgComponent
