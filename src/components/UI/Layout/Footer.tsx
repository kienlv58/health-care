import { Link } from "react-router-dom";

import styles from "./Layout.module.scss";

const footerLinks = [
  {
    id: 1,
    title: "会員登録",
    path: "",
  },
  {
    id: 2,
    title: "運営会社",
    path: "",
  },
  {
    id: 3,
    title: "利用規約",
    path: "",
  },
  {
    id: 4,
    title: "個人情報の取扱について",
    path: "",
  },
  {
    id: 5,
    title: "特定商取引法に基づく表記",
    path: "",
  },
  {
    id: 6,
    title: "お問い合わせ",
    path: "",
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        {footerLinks.map(({ id, title, path }) => (
          <li key={id}>
            <Link className={styles.item} to={path}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
