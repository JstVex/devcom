import getServerById from '@/actions/getServerbyId'
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
        <Box>
            {server.name}
        </Box>
    )
}

export default ServerId