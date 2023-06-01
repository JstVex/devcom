import { FC } from 'react'

interface SearchBarProps {

}

const SearchBar: FC<SearchBarProps> = ({ }) => {
    return (
        <form className='flex-grow'>
            <label htmlFor="search" className='sr-only'>Search</label>
            <input type="text" id='search' className='text-slate-900 bg-slate-800 w-full px-3 py-2 rounded-xl dark:text-slate-300 dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 gap-x-3 focus:outline-none' placeholder='Search servers' />
        </form>
    )
}

export default SearchBar