import Articles from "./components/articles";
import { Suspense } from "react";
import ArticleSkeleton from "./components/article-skeleton";
import { siteConfig } from "@/config";

export default function Home() {
  console.log(siteConfig.APP_URL);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {siteConfig.APP_URL}
      <Suspense
        fallback={
          <>
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
          </>
        }
      >
        <Articles />
      </Suspense>
      {/* TODO: implement read more button */}
    </main>
  );
}
