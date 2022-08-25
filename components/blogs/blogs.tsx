import React from "react";
import Head from "next/head";
import styles from "./blogs.module.css";

const Blogs = ({ jsonData }) => {
  console.log(jsonData);
  return (
    <div id="blogs" className="flex flex-col">
      <Head>
        <title>Galaksiya - Our Blog</title>
      </Head>
      <img
        width={800}
        height={600}
        src="/2.svg"
        alt="Galaksiya"
        className="flex justify-center"
      />
      <ul className={styles.blogs}>
        {jsonData.map((member, index) => (
          <li key={index}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={member._id}
              className="flex"
            >
              <figure>
                <img
                  width={250}
                  height={250}
                  src={(
                    "https://cdn.sanity.io/images/2swx5d2d/production/" +
                    member.mainImage.asset._ref.replace("image-", "")
                  ).replace("-img", ".img")}
                  alt={"..."}
                />
              </figure>
              <div>
                <h4 className="text-xl mt-2">{member.title}</h4>
                {member.body.map((a, index) => (
                  <p key={index} className={"styles.role"}>
                    <span key={index}>{a.style}</span>
                  </p>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
