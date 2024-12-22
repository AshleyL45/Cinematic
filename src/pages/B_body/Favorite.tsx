import {FC} from 'react';
import Pages from "../../components/layout/Pages";

const Favorite: FC<{}> = ({}) => {
    return (
        <Pages title={"Favorite"}>
            <h1>Coucou, je suis dans Favorite</h1>
        </Pages>
    );
};

export default Favorite;

