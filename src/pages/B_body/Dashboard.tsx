import React, {FC} from 'react';
import Pages from "../../components/layout/Pages";


const Dashboard: FC<{}> = ({}) => {
    return (
            <Pages title={"Dashboard"}>
                <h1>Coucou, je suis dans le Dashboard</h1>
            </Pages>
    );
};

export default Dashboard;
