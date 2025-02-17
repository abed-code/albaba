import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Restaurant } from "@/types/resturant";
import { ImagesModal } from "./ImagesModal";

interface Props {
  resturant: Restaurant;
}

const ResturantCard = ({ resturant }: Props) => {
  return (
    <Card className="overflow-hidden bg-white">
      {resturant.imageUrl && (
        <Image
          src={resturant.imageUrl}
          alt="Restaurant Cover"
          className="w-full h-96 object-fill"
          width={200}
          height={100}
        />
      )}
      <CardHeader>
        <CardTitle>{resturant.name}</CardTitle>
        <CardDescription>{resturant.address.street}</CardDescription>
      </CardHeader>
      <CardContent className="w-full"></CardContent>
      <CardFooter>
        {resturant.menus && (
          <ImagesModal images={resturant.menus.map((item) => item.imageUrl)} />
        )}
      </CardFooter>
    </Card>
  );
};

export default ResturantCard;
