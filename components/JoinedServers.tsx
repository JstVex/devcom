import { FC } from 'react'
import { Server } from '@prisma/client'

interface JoinedServersProps {
    server: Server
}

const OwnedServers: FC<JoinedServersProps> = ({ server }) => {
    return (
        <div className='text-slate-900 w-full rounded-md px-4 py-3 shadow-xl bg-slate-800 sm:rounded-xl dark:bg-slate-900/10 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 dark:text-slate-100'>
            <div>
                <h4 className='text-sm'>
                    {server.name}
                </h4>
                <p className='text-xs font-light text-slate-500 dark:text-slate-400'>
                    {server.description}
                </p>
            </div>
        </div>
    )
}

export default OwnedServers;