import React from "react";
import HouseList from "../components/HouseList";
import Search from "./Search";

const Home = () => {

    return (
        <>
            <div className="min-h-[1800px]">
                <Search />
                <HouseList />
            </div>

        </>
    );
};

export default Home;