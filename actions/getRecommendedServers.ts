import { db } from "@/lib/prisma";
import getCurrentUser from "./getCurrentUser";

const getRecommendedServers = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
        return [];
    }

    try {
        const recommendedServers = await db.server.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                ownerId: {
                    not: currentUser.id
                }
            },
        })
        return recommendedServers;
    } catch (error: any) {
        return [];
    }
}

export default getRecommendedServers;