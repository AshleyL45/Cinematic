import {FC} from 'react';
import Pages from "../../components/layout/Pages";

const MovieDetails: FC<{}> = ({}) => {
    return (
        <Pages title={"MovieDetails"}>
            <h1>Coucou, je suis dans MovieDetails</h1>
        </Pages>
    );
};

export default MovieDetails;
