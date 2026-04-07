import { Link } from "react-router-dom";
import {
    GithubLogoIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={"http://localhost:5173/vite.svg"}
                                alt="Lorem"
                                className="w-16 h-16 sm:w-20 sm:h-20"
                            />
                            <div>
                                <h1 className="font-extrabold text-2xl sm:text-3xl text-white">
                                    LOREM
                                </h1>
                                <p className="text-xs sm:text-sm text-gray-400 font-medium">
                                    Lorem ipsum
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 text-center sm:text-left mb-4 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full transition-all duration-200 hover:scale-110"
                            >
                                <InstagramLogoIcon className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full transition-all duration-200 hover:scale-110"
                            >
                                <GithubLogoIcon className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full transition-all duration-200 hover:scale-110"
                            >
                                <LinkedinLogoIcon className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-bold text-base sm:text-lg mb-4 text-white">
                            Lorem
                        </h3>
                        <nav className="flex flex-col gap-2.5 text-center sm:text-left">
                            <Link
                                to="/"
                                className="text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-200"
                            >
                                Lorem
                            </Link>
                            <Link
                                to="/produtos"
                                className="text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-200"
                            >
                                Ipsum
                            </Link>
                            <Link
                                to="/categorias"
                                className="text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-200"
                            >
                                Dolor
                            </Link>
                            <Link
                                to="/sobre"
                                className="text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-200"
                            >
                                Sit amet
                            </Link>
                        </nav>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-bold text-base sm:text-lg mb-4 text-white">
                            Lorem
                        </h3>
                        <div className="flex flex-col gap-3 text-center sm:text-left">
                            <a
                                href="#"
                                className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                            >
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>lorem@ipsum.com</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                            >
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>(00) 0000-0000</span>
                            </a>
                            <p className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-gray-400">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>Lorem ipsum</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-bold text-base sm:text-lg mb-4 text-white">
                            Lorem
                        </h3>
                        <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-all duration-200">
                            <img
                                src={"http://localhost:5173/vite.svg"}
                                alt="Lorem"
                                className="h-10 sm:h-12 w-auto object-contain"
                            />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 mt-3 text-center sm:text-left">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>

                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
                        <p className="text-center sm:text-left">
                            &copy; {new Date().getFullYear()} Lorem ipsum dolor sit amet.
                        </p>
                        <div className="flex gap-4 sm:gap-6">
                            <Link
                                to="/privacidade"
                                className="hover:text-white transition-colors"
                            >
                                Lorem
                            </Link>
                            <Link to="/termos" className="hover:text-white transition-colors">
                                Ipsum
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};