import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#025D39"
            d="M4 19v-9c0-.317.071-.617.213-.9.142-.283.338-.517.587-.7l6-4.5c.35-.267.75-.4 1.2-.4.45 0 .85.133 1.2.4l6 4.5c.25.183.446.417.588.7.142.283.213.583.212.9v9c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0 1 18 21h-3a.965.965 0 0 1-.712-.288A.973.973 0 0 1 14 20v-5a.965.965 0 0 0-.288-.712A.973.973 0 0 0 13 14h-2a.965.965 0 0 0-.712.288A.973.973 0 0 0 10 15v5a.968.968 0 0 1-.288.713A.964.964 0 0 1 9 21H6c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 4 19Z"
        />
    </Svg>
)
export default SvgComponent
