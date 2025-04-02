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
        <Rect width={80} height={80} fill="red" rx={15.652} />
        <Path
            fill="#fff"
            d="M55.2 47.125V40.5H38.867v-6.625H55.2V27.25l9.8 9.938-9.8 9.937Zm-3.267-3.313v13.25H35.6V67L16 57.062V14h35.933v16.563h-3.266v-13.25H22.533L35.6 23.938V53.75h13.067v-9.938h3.266Z"
        />
    </Svg>
)
export default SvgComponent
