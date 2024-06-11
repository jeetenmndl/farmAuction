import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import getAllProducts from "@/lib/actions/getALlProducts";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const data = await getAllProducts();
    console.log(data)
  return (
   <main className="my-8 px-2 md:px-6 lg:px-12 xl:px-28">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
        {
        data && data.payload.map((item)=>{
            return(
                <Link href={"/room/"+item.id} key={item.id}>
    <div className='cursor-pointer border-b-2 border-transparent hover:border-main duration-500'>

        <div className=" relative flex justify-center imageBox max-w-full md:max-w-80 h-72 rounded-lg overflow-hidden">
            <Image className='rounded-lg h-full min-w-fit' src={item.product_img} width={400} height={300} alt='room in Biratnagar'/>
        </div>

        <div className="descBox text-sm my-4">
          
            <h3 className='font-semibold text-gray-800 text-base overflow-hidden whitespace-nowrap text-ellipsis capitalize'>{item.product_name}</h3>
            <p className='text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis'>{item.product_description}</p>
            <p className='text-gray-500'>{item.product_category}</p>

            <div className="flex justify-between items-end">
              <p className='text-gray-800 font-medium mt-2'>Rs {item.product_price}</p>

                <Button variant="outline" size="icon"  className=" size-8 hover:bg-main hover:text-white" >
                  <ChevronRight size={20} />
                </Button>
                
            </div>

        </div>

    </div>
    </Link>
            )
        })
    }
      </section>


   </main>
  );
}
