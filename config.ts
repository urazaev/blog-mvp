export type SiteConfigs = typeof siteConfig;

interface Config {
  APP_URL: string;
  API_URL: string;
  API_TOKEN: string;
  cacheConfig?: {
    fetchApiCacheTime: number;
  };
}

export const siteConfig: Config = {
  APP_URL: process.env.APP_URL || "http://localhost:3000/",
  API_URL:
    "https://content.guardianapis.com/search?show-fields=webPublicationDate,webTitle,thumbnail,bodyText",
  // api token is not in the env file for simplicity
  API_TOKEN: "14f8254d-32ba-4ca5-9c43-2b24c0304695",
  cacheConfig: {
    fetchApiCacheTime: 60 * 30, // 30 min
  },
};
