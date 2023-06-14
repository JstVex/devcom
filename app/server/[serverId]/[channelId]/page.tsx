import getChannelById from '@/actions/getChannelById'
import InputBar from '@/components/server/InputBar'
import ServerBody from '@/components/server/ServerBody'
import ServerHeader from '@/components/server/ServerHeader'
import Box from '@/components/ui/Box'
import { FC } from 'react'

interface ChannelParams {
    channelId: string
}

const Channel = async ({ params }: { params: ChannelParams }) => {
    const channel = await getChannelById(params.channelId);
    console.log('channel id is', params.channelId)

    if (!channel) {
        return (
            <Box>
                hi
            </Box>
        )
    }

    return (
        <Box className='flex flex-col p-4'>
            <ServerHeader channel={channel} />
            <ServerBody />
            <InputBar channelId={params.channelId} />
        </Box>
    )
}

export default Channel;