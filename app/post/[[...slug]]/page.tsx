import { ArticlesType } from "@/app/types";
import React from "react";
import { siteConfig } from "@/config";
import ArticleFull from "@/app/components/article-full";

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

  return <ArticleFull currentArticle={currentArticle} />;
};

export default PostPage;
