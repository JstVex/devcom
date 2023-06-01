import clsx from 'clsx'
import { FC, ReactNode } from 'react'

interface BoxProps {
    children: ReactNode
    className?: string
}

const Box: FC<BoxProps> = ({ children, className }) => {
    return (
        <div className={clsx("flex-grow overflow-y-auto ml-6 mr-12 min-h-[94vh] shadow-xl bg-slate-800 sm:rounded-xl dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10", className)}>
            {children}
        </div>
    )
}

export default Box