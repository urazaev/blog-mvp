import { ArticlesType } from "@/app/types";
import { siteConfig } from "@/config";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    `${siteConfig.API_URL}&api-key=${siteConfig.API_TOKEN}`,
    {
      next: { revalidate: siteConfig.cacheConfig?.fetchApiCacheTime },
    }
  );
  const articles: ArticlesType = await response.json();

  return NextResponse.json(articles);
}
