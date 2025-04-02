import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={46}
        height={46}
        fill="none"
        {...props}
    >
        <Rect width={46} height={46} fill="#fff" rx={9} />
        <Path
            fill="red"
            fillRule="evenodd"
            d="M18.667 13.083h8.666V11h-8.666v2.083ZM10 17.25h2.167v17.708c0 .277.114.542.317.737.203.195.479.305.766.305h19.5c.287 0 .563-.11.766-.305.203-.195.317-.46.317-.737V17.25H36v-2.083H10v2.083Zm8.667 4.167v8.333h2.166v-8.333h-2.166Zm6.5 0v8.333h2.166v-8.333h-2.166Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SvgComponent
