import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import Carousel from "../components/Carousel";
import ContentCard from "../components/ContentCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Drinks Food Life</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image alt="fish" width={500} height={500} src="/fish2.jpg" />{" "}
          <h2> On Art and Spear Fishing</h2> <h3>The Nicole Burko Story</h3>
        </div>

        <Link href="/northdumpling">
          <div className={styles.card}>
            <Image
              alt="dumpling"
              className="img2"
              width={500}
              height={500}
              src="/northdump1.jpg"
            />{" "}
            <h2> North Dumpling, my Guru</h2>{" "}
            <h3>I'm in love with North Dumpling, duh.</h3>
          </div>
        </Link>

        <Link href="/naturalwine">
          <div className={styles.card}>
            <Image
              alt="wine"
              className="img2"
              width={500}
              height={500}
              src="/leclerc.jpg"
            />{" "}
            <h2> North Dumpling, my Guru</h2>{" "}
            <h3>I'm in love with North Dumpling, duh.</h3>
          </div>
        </Link>

        <div className={styles.card}>
          <Image
            alt="dumpling"
            className="img2"
            width={500}
            height={500}
            src="/northdump1.jpg"
          />{" "}
          <h2> North Dumpling, my Guru</h2>{" "}
          <h3>I'm in love with North Dumpling, duh.</h3>
        </div>
      </div>
      //sticky social and tiny about + newsletter
      <div className="wrapper">
        <a href="./amaromontenegro">
          <ContentCard
            img="https://lh3.googleusercontent.com/SpfSt4EadOjpRUZCfjEPu_bl5mCTyXq5skTyHKKqwcCt1hUzXHZ5ZxU9rPg_oY4e_tIZQQnZb4RD4FjBFzJTmMGKArLmctic3R1oD7GbBy_kXHazlVy1QdGWiN0ywz1GGenQRrCl2w=w2400"
            title="Drinking Amaros at ZXY Gallery"
            description="Amaro Montenegro making an appearance at ZXY Gallery"
            tag="amaromontenegro"
            href="amaromontenegro"
          />
        </a>

        <a href="./northdumpling">
          <ContentCard
            img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="North Dumpling, my Guru."
            description="I'm in love with North Dumpling, duh."
            href="northdumpling"
          />
        </a>
        <a href="./amaromontenegro">
          <ContentCard
            img="https://lh3.googleusercontent.com/SpfSt4EadOjpRUZCfjEPu_bl5mCTyXq5skTyHKKqwcCt1hUzXHZ5ZxU9rPg_oY4e_tIZQQnZb4RD4FjBFzJTmMGKArLmctic3R1oD7GbBy_kXHazlVy1QdGWiN0ywz1GGenQRrCl2w=w2400"
            title="Drinking Amaros at ZXY Gallery"
            description="Amaro Montenegro making an appearance at ZXY Gallery"
            tag="amaromontenegro"
            href="amaromontenegro"
          />
        </a>

        <a href="./northdumpling">
          <ContentCard
            img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="North Dumpling, my Guru."
            description="I'm in love with North Dumpling, duh."
            href="northdumpling"
          />
        </a>
      </div>
      <div className={styles.cards2}>
        <div className={styles.card2}>
          <Image alt="fish" width={500} height={500} src="/fish2.jpg" />{" "}
          <h2> On Art and Spear Fishing</h2> <h3>The Nicole Burko Story</h3>
        </div>

        <div className={styles.card2}>
          <Image
            alt="dumpling"
            className="img2"
            width={500}
            height={500}
            src="/northdump1.jpg"
          />{" "}
          <h2> North Dumpling, my Guru</h2>{" "}
          <h3>I'm in love with North Dumpling, duh.</h3>
        </div>

        <div className={styles.card2}>
          <Image
            alt="dumpling"
            className="img2"
            width={500}
            height={500}
            src="/northdump1.jpg"
          />{" "}
          <h2> North Dumpling, my Guru</h2>{" "}
          <h3>I'm in love with North Dumpling, duh.</h3>
        </div>
        <div className={styles.card2}>
          <Image
            alt="dumpling"
            className="img2"
            width={500}
            height={500}
            src="/northdump1.jpg"
          />{" "}
          <h2> North Dumpling, my Guru</h2>{" "}
          <h3>I'm in love with North Dumpling, duh.</h3>
        </div>
      </div>
    </>
  );
}
