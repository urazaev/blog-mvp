import React from "react";
import Image from "next/image";
import { ArticleType } from "../types";
import BackLink from "./back-link";

const Article = ({ article }: { article: ArticleType }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 max-w-4xl mx-auto flex">
      <div className="w-1/2">
        {article.fields.thumbnail && (
          <Image
            src={article.fields.thumbnail}
            alt={article.webTitle}
            width={500}
            height={280}
            className="rounded-l-lg"
          />
        )}
      </div>
      <div className="w-1/2 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{article.webTitle}</h2>
          <p className="text-gray-700 mb-4">
            {article.fields.bodyText?.substring(0, 150)}...
          </p>
        </div>
        <a
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start"
          href={"/post/" + article.id}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Article;
