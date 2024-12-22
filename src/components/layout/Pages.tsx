import Box from "@mui/material/Box";
import {Helmet} from "react-helmet-async";
import React, {FC} from 'react';


const Pages: FC<{ children: any, title: string }> = ({children, title}) => {

    return (
        <>
            <Box>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                {children}
            </Box>
        </>
    );
}

export default Pages;


