import Articles from "./components/articles";
import { Suspense } from "react";
import ArticleSkeleton from "./components/article-skeleton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
