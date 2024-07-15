export interface ArticleType {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: {
    thumbnail?: string;
    bodyText?: string;
  };
  isHosted: boolean;
  pillarId?: string;
  pillarName?: string;
}

export interface ArticlesType {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: ArticleType[];
  };
}
