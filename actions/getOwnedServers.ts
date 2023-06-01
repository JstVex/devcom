import { db } from "@/lib/prisma";
import getCurrentUser from "./getCurrentUser";

const getOwnedServers = async () => {
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
                    equals: currentUser.id
                }
            },
        })
        return ownedServers;
    } catch (error: any) {
        return [];
    }
}

export default getOwnedServers;