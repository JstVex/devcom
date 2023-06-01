import Link from 'next/link'
import { FC } from 'react'

interface CreateServerProps {

}

const CreateServer: FC<CreateServerProps> = ({ }) => {
    return (
        <Link href='/create-server'>
            <button className='text-slate-900 bg-slate-800 px-3 py-2 rounded-xl dark:text-slate-300 dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 gap-x-3'>
                Create a server
            </button>
        </Link>

    )
}

export default CreateServer