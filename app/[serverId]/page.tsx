import getServerById from '@/actions/getServerbyId'
import ServerSidebar from '@/components/server/ServerSidebar'
import Box from '@/components/ui/Box'
import { FC } from 'react'

interface ServerIdParams {
    serverId: string
}

const ServerId = async ({ params }: { params: ServerIdParams }) => {
    const server = await getServerById(params.serverId);

    if (!server) {
        return (
            <Box>

            </Box>
        )
    }


    return (
        <div className='fixed flex w-screen'>

            <ServerSidebar server={server} />
            <Box>
                {server.name}
            </Box>
        </div>

    )
}

export default ServerId