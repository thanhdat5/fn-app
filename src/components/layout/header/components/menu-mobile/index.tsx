import { NavLink } from "react-router-dom";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

type Props = {
    onShowWallet?: () => void;
}

const MenuMobile = ({ onShowWallet }: Props) => {
    const { t } = useTranslation();
    return <Dropdown className="fn-menu-mobile">
        <Dropdown.Toggle id="dropdown-menu">
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="3" y="25" width="22" height="23" rx="3" transform="rotate(-90 3 25)" fill="#202327" />
                <rect x="6" y="7" width="17" height="3" rx="1.5" fill="currentColor" />
                <rect x="6" y="12" width="17" height="3" rx="1.5" fill="currentColor" />
                <rect x="6" y="17" width="17" height="3" rx="1.5" fill="currentColor" />
            </svg>
        </Dropdown.Toggle>

        <Dropdown.Menu align="end">
            <Dropdown.Item onClick={onShowWallet}>
                {t('Wallet')}
            </Dropdown.Item>
            <Dropdown.Item>
                <NavLink to="/affiliate" className={({ isActive }) => isActive ? "active" : ""}>{t('Affiliate')}</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
                {t('Setting')}
            </Dropdown.Item>
            <Dropdown.Item>
                {t('Language')}
            </Dropdown.Item>
            <Dropdown.Divider />
            <div className="logout">
                <button className="logout" type="button">
                    <span>Log out</span>
                </button>
            </div>
        </Dropdown.Menu>
    </Dropdown>
}
export default MenuMobile