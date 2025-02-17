import { Cities, Categories, Restaurant } from "@/types/resturant";

const createImages = (name: string, count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index.toString(),
    imageUrl: `/images/${name}/menu_${index + 1}.png`,
  }));
};

export const resturants: Restaurant[] = [
  {
    id: "1",
    name: "Slice",
    address: {
      street: Cities.BeitHanina,
      city: Cities.Jerusalem,
      country: "IL",
    },
    imageUrl: "/images/slice/cover.png",
    categories: [Categories.Shawarma],
    menus: createImages("slice", 7),
  },
  {
    id: "2",
    name: "Shawarma Stop",
    address: {
      street: Cities.BeitHanina,
      city: Cities.Jerusalem,
      country: "IL",
    },
    imageUrl: "/images/shawarma_stop/cover.png",
    categories: [Categories.Shawarma],
    menus: createImages("shawarma_stop", 8),
  },
  {
    id: "3",
    name: "بروست ابو شلبك",
    address: {
      street: Cities.BeitHanina,
      city: Cities.Jerusalem,
      country: "IL",
    },
    imageUrl: "/images/brost_abu_shalbk/menu_1.png",
    categories: [Categories.Shawarma],
    menus: createImages("brost_abu_shalbk", 2),
  },
];
