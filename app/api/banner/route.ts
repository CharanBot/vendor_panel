import { auth } from '@/auth'
import prisma from '@/db'
import { NextRequest, NextResponse } from 'next/server'
export async function GET(){
    try {
        const data = await  auth()
        if(!data){
            return NextResponse.json({
                message:"not authorized"
            })
        }
        const responce = await prisma.banner.findMany({
            where:{
                active:true
            }
        })
        return NextResponse.json({
            status:200,
            data:responce
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            data:"something went wrong"
        })
    }
}
export async function POST(req:NextRequest){
    
    try {
        const data = await req.json()
        const responce = await prisma.banner.create({
            data:{
                active:data.active,
                imgurl:data.imgurl,
                targetScreen:data.targetscreen
            }
        })
        return NextResponse.json({
            data:responce
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            data:"something went wrong"
        })
    }
}
export async function PATCH(req:NextRequest) {
    try {
        const data = await req.json()
        const responce = await prisma.banner.update({
            where: {
                id: data.id
            },
            data: {
                active:data.active
            }
        })
        return NextResponse.json({
            data:responce
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            data:"something went wrong"
        })
    }  
}
export async function DELETE(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.banner.delete({
            where:{
                id:data.id
            }
        })
        return NextResponse.json({
            status:200,
            data:responce
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            data:"something went wrong"
        })
    }
}