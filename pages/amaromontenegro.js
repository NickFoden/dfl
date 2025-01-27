import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          ZXY Gallery and Drinks Food Life team up for Art Event and Amaro
          Montenegro Tasting
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.article1}>
          <p className={headerStyles.description}>
            Drinking Amaro Montenegro at ZXY Gallery
          </p>
          <div className="image-wrapper">
            <Image
              alt="Amaro Bottle"
              width={872}
              height={554}
              src="/amaro-monte.jpg"
            />{" "}
          </div>
          <p>
            {" "}
            ZXY Gallery and Drinks...Food...Life! teamed up for Art pop up that
            featured an Amaro Montenegro tasting on the rooftop of ZXY Gallery
            in Bushwick. The rest was history. Insert upside down smiley face
            here. Loic Luspo, french model and professional handball athlete,
            models for the photo.{" "}
            <p>
              ZXY Gallery is located by the Williamsburg and Bushwick border.
              Cosmic Veggie is a curatorial platform that focuses on art
              experiences paired with food and drinks.{" "}
            </p>{" "}
            <p>
              Check out their instagram for more info
              <a href="https://www.instagram.com/zxygallery/">
                <u>here</u>{" "}
              </a>
            </p>{" "}
            For more on Amaro Montenegro visit www.amaromontenegro.com
          </p>
        </div>
      </div>
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
            title="North Dumpling"
            description="In love with North Dumpling "
            href="northdumpling"
          />
        </a>
      </div>
      <div className={styles.smain}>
        Contact us cause this is now the footer
      </div>
    </>
  );
}
