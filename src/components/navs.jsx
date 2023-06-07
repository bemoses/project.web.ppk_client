// stylesheets
import "../styles/navs.css"

// graphics
import ppk_logo_colored from "../images/ppk_logo_colored.png"

/**
 * Default navigation bar seen on every page other than authentication pages (sign in and sign up pages etc.)
 */
export function DefaultNav () {
    return (
        <div id="nav" data-type="default">
            <div id="brand"><img src={ ppk_logo_colored } alt="brand" /></div>
        </div>
    )
}