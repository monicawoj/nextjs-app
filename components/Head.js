import react from "react";
import NextHead from "next/head";

const Head = ({ title, meta }) => {
  const { name, content } = meta;
  return (
    <NextHead>
      <title>{title}</title>
      <meta name={name} content={content} />
    </NextHead>
  );
};

export default Head;
