import React, { useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { TbHeart, TbMessageCircle2, TbUser } from "react-icons/tb";
import { RiShoppingBasketLine, RiShoppingBasketFill} from 'react-icons/ri';
import {AiOutlineClose} from "react-icons/ai";
import Container from '../../utils/Container';
import {RedirectButton} from '../../utils/Components';
import { useTranslation } from "react-i18next";
import {  useSelector } from "react-redux";
import i18n from "../../language/i18next";

const Header = () => {
  const { t } = useTranslation();
  const navigation = useRef();
  const location = useLocation();
  const createUserData = useSelector(state => state.createReducer);
  const likedProduct = useSelector(state => state.likedReduser.likedProducts);
  const basketReduser = useSelector(state => state.basketReduser.purchasedProducts);
  const [renderDelete, setRenderDelete] = useState(false)
  console.log(renderDelete);
  
  var prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", function() {
    let currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos) {
      navigation.current.style = "top: 0"
    }else {
      navigation.current.style = "top: -144px"
    }
    prevScrollpos = currentScrollPos;
  });

  return location.pathname.includes("/auth") ? <></> : (
    <header ref={navigation}>
      {location.pathname.includes("/like") ? <></> : location.pathname.includes("/basket") ? <></> 
      : renderDelete === false ?
      <div className="topbarbanner">
          <div className="bannerWrapper">
              <img src="https://static.olx.uz/static/olxuz/packed/font/2f59441384162eee8400133e61c255338e.svg" alt="warningImg" />
              <p>
                {t("header_warning")}
              </p>
          </div>

          <div className="bannerWrapper">
            <NavLink className="opacity" to="https://www.youtube.com/watch?v=_xpoOKy527I&feature=youtu.be">
                {t("header_warningClose")}
            </NavLink>
            <button className='opacity' onClick={() => setRenderDelete(true)} > <AiOutlineClose /> </button>
          </div>
      </div>
      : <></>
      }

      <Container>

        {/* <span className="bgImg"></span> */}
        
        <div className='header__wrapper'>
          <Link to="/">
            <img className='header__logo' src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="header__logo" />
          </Link>
          <nav>
            <ul className='language-select'>
              {/*                     tilni o'zgartiradi */}
              <li className={localStorage.getItem("lang") === "uz" ? "active-lang" : ''} onClick={() => i18n.changeLanguage("uz")}>O'z</li>
              <span>|</span>
              <li className={localStorage.getItem("lang") === "ru" ? "active-lang" : ''} onClick={() => i18n.changeLanguage("ru")}>Ru</li>
            </ul>
            <Link to="/message" className='header__nav-link'>
              <TbMessageCircle2 />
              {t("header_message")}
            </Link>
            <Link to="/like" className='header__nav-link TbHeart'>
              {likedProduct.length === 0 && <TbHeart/> }
              {likedProduct.length > 0 && <TbHeart className='addedToLike' />}
              {likedProduct.length > 0 && likedProduct.length}
            </Link>
            <Link to="/basket" className='header__nav-link-basket'>
              {basketReduser.length === 0 && <RiShoppingBasketLine/> }
              {basketReduser.length > 0 &&   <RiShoppingBasketFill className='addedToCart' /> }
              {basketReduser.length > 0 && basketReduser.length}
            </Link>
            <Link to="/auth/create" className='header__nav-link'>
              <TbUser />
              {
                createUserData.user?.email ? createUserData.user?.email : t("header_account")
              }
            </Link>
            <Link to="/" >
              <RedirectButton redirect="/create-new" title={ t("header_announcement") } type="light" />
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header;
