//
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";

import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>We Love Loose Tea</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.article1}>
          <br />
          <p className={headerStyles.description}>
            Teas, yes please
            <br />
            <div className="image-wrapper">
              <Image
                alt="market"
                width={872}
                height={872}
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654718487/drinksfoodlife/teasecret1_corwi6.jpg"
              />{" "}
            </div>
          </p>
          <p>
            Lots to say about the tea in its loosest form and genmaicha...for
            now.
          </p>
        </div>
      </div>
      <ContentCard />
      <div className={styles.smain}>
        Contact us cause this is now the footer
      </div>
    </>
  );
}
