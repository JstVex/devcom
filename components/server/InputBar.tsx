'use client'

import axios from 'axios';
import { FC } from 'react'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";


interface InputBarProps {
    channelId: any
}

const InputBar: FC<InputBarProps> = ({ channelId }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            message: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('/api/messages', {
            ...data,
            channelId
        })
            .then((message) => {
                setValue('message', '', { shouldValidate: true })
                console.log('message sent successfully', message)
            })
            .catch((error) => {
                console.log('error message', error)
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="message" className='sr-only'>Message</label>
                <input {...register("message", { required: true })} autoComplete='off' type="text" id='message' className='text-sm text-slate-900 bg-slate-800 w-full px-3 py-2 rounded-xl dark:text-slate-300 dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 gap-x-3 focus:outline-none dark:placeholder:text-slate-500' placeholder='Message' />
            </form>
        </div>
    )
}

export default InputBar