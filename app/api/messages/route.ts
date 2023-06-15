import getCurrentUser from "@/actions/getCurrentUser";
import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    request: NextRequest
) {
    try {
        console.log('hi')
        // const currentUser = await getCurrentUser();
        // const body = await request.json();
        // const { message, channelId } = body;

        // if (!currentUser?.id || !currentUser?.email) {
        //     return new NextResponse('Unauthorized', { status: 401 });
        // }

        // const newMessage = await db.message.create({
        //     data: {
        //         body: message,
        //         channel: {
        //             connect: {
        //                 id: channelId
        //             }
        //         },
        //         sender: {
        //             connect: {
        //                 id: currentUser.id
        //             }
        //         }
        //     },
        //     include: {
        //         sender: true
        //     }
        // })

        // return NextResponse.json(newMessage);
    } catch (error) {
        return new NextResponse('INTERNAL ERROR', { status: 500 });
    }

}