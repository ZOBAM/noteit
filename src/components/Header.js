import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header>
            <h1 className='bg-gray-100 text-center p-3 w-full border-b-2 border-gray-300 relative'>
                <span className="font-bold text-4xl py-2 inline-grid">
                    NOTE
                </span>
                <span className='inline-block rounded-full p-2 bg-red-400 text-white relative -top-2'>
                    it
                </span>
            </h1>
            <div className='max-w-3xl bg-gray-300/60 m-auto flex justify-around p-2 text-xl'>
                <Link className='border-2 border-white px-4 py-2 rounded hover:bg-gray-50' to='/'>Home</Link>
                <Link className='border-2 border-white px-4 py-2 rounded hover:bg-gray-50' to='/about'>About</Link>
                <Link className='border-2 border-white px-4 py-2 rounded hover:bg-gray-50' to='/add-note'>Add +</Link>
            </div>
        </header>
    )
}