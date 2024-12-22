import {FC} from 'react';
import Pages from "../../components/layout/Pages";

const Login: FC<{}> = ({}) => {
    return (
        <Pages title={"Login"}>
            <h1>Coucou, je suis dans Login</h1>
        </Pages>
    );
};

export default Login;
