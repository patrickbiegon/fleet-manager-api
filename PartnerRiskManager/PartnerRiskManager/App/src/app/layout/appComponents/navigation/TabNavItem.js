const TabNavItem = ({children, tab, setTab, tabFor}) => {
    return (
        <li className="nav-item mt-2 cursor-pointer">
            <span className={`nav-link text-active-primary ms-0 me-10 py-5 ${(tab === tabFor) && "active" }`} onClick={() => setTab(tabFor)} >
                {children}
            </span>
        </li>
    )
}

export default TabNavItem;