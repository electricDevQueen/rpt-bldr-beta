import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import styles from "./page.module.css";
import Link from 'next/link';
import ReportList from "./report-list";

export default function Home() {


  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <h1>Report builder</h1>
      </header>
      <nav className={styles.mainMenu}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}><Link href="report" className={styles.link}>New report</Link></li>
        </ul>
        <hr className={styles.menuBreak}></hr>
        <ul className={styles.navList}>
          <li className={styles.navListItem}><Link href="settings" className={styles.link}>Settings</Link></li>
        </ul>
      </nav>
      <main className={styles.mainContainer}>
        <h2>Hello!</h2>
        <ReportList></ReportList>
      </main>
    </div>
  );
}
