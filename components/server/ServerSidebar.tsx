import { FC } from 'react'
import Profile from '../Profile'
import { Server } from '@prisma/client'
import getChannels from '@/actions/getChannels'
import { Hash } from 'lucide-react'
import Link from 'next/link'

interface ServerSidebarProps {
    server: Server
}

const ServerSidebar = async ({ server }: any) => {
    console.log('server is', server.name)
    const channels = await getChannels(server.id);

    return (
        <>
            {/* {pathname !== '/signin' && */}
            <div className='w-72'>
                <Profile />
                <div className='py-3 overflow-y-auto min-h-[84vh] max-h-[84vh] mt-3 shadow-xl bg-slate-800 sm:rounded-xl dark:bg-slate-900/40 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10'>
                    <h3 className='px-3 pb-3 border-b dark:border-white/10'>
                        {server.name}
                    </h3>
                    <h4 className='text-sm p-3 dark:text-slate-500 font-semibold'>
                        Text Channels
                    </h4>
                    <ul className='px-3'>
                        {channels?.map((channel) => {
                            return (
                                <Link key={channel.id} href={`server/${server.id}/${channel.id}`}>
                                    <li className='text-base flex items-center gap-x-2 px-2 py-1.5 cursor-pointer dark:text-slate-500 dark:hover:text-slate-400 dark:hover:bg-slate-800/60'>
                                        <Hash size={18} />
                                        {channel.name}
                                    </li>
                                </Link>

                            )
                        })}
                    </ul>
                </div>

            </div>
            {/* } */}

        </>
    )
}

export default ServerSidebar