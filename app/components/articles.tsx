import React from "react";
import { siteConfig } from "../../config";
import Article from "./article";
import { ArticlesType } from "../types";

const Articles = async () => {
  try {
    // INFO: This path is hardcoded to the local server, you can change it to your own server.
    const response = await fetch(`${siteConfig.APP_URL}api/articles/`);

    if (!response.ok) {
      console.error(`Server error: ${response.status}`);
      return <p className="text-sm">Server error, please try again later.</p>;
    }

    const articles: ArticlesType = await response.json();
    if (!articles?.response?.results) {
      return <p className="text-sm">No articles found.</p>;
    }

    return (
      <div>
        {articles.response.results.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Network error:", error);
    return <p className="text-sm">Network error, please try again later.</p>;
  }
};

export default Articles;
