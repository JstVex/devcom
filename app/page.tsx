'use client'

import Box from '@/components/ui/Box'
import { Github } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { FC, useState } from 'react'

interface signInProps {

}

const SignIn: FC<signInProps> = ({ }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signInWithGithub = async () => {
    setIsLoading(true)

    try {
      await signIn('github', {
        redirect: false
      })
        .then((callback) => {
          if (callback?.error) {
            console.log('error is', callback.error)
          }

          if (callback?.ok && !callback?.error) {
            console.log('success')
          }
        })
        .finally(() => setIsLoading(false));
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <Box>
      <div className='flex flex-col items-center text-center px-3'>
        <h3 className='mt-10 text-4xl text-zinc-900 dark:text-slate-200'>
          Devcom
        </h3>
        <p className='my-4 dark:text-slate-400'>
          For better learning flow and collaborating between developers
        </p>
        <p className='my-4 dark:text-slate-400'>
          Since devcom is based on github we recommend you to sign up with github to get full feature of it.
        </p>
        <button
          type="button"
          onClick={signInWithGithub}
          className="text-slate-900 w-48 flex justify-center rounded-md px-4 py-3 shadow-xl bg-slate-800 sm:rounded-xl dark:bg-slate-900/10 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 dark:text-slate-300"
        >
          <Github className="text-xl text-slate-900 dark:text-zinc-300" />
        </button>
      </div>

    </Box>
  )
}

export default SignIn;