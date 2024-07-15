import { ArticlesType } from "@/app/types";
import React from "react";
import Image from "next/image";
import CommentForm from "@/app/components/comment-form";
import BackLink from "@/app/components/back-link";
import { siteConfig } from "@/config";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const PostPage = async ({ params: { slug } }: Props) => {
  // INFO: it's avoid an extra external request to get the article, because we already have it in the articles list and request were cached
  const response = await fetch(`${siteConfig.APP_URL}api/articles/`);

  const articles: ArticlesType = await response.json();
  if (!articles?.response?.results) {
    return <p className="text-sm">Network error, please try again later.</p>;
  }

  const joinedSlug = slug.join("/");

  const currentArticle = articles.response.results.find((el) => {
    return el.id === joinedSlug;
  });

  if (!joinedSlug || !currentArticle) {
    return <p className="text-sm">An error occured, please try again later.</p>;
  }

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

export default PostPage;
