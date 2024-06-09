"use client"
import ProductCard from "@/components/productcard";
import {useQuery} from "@tanstack/react-query"
import {getProductBrandId} from  "@/components/actions/getProductBrandid"
import { useRecoilValue } from "recoil";
import { checkProductAtom } from "@/store/atoms/checkatom";
import Loading from "@/app/feedbacks/loading";
export default function Menu() {
  const check = useRecoilValue(checkProductAtom)
  const {data: value,error,isLoading} = useQuery({
    queryKey:["menu",check],
    queryFn: ()=>getProductBrandId(),
    staleTime:2000
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
    return <div className="flex justify-center  items-center h-screen text-2xl font-bold">
      You currently have no products 😔
    </div>
  }
  else{
    return (
      <div className="w-full">
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 min-h-screen w-10/12">
            { value.map((product: any) => (
                <ProductCard key={product.id} imgurl={product.imgurl} name={product.name} price={product.price} description={product.description} stock={product.stock} id={product.id} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}
}