
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="flex flex-row p-4 w-full bg-blue-400">
                <nav className='flex flex-row items-center justify-center text-center'>
                    <Link className='pl-20' to='/'>
                        <img className='rounded-full' src="/images/logo.png" width={100} />
                    </Link>
                    <ul className='flex flex-row absolute right-40 items-center justify-enter text-right font-semibold text-black text-lg'>
                        <li className="gap-6 flex flex-row">
                            <NavLink className={({ isActive }) => (isActive ? 'underline decoration-1' : 'inactive')} to={"/"}>Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'underline decoration-1' : 'inactive')} to={"/adicionar"}>Adicionar</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'underline decoration-1' : 'inactive')} to={"/detalhes"}>Detalhes</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
