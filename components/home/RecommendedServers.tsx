'use client'

import { Server } from '@prisma/client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface RecommendedServersProps {
    server: Server
}

const RecommendedServers: FC<RecommendedServersProps> = ({ server }) => {
    const router = useRouter();

    const joinServer = () => {
        axios.post('api/join-server', { serverId: server.id })
            .then((server) => {
                console.log('success server join', server)
                router.push(`/server/${server.data.id}`)

            })
            .catch((err) => console.log('server creation error', err))
    }
    return (
        <div className='text-slate-900 my-2 w-full rounded-md px-3 py-2 shadow-xl bg-slate-800 sm:rounded-xl dark:bg-slate-900/10 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 dark:text-slate-100'>
            <div className='flex flex-col gap-y-1'>
                <h3 className=' text-slate-800 dark:text-slate-100'>
                    {server.name}  <span className='text-sm text-slate-600 dark:text-slate-400'>- Owned by {server.owner}</span>
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-300'>
                    {server.description}
                </p>
                <div className='flex items-center justify-between text-sm text-slate-600 dark:text-slate-400'>
                    <div className='flex gap-x-5'>
                        <div >
                            Current: {server.userIds.length}
                        </div>
                        <div >
                            Maximum: {server.maxMembers}
                        </div>
                    </div>
                    {/* <Link href={`/server/${server.id}`}> */}
                    <button onClick={joinServer} className='text-slate-900 rounded-md px-3 py-2 shadow-xl bg-slate-800 sm:rounded-xl dark:bg-slate-900/10 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 dark:text-slate-100'>
                        {server.status === 'public' && 'Join'}
                        {server.status === 'private' && 'Request to Join'}
                    </button>
                    {/* </Link> */}


                </div>
            </div>
        </div>
    )
}

export default RecommendedServers