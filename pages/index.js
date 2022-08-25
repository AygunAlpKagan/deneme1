import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Blogs from "../components/blogs/blogs.tsx";
import styles from "../styles/Home.module.css";

const Home = ({ jsonData }) => {
  const styling = {
    backgroundImage: `url(${"/topBlob.png"})`,
    backgroundSize: "1100px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right top",
  };
  return (
    <div className={styles.container} style={styling}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Galaksiya Blog!</a>
        </h1>
        <Blogs jsonData={jsonData} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const query = encodeURIComponent('*[_type == "post"]');
  const url = `https://2swx5d2d.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const jsonData = result.result;

  console.log(jsonData);
  return { props: { jsonData } };
};
