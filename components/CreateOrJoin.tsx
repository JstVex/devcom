'use client'

import { FC } from 'react'
import { Plus } from 'lucide-react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface CreateOrJoinProps {

}

const CreateOrJoin: FC<CreateOrJoinProps> = ({ }) => {
    const pathname = usePathname();
    return (
        <div>
            {pathname !== '/server' && pathname !== '/create-server' &&
                <Link href='/server' >
                    <div className='text-sm py-2 px-3 flex items-center gap-x-2 rounded-md border cursor-pointer mb-3 dark:border-white/10'>
                        <Plus />
                        Create or join a new server
                    </div>
                </Link>
            }
        </div>
    )
}

export default CreateOrJoin