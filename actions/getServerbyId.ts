import { db } from '@/lib/prisma';
import getCurrentUser from './getCurrentUser';

const getServerById = async (serverId: string) => {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser?.email) {
            return null;
        }

        const server = await db.server.findUnique({
            where: {
                id: serverId
            },
            include: {
                users: true
            }
        })

        return server;

    } catch (error: any) {
        return null;
    }
}

export default getServerById;