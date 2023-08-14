import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-center bg-blue-400 w-full h-48">
                <Link to={'/'} className="w-3/12">
                    <img width={150} className="rounded-full" src="/images/logo.png" alt="Logo" />
                </Link>
                <div className="w-3/12">
                    <form class="w-full max-w-sm">
                        <div class="flex items-center border-b border-white py-2">
                            <input class="appearance-none rounded-lg border-none w-full text-gray-900 bg-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="exemplo@gmail.com" aria-label="Full name"/>
                                <button class="flex-shrink-0 bg-green-700 hover:bg-green-600 border-white  text-sm border text-white py-1 px-2 rounded" type="button">
                                    Receber NewsLetter
                                </button>
                        </div>
                    </form>
                </div>
                <div className="w-3/12 items-center justify-center flex flex-col gap-6 font-semibold">
                    <NavLink className={({ isActive }) => (isActive ? 'underline decoration-1' : 'inactive')} to={"/"}>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'underline decoration-1' : 'inactive')} to={"/adicionar"}>Adicionar</NavLink>
                </div>
            </div>
        </>
    );
}

export default Footer;
