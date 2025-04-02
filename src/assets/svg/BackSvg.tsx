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
            fill="#FDD72E"
            d="M38.333 21.563a1.438 1.438 0 0 1 0 2.875H20.604V34.5a1.438 1.438 0 0 1-2.453 1.016l-11.5-11.5a1.437 1.437 0 0 1 0-2.032l11.5-11.5a1.438 1.438 0 0 1 2.453 1.016v10.063h17.73Z"
        />
    </Svg>
)
export default SvgComponent
