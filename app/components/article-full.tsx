import React from "react";
import BackLink from "./back-link";
import CommentForm from "./comment-form";
import { ArticleType } from "../types";
import Image from "next/image";

const ArticleFull = ({ currentArticle }: { currentArticle: ArticleType }) => {
  return (
    <article className="max-w-2xl mx-auto p-4">
      <BackLink />
      {currentArticle.fields.thumbnail && (
        <figure className="mb-4">
          <Image
            src={currentArticle.fields.thumbnail}
            alt={currentArticle.webTitle}
            width={1200}
            height={675}
            className="w-full h-auto rounded-lg"
          />
        </figure>
      )}
      <header>
        <h1 className="text-2xl font-bold mb-2">{currentArticle.webTitle}</h1>
        <p className="text-sm text-gray-500">
          {new Date(currentArticle.webPublicationDate).toLocaleDateString()}
        </p>
      </header>
      <section className="text-lg text-gray-700 mb-4">
        <p>{currentArticle.fields.bodyText}</p>
      </section>
      <BackLink />

      <footer className="mt-8">
        <CommentForm articleId={currentArticle.id} />
      </footer>
    </article>
  );
};

export default ArticleFull;
