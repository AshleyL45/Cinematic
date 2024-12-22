import {FC} from 'react';
import Pages from "../../components/layout/Pages";

const PeopleDetails: FC<{}> = ({}) => {
    return (
        <Pages title={"PeopleDetails"}>
            <h1>Coucou, je suis dans PeopleDetails</h1>
        </Pages>
    );
};

export default PeopleDetails;
