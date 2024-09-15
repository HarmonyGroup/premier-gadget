import Image from "next/image";
import Macbook from "@/assets/macbook.png";
import Gaming from "@/assets/console.png";
import Iphone from "@/assets/iPhone.png";
import Ipad from "@/assets/iPad.png";

// const PopularCategories = () => {
//   return (
//     <div className="px-4 py-7 md:px-10">
//       <h1 className="text-black text-2xl font-bold z-10">Popular Categories</h1>
//       <div className="grid grid-cols-5 gap-7 mt-8">
//         <div className="col-span-1 flex flex-col items-center gap-3">
//           <div className="bg-white h-64 w-full flex items-center justify-center rounded-xl p-0">
//             <Image src={Iphone} className='scale-125' alt='Laptops' />
//           </div>
//           <h1 className="text-lg font-semibold text-center mt-3">Phones</h1>
//           <p className='text-gray-500 -mt-3.5'>250 products</p>
//         </div>
//         <div className="col-span-1 flex flex-col items-center gap-3">
//           <div className="bg-white h-64 w-full flex items-center justify-center rounded-xl p-10">
//             <Image src={Macbook} alt='Laptops' />
//           </div>
//           <h1 className="text-lg font-semibold text-center mt-3">Laptops</h1>
//           <p className='text-gray-500 -mt-3.5'>250 products</p>
//         </div>
//         <div className="col-span-1 flex flex-col items-center gap-3">
//           <div className="bg-white h-64 w-full flex items-center justify-center rounded-xl p-16">
//             <Image src={Ipad} alt='Laptops' />
//           </div>
//           <h1 className="text-lg font-semibold text-center mt-3">Tablets</h1>
//           <p className='text-gray-500 -mt-3.5'>250 products</p>
//         </div>
//         <div className="col-span-1 flex flex-col items-center gap-3">
//           <div className="bg-white h-64 w-full flex items-center justify-center rounded-xl p-10">
//             <Image src={Macbook} alt='Laptops' />
//           </div>
//           <h1 className="text-lg font-semibold text-center mt-3">Headphones</h1>
//           <p className='text-gray-500 -mt-3.5'>250 products</p>
//         </div>
//         <div className="col-span-1 flex flex-col items-center gap-3">
//           <div className="bg-white h-64 w-full flex items-center justify-center rounded-xl p-20">
//             <Image src={Gaming} alt='Laptops' />
//           </div>
//           <h1 className="text-lg font-semibold text-center mt-3">Gaming</h1>
//           <p className='text-gray-500 -mt-3.5'>250 products</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularCategories;

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const PopularCategories = () => {
  const categories = [
    {
      title: "Phones",
      image: Iphone,
      height: 500,
      width: 500,
      url: "/",
    },
    {
      title: "Laptops",
      image: Macbook,
      height: 180,
      width: 180,
      url: "/",
    },
    {
      title: "Tablets",
      image: Ipad,
      height: 120,
      width: 120,
      url: "/",
    },
    {
      title: "Gaming",
      image: Macbook,
      height: 150,
      width: 150,
      url: "/",
    },
    {
      title: "Gaming",
      image: Gaming,
      height: 100,
      width: 100,
      url: "/",
    },
  ];

  return (
    <div className="mx-auto flex flex-col items-center justify-center px-4 py-7 md:px-10">
      <h1 className="text-black text-2xl font-bold z-10">Popular Categories</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-xs md:max-w-2xl lg:max-w-4xl mt-8"
      >
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Link href={category.url} className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center border-none shadow-none overflow-hidden">
                    <Image
                      src={category.image}
                      height={category.height}
                      width={category.width}
                      alt="Popular Categories"
                    />
                  </CardContent>
                </Card>
                <p className="text-[19px] font-semibold text-center mt-6">
                  {category.title}
                </p>
                <p className="text-gray-400 text-center">250 products</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PopularCategories;
