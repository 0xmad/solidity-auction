export interface NewAuction {
  good: {
    name: string;
    description: string;
    startPrice: number;
    category: Category;
  };
  auctionType: Type;
  startDate: number;
  endDate: number;
}

export enum Category {
  SERVICES,
  ART,
}

export enum Type {
  CLASSIC,
  BLIND,
}
