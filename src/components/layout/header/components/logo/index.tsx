import { Link } from "react-router-dom";
import "./index.scss";

const Logo = () => {

    return <Link className="fn-logo" to="/">
        <img src="/images/logo.png" alt="FourNumber" />
    </Link>
}
export default Logo