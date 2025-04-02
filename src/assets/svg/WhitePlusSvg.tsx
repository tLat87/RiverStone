import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={45}
        height={46}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M33.75 24.871h-9.375v9.375a1.875 1.875 0 1 1-3.75 0v-9.375H11.25a1.875 1.875 0 0 1 0-3.75h9.375v-9.375a1.875 1.875 0 1 1 3.75 0v9.375h9.375a1.875 1.875 0 1 1 0 3.75Z"
        />
    </Svg>
)
export default SvgComponent
