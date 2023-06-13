import { Channel } from '@prisma/client'
import { FC } from 'react'

interface ServerHeaderProps {
    channel: Channel
}

const ServerHeader: FC<ServerHeaderProps> = ({ channel }) => {
    return (
        <div>
            {channel.name}
        </div>
    )
}

export default ServerHeader