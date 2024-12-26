import {FC} from 'react';
import Pages from "../../components/layout/Pages";
import LoginForm from "../../components/auth/LoginForm";

const Home: FC<{}> = ({}) => {
    return (
        <Pages title={"Login"}>
            <LoginForm/>
        </Pages>
    );
};

export default Home;
