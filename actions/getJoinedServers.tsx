import { db } from "@/lib/prisma";
import getCurrentUser from "./getCurrentUser";

const getJoinedServers = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
        return [];
    }

    try {
        const ownedServers = await db.server.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                ownerId: {
                    not: currentUser.id
                }
            },
        })
        return ownedServers;
    } catch (error: any) {
        return [];
    }
}

export default getJoinedServers;