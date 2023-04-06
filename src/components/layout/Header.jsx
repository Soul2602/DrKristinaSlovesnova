import { useCallback, useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

function MenuBuuton(props) {
  return (
    <div className='bm-burger-button'>
      <label htmlFor="check">
        <input type="checkbox" id="check" checked={props.isOpen} onChange={props.isOpen ? props.onCloseSideBar : props.onOpenSideBar} />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  )
}

function Header() {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openSideBar = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > window.innerHeight / 2);
    });
  }, []);

  return (
    <header className={`app-header ${scroll ? 'scroll' : ''}`}>
      <img className={`logo ${scroll || isMenuOpen ? 'show' : ''}`} src={require("../../assets/logo.png")} alt="logo"
        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      />
      <Menu
        customCrossIcon={false}
        customBurgerIcon={<MenuBuuton onOpenSideBar={openSideBar} onCloseSideBar={closeSideBar} isOpen={isMenuOpen} />}
        isOpen={isMenuOpen}
        outerContainerId='outer-container'
        pageWrapId='main-container'
        right
      >
        <div className='links'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a onClick={closeSideBar} className="menu-item" href="#">В начало</a>
          <a onClick={closeSideBar} className="menu-item" href="#about-me-section">Обо мне</a>
          <a onClick={closeSideBar} className="menu-item" href="#gallery-section">Фото</a>
        </div>
      </Menu>
    </header>
  )
}

export default Header;
