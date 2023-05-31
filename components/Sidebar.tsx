'use client'

import { FC } from 'react'
import Profile from './Profile'
import clsx from 'clsx'
import styles from '@/styles/Beam.module.css'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { usePathname } from 'next/navigation';

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = ({ }) => {
    const pathname = usePathname();
    return (
        <div className='w-60'>
            <Profile />
            <div className='p-3 min-h-[85vh] mt-3 shadow-xl bg-slate-800 sm:rounded-xl dark:bg-slate-900/90 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10'>
                {pathname !== '/' &&
                    <Link href='/' >
                        <div className='text-sm py-2 px-3 flex items-center gap-x-2 rounded-md border cursor-pointer mb-3 dark:border-white/10'>
                            <Plus />
                            Create or join a new server
                        </div>
                    </Link>
                }

                <div className=''>
                    Current servers
                    {/* all joined servers */}
                </div>
            </div>

        </div>

    )
}

export default Sidebar