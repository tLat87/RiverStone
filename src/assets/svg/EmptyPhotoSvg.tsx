import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={78}
        height={79}
        fill="none"
        {...props}
    >
        <Path
            fill="#EBEBF5"
            fillOpacity={0.6}
            d="M8.667 79c-2.384 0-4.423-.859-6.119-2.576C.852 74.706.003 72.639 0 70.222V8.778c0-2.414.85-4.48 2.548-6.197C4.247.863 6.286.003 8.667 0h60.666c2.384 0 4.425.86 6.123 2.58C77.155 4.302 78.003 6.368 78 8.779v61.444c0 2.414-.848 4.481-2.544 6.202-1.695 1.72-3.736 2.579-6.123 2.576H8.667ZM13 61.444h52L48.75 39.5l-13 17.556L26 43.889 13 61.444Z"
        />
    </Svg>
)
export default SvgComponent
