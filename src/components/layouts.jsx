// components
import { DefaultNav } from "./navs.jsx"

// styles
import "../styles/layouts.css"

/**
 * Layout component wraps/ serves as a container for the page's contents, it contains the default Nav on every page (excluding authentication pages) by default
 */
export function Layout (props) {
    return (
        <div id="page">
            <DefaultNav />
            <div id="page-content">
                { props?.children }
            </div>
        </div>
    )
}

/**
 * PageWrapper component wraps/ serves as a container for top level components such as the Layout component and the modal components
 */
export function PageWrapper (props) {
    return (
        <div>{ props?.children }</div>
    )
}