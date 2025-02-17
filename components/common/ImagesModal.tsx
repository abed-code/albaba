import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  images: string[];
}

export function ImagesModal({ images }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>القائمة</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[900px]">
        <DialogHeader>
          <DialogTitle>القائمة</DialogTitle>
        </DialogHeader>

        <div className="w-full px-16">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    key={image}
                    src={image}
                    alt="Image"
                    className="w-full"
                    width={500}
                    height={150}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
