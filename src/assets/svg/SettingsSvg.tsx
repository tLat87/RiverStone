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
            d="m9.25 22-.4-3.2a3.772 3.772 0 0 1-.612-.3 8.534 8.534 0 0 1-.563-.375L4.7 19.375l-2.75-4.75 2.575-1.95a2.385 2.385 0 0 1-.025-.337v-.675c0-.109.008-.221.025-.338L1.95 9.375l2.75-4.75 2.975 1.25c.183-.133.375-.258.575-.375.2-.117.4-.217.6-.3l.4-3.2h5.5l.4 3.2c.217.083.421.183.613.3.192.117.38.242.562.375l2.975-1.25 2.75 4.75-2.575 1.95c.017.117.025.23.025.338v.674c0 .109-.017.221-.05.338l2.575 1.95-2.75 4.75-2.95-1.25a6.826 6.826 0 0 1-.575.375c-.2.117-.4.217-.6.3l-.4 3.2h-5.5Zm2.8-6.5c.967 0 1.792-.342 2.475-1.025A3.372 3.372 0 0 0 15.55 12c0-.967-.342-1.792-1.025-2.475A3.372 3.372 0 0 0 12.05 8.5c-.983 0-1.813.342-2.488 1.025A3.389 3.389 0 0 0 8.55 12c0 .967.338 1.792 1.013 2.475.675.683 1.504 1.025 2.487 1.025Z"
        />
    </Svg>
)
export default SvgComponent
