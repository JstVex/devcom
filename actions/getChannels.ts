import { db } from "@/lib/prisma";

const getChannels = async (serverId: string) => {
    try {
        const channels = await db.channel.findMany({
            where: {
                serverId: serverId
            }
        })

        return channels
    } catch (error) {
        return null;
    }
}

export default getChannels;