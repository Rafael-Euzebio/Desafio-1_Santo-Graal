import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full flex justify-center py-4 bg-black text-white">
            <section className="container flex justify-between text-lg mx-8">
                <Link to="/home" className="text-2xl font-bold">
                    Lorem Ipsum
                </Link>

                <ul className="flex gap-4">
                    <li>
                        <Link to="/lorem" className="hover:underline">
                            Lorem
                        </Link>
                    </li>

                    <li>
                        <Link to="/ipsum" className="hover:underline">
                            Ipsum
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
}
