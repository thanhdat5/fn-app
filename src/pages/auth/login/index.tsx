import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const { t } = useTranslation();

    return <>
        <h1>{t('Login page')}</h1>
        <Link to="/">Home</Link>|<Link to="/login">Login</Link>|<Link to="/register">Register</Link>
    </>
}
export default LoginPage