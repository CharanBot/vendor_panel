"use client"
import ProductCard from "@/components/productcard";
import {useQuery} from "@tanstack/react-query"
import {getProductBrandId} from  "@/components/actions/getProductBrandid"
import Loading from "@/app/menu/loading";
import { Button } from "../ui/button";
import Link from "next/link";
export default function Menu() {
  
  const {data: value,error,isLoading} = useQuery({
    queryKey:["menu"],
    queryFn: ()=>{
      return getProductBrandId()

    },
    staleTime:2000,
  })
  console.log("usequery",value)
  if(isLoading){
    return <Loading></Loading>
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if(value){
  if(value?.length==0){
    return <div className="flex justify-center   items-center h-screen lg:text-2xl font-bold text-center">
      You currently have no products 😔
      <Link href={"/menu/addProduct"}>
          <Button className="fixed right-5 bottom-5" size={"lg"}>Add Product</Button>
          </Link>
    </div>
  }
  else{
    return (
        <div className="flex justify-center items-center  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-screen ">
            { value.map((product: any) => (
                <ProductCard key={product.id} imgurl={product.imgurl} name={product.name} price={product.price} description={product.description} stock={product.stock} id={product.id} />
              ))}
          </div>
          <Link href={"/menu/addProduct"}>
          <Button className="fixed right-5 bottom-5" size={"lg"}>Add Product</Button>
          </Link>
        </div>
      
    );
  }
}
}