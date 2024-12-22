import {FC} from 'react';
import Pages from "../../components/layout/Pages";


const Error: FC<{}> = ({}) => {
    return (
        <Pages title={"Error"}>
            <h1>Coucou, je suis dans Error</h1>
        </Pages>
    );
};

export default Error;
