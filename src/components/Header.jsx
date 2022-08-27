import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <header className="py-6 mb-12 border-b">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/">
                        <img src="../assets/img/logo.svg" alt="logo" />
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link className="hover:text-blue-900 transition" to="/">
                            Log in
                        </Link>
                        <Link className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-lg transition" to="/">
                            Sign up
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;