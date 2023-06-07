import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(
    request: NextRequest
) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const { serverId } = body;

        if (!currentUser?.name || !currentUser?.id) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        if (!serverId) {
            return new NextResponse('Missing credentials', { status: 400 });
        }

        const server = await db.server.update({
            where: {
                id: serverId
            },
            data: {
                users: {
                    connect: {
                        id: currentUser.id
                    }
                }
            },
            include: {
                users: true
            }


        })

        return NextResponse.json(server);
    } catch (error: any) {
        console.log('CREATE SERVER ERROR:', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}