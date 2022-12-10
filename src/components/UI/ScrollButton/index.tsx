import styles from "./ScrollButton.module.scss";
import scrollIcon from "../../../asserts/icons/component_scroll.svg";
import { useState } from "react";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      onClick={scrollToTop}
      className={styles["scroll-btn"]}
      style={{ display: visible ? "inline" : "none" }}
    >
      <img src={scrollIcon} alt="scroll" />
    </button>
  );
};

export default ScrollButton;
