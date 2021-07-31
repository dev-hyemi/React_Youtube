import styles from "./search_header.module.css";
import React from "react";

const SearchHeader = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input className={styles.input} type="search" placeholder="검색" />
      <button className={styles.button} type="summit">
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
      <div className={styles.iconWrapper}>
        <i class="fas fa-microphone"></i>
        <i class="fas fa-video"></i>
        <i class="fas fa-th"></i>
        <i class="fas fa-bell"></i>
      </div>
    </header>
  );
};

export default SearchHeader;
