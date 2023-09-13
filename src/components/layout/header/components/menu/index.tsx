import { NavLink } from "react-router-dom";
import "./index.scss";
import { useTranslation } from "react-i18next";


const Menu = () => {
    const {t} = useTranslation();
    return <ul className="fn-menu">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>{t('Home')}</NavLink>
        {/* <NavLink to="/wallet" className={({ isActive }) => isActive ? "active" : ""} onClick={onShowWallet}>{t('Wallet')}</NavLink> */}
        <NavLink to="/affiliate" className={({ isActive }) => isActive ? "active" : ""}>{t('Affiliate')}</NavLink>
    </ul>
}
export default Menu