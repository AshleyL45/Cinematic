import {FC} from 'react';
import Pages from "../../components/layout/Pages";

const Home: FC<{}> = ({}) => {
    return (
        <Pages title={"Login"}>
            <h1>Coucou, je suis dans Home</h1>
        </Pages>
    );
};

export default Home;
