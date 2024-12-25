import React, {FC} from 'react';
import {Outlet} from "react-router";
import Header from "../pages/A_header/Header";


const LayoutWithBar: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default LayoutWithBar;
