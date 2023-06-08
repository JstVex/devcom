'use client'

import Box from '@/components/ui/Box'
import axios from 'axios'
import { FC, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface createServerProps {

}

const CreateServer: FC<createServerProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            description: '',
            maxMembers: '',
            status: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('api/create-server', data)
            .then((server) => {
                setValue('name', '', { shouldValidate: true })
                setValue('description', '', { shouldValidate: true })
                setValue('maxMembers', '', { shouldValidate: true })
                setValue('status', '', { shouldValidate: true })

                console.log('success server creation', server)
                router.push(`/server/${server.data.id}`)
            })
            .catch((err) => console.log('server creation error', err))
            .finally(() => setIsLoading(true))
    }

    return (
        <Box>
            <div className=' p-5'>
                <h3 className='text-2xl text-slate-900 dark:text-slate-200'>
                    Create your desired server
                </h3>
                <form className='mt-5 space-y-3' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-y-1  '>
                        <label htmlFor="name">
                            Server Name
                        </label>
                        <input id='name' type="text" {...register("name", { required: true })} className='text-slate-900 w-[50%] bg-slate-800 px-3 py-2 rounded-xl dark:text-slate-300 dark:bg-transparent  dark:ring-1 dark:ring-inset dark:ring-slate-500/60 gap-x-3 focus:outline-none' />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <label htmlFor="description">
                            Brief description for your server
                        </label>
                        <input id='description' type="text" {...register("description", { required: true })} className='text-slate-900 bg-slate-800 px-3 py-2 rounded-xl dark:text-slate-300 dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 gap-x-3 focus:outline-none' />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <label htmlFor="maxmembers">
                            Maximum members for your server
                        </label>
                        <input id='maxmembers' type="number" {...register("maxMembers", { required: true, valueAsNumber: true })} className='text-slate-900 bg-slate-800 px-3 py-2 rounded-xl dark:text-slate-300 dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 gap-x-3 focus:outline-none' />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <label htmlFor="status">
                            Status of your server
                        </label>
                        <input id='status' type="text" {...register("status", { required: true })} className='text-slate-900 bg-slate-800 px-3 py-2 rounded-xl dark:text-slate-300 dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 gap-x-3 focus:outline-none' />
                    </div>
                    <button type='submit' className='text-slate-900 bg-slate-800 px-3 py-2 rounded-xl dark:text-slate-100 dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 gap-x-3 focus:outline-none'>
                        Create
                    </button>

                </form>
            </div>
        </Box>
    )
}

export default CreateServer