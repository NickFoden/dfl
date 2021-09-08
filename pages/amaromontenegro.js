import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Drinks Food Life</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}></div>
        <div className={styles.submain}>
          <p>
            {" "}
            The International Gallery and Cosmic Veggie teamed up for Amaro
            Montenegro photoshoot on a rooftop in Bushwick. The rest was
            history. Insert upside down smiley face here. Loic Luspo, french
            model and professional handball athlete, models for the photo. The
            International Gallery is located by the Williamsburg and Bushwick
            border. Cosmic Veggie is a curatorial platform that focuses on art
            experiences paired with food and drinks. Check out their instagram
            for more info https://www.instagram.com/cosmicveggie/ For more on
            Amaro Montenegro visit www.amaromontenegro.com
          </p>
        </div>
        <div className={styles.subsubmain}>
          <p>Chicken is a Chicken</p>
        </div>
        <div className={styles.smain}>
          <img
            className="img1"
            src="https://lh3.googleusercontent.com/SpfSt4EadOjpRUZCfjEPu_bl5mCTyXq5skTyHKKqwcCt1hUzXHZ5ZxU9rPg_oY4e_tIZQQnZb4RD4FjBFzJTmMGKArLmctic3R1oD7GbBy_kXHazlVy1QdGWiN0ywz1GGenQRrCl2w=w2400"
          />{" "}
        </div>
        <div className={styles.smain3}>
          <p>
            Here's is another section its important we need more content why? I
            thinking its a visual thing. Cards, Carousel, some animation, some
            hover effects. These are things that make something seem
            professional.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <ContentCard
          img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="Drinking Amaros at ZXY Gallery"
          description="Amaro Montenegro making an appearance at ZXY Gallery"
        />

        <ContentCard
          img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="On the beauty of North Dumpling"
          description="In love with North Dumpling "
        />
      </div>
    </>
  );
}
