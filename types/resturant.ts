export enum Cities {
  Jerusalem = "Jerusalem",
  BeitHanina = "بيت حنينا",
}

export enum Categories {
  Shawarma = "Shawarma",
}

export type Restaurant = {
  id: string;
  name: string;
  description?: string;
  address: {
    street: string;
    city: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  phone?: string;
  email?: string;
  website?: string;
  categories: Categories[];
  rating?: number;
  isOpen?: boolean;
  imageUrl?: string;
  openingHours?: {
    day: string;
    open: string;
    close: string;
  }[];
  menus?: MenuItem[];
};

export type MenuItem = {
  id: string;
  imageUrl: string;
};
