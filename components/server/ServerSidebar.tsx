import { FC } from 'react'
import Profile from '../Profile'
import { Server } from '@prisma/client'

interface ServerSidebarProps {
    server: Server
}

const ServerSidebar: FC<ServerSidebarProps> = ({ server }) => {
    return (
        <>
            {/* {pathname !== '/signin' && */}
            <div className='w-72'>
                <Profile />
                <div className='p-3 overflow-y-auto min-h-[84vh] max-h-[84vh] mt-3 shadow-xl bg-slate-800 sm:rounded-xl dark:bg-slate-900/90 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10'>
                    <h3>
                        {server.name}
                    </h3>
                </div>

            </div>
            {/* } */}

        </>
    )
}

export default ServerSidebar