import React from "react";
import { siteConfig } from "../../config";
import Article from "./article";
import { ArticlesType } from "../types";

const Articles = async () => {
  // INFO: This path is hardcoded to the local server, you can change it to your own server.
  const response = await fetch(`http://localhost:3000/api/articles/`);
  const articles: ArticlesType = await response.json();
  if (!articles?.response?.results) {
    return <p className="text-sm">Network error, please try again later.</p>;
  }

  return (
    <div>
      {articles.response.results.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
