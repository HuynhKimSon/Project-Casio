import React, { useState } from 'react';
import history from '../../util/history';
import iconToggle from '../../image/bars-solid.svg'
import iconUser from '../../image/user.svg'
import iconCart from '../../image/cart.png'
import './styles.css';

function Header() {

    const [onclick, setOnclick] = useState(false);
    const handleClick = () => setOnclick(!onclick);
    const closeMobileMenu = () => setOnclick(false);
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
        {
            title: "Đăng Nhập",
            icon: iconUser,
            path: "/auth",

        },
        {
            title: "Giỏ Hàng",
            icon: iconCart,
            path: "/cart",

        },
    ]


    const renderMenuItem = () => {
        return (dataMenu).map((menuItem, menuItemIndex) => {
            return (
                <li
                    key={`${menuItemIndex}`}
                    className={`nav-item ${history.location.pathname === menuItem.path ? 'menu-active' : ''}`}
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
        <>
            <header id="header">
                <nav className='navbar'>
                    <p className="navbar-logo">
                        <img src="//theme.hstatic.net/1000388227/1000497091/14/logo.png?v=1139" alt="Casio Anh Khuê Watch" height="80px" width="auto" />
                    </p>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={onclick ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div class="search">
                        <i class="fas fa-search iconSearch"></i>
                        <input type="text" class="form-control inputSearch" placeholder="Nhập từ khóa tìm kiếm..." />
                    </div>
                    <ul className={onclick ? 'nav-menu active' : 'nav-menu'}>
                        {renderMenuItem()}
                    </ul>
                </nav>
            </header >
        </>
    );
}

export default (Header);

