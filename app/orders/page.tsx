"use client"
import { useRecoilValue,} from "recoil"
import Ordercard from "@/components/ordercard";
import { filteredList, } from "@/store/atoms/checkatom";
import { useSetRecoilState } from "recoil"
import { Button } from "@/components/ui/button"
import { categoryAtom } from "@/store/atoms/checkatom"
import { useSession } from "next-auth/react";
import {  useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Orders(){
  const { status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === "unauthenticated") {
          router.push('/api/auth/signin');
        }
      }, [status, router]);
    let orders = useRecoilValue(filteredList)
    console.log(orders)
    const setCategory = useSetRecoilState(categoryAtom)
    return <div className=" flex flex-col justify-start items-center w-full min-h-screen ">
      <div className="w-1/2 h-20 flex items-center justify-around">
    <Button onClick={()=>{
      setCategory("all")
    }}>All</Button>
    <Button onClick={()=>{
      setCategory("cooking")
    }}>Cooking</Button>
    <Button onClick={()=>{
      setCategory("ready")
    }}>Ready</Button>
    <Button onClick={()=>{
      setCategory("delivered")
    }}>Delivered</Button>
    </div>
     <div className="grid grid-cols-3 gap-5 ">
     {orders.map((order:any, index:number) => (
            <Ordercard 
              key={index} 
              orderstatus={order.orderStatus} 
              orderid={order.orderid} 
              price={order.totalamount} 
              orderproduct={order.orderproduct}
              
            />
          ))}
    </div>
    </div>
    }

