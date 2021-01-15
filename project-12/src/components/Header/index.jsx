import React from 'react';
import history from '../../util/history';
import iconToggle from '../../image/bars-solid.svg'
import iconUser from '../../image/user.svg'
import iconCart from '../../image/cart.png'
import './styles.css';

function Header() {

    // const [onclick, setOnclick] = useState(false);

    const dataMenu = [
        {
            title: "Trang Chủ",
            icon: "//theme.hstatic.net/1000388227/1000497091/14/icon_nav_1.png?v=1131",
            path: "/",
        },
        {
            title: "Giới Thiệu",
            icon: "//theme.hstatic.net/1000388227/1000497091/14/icon_nav_2.png?v=1131",
            path: "/gioithieu",
        },
        {
            title: "Sản Phẩm",
            icon: "//theme.hstatic.net/1000388227/1000497091/14/icon_nav_3.png?v=1131",
            path: "/sanpham",
            // path: "/sanpham?type=product",
            menuItemChild: [
                {
                    title: "G-SHOCK",
                    path: "/sanpham?type=product&style=g-shock"
                },
                {
                    title: "BABY-G",
                    path: "/sanpham?type=product&style=baby-g"
                },
                {
                    title: "EDIFICE",
                    path: "/sanpham?type=product&style=edifice"
                },
                {
                    title: "SHEEN",
                    path: "/sanpham?type=product&style=sheen"
                },
            ]
        },
        {
            title: "Blog",
            icon: "//theme.hstatic.net/1000388227/1000497091/14/icon_nav_4.png?v=1131",
            path: "/blog",
        },
        {
            title: "Video",
            icon: "//theme.hstatic.net/1000388227/1000497091/14/icon_nav_5.png?v=1131",
            path: "/video",
        },
        {
            title: "Sản Phẩm Khác",
            icon: "//theme.hstatic.net/1000388227/1000497091/14/icon_nav_6.png?v=1131",
            path: "/sanphamkhac",
            menuItemChild: [
                {
                    title: "CLOCK",
                    path: "/sanphamkhac?type=product&style=clock"
                },
                {
                    title: "PRO TREK",
                    path: "/sanphamkhac?type=product&style=pro-trek"
                },
                {
                    title: "STANDARD",
                    path: "/sanphamkhac?type=product&style=standard"
                },
                {
                    title: "ĐỒNG HỒ TRẺ EM",
                    path: "/sanphamkhac?type=product&style=donghotreem"
                },
            ]
        },
    ]

    const renderMenuItem = () => {
        return (dataMenu).map((menuItem, menuItemIndex) => {
            return (
                <li
                    key={`li-item-menu-${menuItemIndex}`}
                    className={`li-item-menu ${history.location.pathname === menuItem.path ? 'menu-active' : ''}`}
                    onClick={() => history.push(menuItem.path)}
                >
                    <img src={menuItem.icon} alt="iconMenu" height="25px" width="auto" />
                    <span className="item-menu">{menuItem.title}</span>
                    <div className="underlined"></div>
                    {menuItem.menuItemChild == null
                        ? (
                            null
                        )
                        : (
                            <ul
                                className="ul-item-dropdown"
                            >
                                {renderDropdownItem(menuItem.menuItemChild)}
                            </ul>
                        )
                    }
                </li>
            )
        });
    }

    const renderDropdownItem = (dropdownData) => {
        return (dropdownData || []).map((dropdownItem, dropdownItemIndex) => {
            return (
                <li className="li-item-dropdown"
                    key={`dropdown-item-${dropdownItemIndex}`}
                    onClick={() => history.push(dropdownItem.path)}
                >
                    {dropdownItem.title}
                </li>
            )
        })
    }
    return (
        <header id="headerPage">
            <div className="container p-0">
                <div className="row d-flex">
                    <div id="headerLogo" style={{ cursor: "pointer" }}>
                        <img onClick={() => history.push('/')} src="//theme.hstatic.net/1000388227/1000497091/14/logo.png?v=1131" title="Casio Anh Khuê" alt="Casio Anh Khuê" width="170px" height="70px" />
                    </div>
                    <div id="headerSearch">
                        <div className="frmSearch">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </i>
                            <input
                                className="inputSearch"
                                type="text"
                                placeholder="Nhập từ khóa tìm kiếm..."
                            />
                        </div>
                    </div>
                    <div id="headerMenu">
                        <nav id="nav_menu">
                            <ul className="ul-menu">
                                {renderMenuItem()}
                            </ul>
                        </nav>
                    </div>
                    <div id="auth-cart">
                        <div
                            className="authHeader"
                            onClick={() => history.push('/auth')}
                        >
                            <img src={iconUser} alt="" height="25px" width="auto" />
                            <span className="item-menu">Đăng Nhập</span>
                        </div>
                        <div className="cartHeader">
                            <img src={iconCart} alt="" height="25px" width="auto" />
                            <span className="item-menu">Giỏ Hàng</span>
                        </div>
                    </div>
                    <div id="iconToggle">
                        <img src={iconToggle} alt="icon" height="35px" width="auto" />
                    </div>
                </div>
            </div>

        </header >
    );
}

export default (Header);

