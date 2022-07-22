import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header>
            <h1 className='bg-red-400 text-center p-3 w-full'>Note Taking App with React</h1>
            <div className='flex justify-around p-2 text-xl'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/add-note'>Add +</Link>
            </div>
        </header>
    )
}