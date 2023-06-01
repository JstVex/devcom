'use client'

import Image from 'next/image'
import { FC, useState } from 'react'
import { signOut } from 'next-auth/react';
import { Settings } from 'lucide-react'
import { useSession } from 'next-auth/react';

interface ProfileProps {

}

const Profile: FC<ProfileProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { data: session } = useSession();

    // const signOut = async () => {
    //     setIsLoading(true)

    //     try {
    //         await signOut()
    //             .then((callback) => {
    //                 if (callback?.error) {
    //                     console.log('error is', callback.error)
    //                 }

    //                 if (callback?.ok && !callback?.error) {
    //                     console.log('success')
    //                 }
    //             })
    //             .finally(() => setIsLoading(false));
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div className='py-2 px-3 shadow-xl h-auto flex items-center bg-slate-800 sm:rounded-xl dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 gap-x-3'>
            <Image
                src={session?.user.image || '/placeholder.jpeg'}
                alt='profile'
                width={35}
                height={35}
                className='w-auto h-auto rounded-full'

            />
            <div >
                <div className='text-sm text-zinc-900 dark:text-zinc-50 '>
                    {session?.user?.name ?
                        session.user.name :
                        'Unknown'
                    }
                </div>
                <div className='text-xs text-zinc-400 dark:text-slate-300'>
                    {session?.user?.email ?
                        session.user.email :
                        '@gmail.com'
                    }
                </div>
            </div>
            <Settings onClick={() => signOut()} className='ml-auto text-zinc-900 dark:text-slate-300' />
        </div>
    )
}

export default Profile