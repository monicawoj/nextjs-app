import react from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styles from "../styles.scss";

const goalIds = ["1", "2", "3"];

const Home = ({ stars }) => (
  <>
    <div className={styles.home}>Monica's Netguru Goals</div>
    {goalIds.map(id => (
      <Link href={{ pathname: "/goal", query: { id } }}>
        <a>Goal {id}</a>
      </Link>
    ))}
    <div>Things left to learn: {stars}</div>
    <img src="/static/tatry_netguru.jpg" alt="tatry_netguru" />
  </>
);

Home.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Home;
