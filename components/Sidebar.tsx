import { FC } from 'react'
import Profile from './Profile'
import clsx from 'clsx'
import styles from '@/styles/Beam.module.css'
import { usePathname } from 'next/navigation';
import OwnedServers from './OwnedServers'
import JoinedServers from './JoinedServers'
import getOwnedServers from '@/actions/getOwnedServers'
import getJoinedServers from '@/actions/getJoinedServers'
import CreateOrJoin from './CreateOrJoin'

// interface SidebarProps {

// }

const Sidebar = async ({ }) => {
    // const pathname = usePathname();
    const ownedServers = await getOwnedServers();
    const joinedServers = await getJoinedServers();

    return (
        <>
            {/* {pathname !== '/signin' && */}
            <div className='w-72'>
                <Profile />
                <div className='p-3 overflow-y-auto min-h-[84vh] max-h-[84vh] mt-3 shadow-xl bg-slate-800 sm:rounded-xl dark:bg-slate-900/90 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10'>
                    <CreateOrJoin />
                    <div className=''>
                        <h3>
                            Your servers
                        </h3>
                        {ownedServers.map((ownedServer) => {
                            return <OwnedServers key={ownedServer.id} server={ownedServer} />
                        })}

                    </div>

                    <div className=''>
                        <h3>
                            Joined servers
                        </h3>
                        {joinedServers.map((joinedServer) => {
                            return <JoinedServers key={joinedServer.id} server={joinedServer} />
                        })}
                    </div>
                </div>

            </div>
            {/* } */}

        </>

    )
}

export default Sidebar