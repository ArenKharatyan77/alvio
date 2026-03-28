import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
          <ul className={styles.link}>
            <li>
              <Link to="/">Alivio</Link>
            </li>
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
    </footer>
  );
};

export default Footer;
