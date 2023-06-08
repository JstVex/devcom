import { db } from "@/lib/prisma";

const getChannelById = async (channelId: string) => {
    try {
        const channel = await db.channel.findUnique({
            where: {
                id: channelId
            }
        })

        return channel;
    } catch (error) {
        return null;
    }
}

export default getChannelById;