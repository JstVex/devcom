import getServerById from '@/actions/getServerbyId'
import InputBar from '@/components/server/InputBar'
import ServerBody from '@/components/server/ServerBody'
import ServerHeader from '@/components/server/ServerHeader'
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
        <Box className='flex flex-col p-4'>
            <ServerHeader />
            <ServerBody />
            <InputBar />
        </Box>
    )
}

export default ServerId