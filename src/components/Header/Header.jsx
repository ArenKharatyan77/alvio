import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../../../public/logo/Logo";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.parentBlock}>
          <div className={styles.logo}>
            <Link to="/">
              <Logo />
            </Link>
            <ul className={styles.link}>
              <li>
                <Link to="/whyAlivio">Why Alivio</Link>
              </li>
              <li>
                <Link to="/solutions">Solutions</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          <div className={styles.signInLogIn}>
            <button className={styles.signIn}>Sign in</button>
            <button className={styles.startIn}>Start Trial</button>
          </div>
          <button
            className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
          <div className={styles.mobileNavTop}>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Logo />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/whyAlivio" onClick={() => setIsOpen(false)}>
                Why Alivio
              </Link>
            </li>
            <li>
              <Link to="/solutions" onClick={() => setIsOpen(false)}>
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/community" onClick={() => setIsOpen(false)}>
                Community
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default Header;
