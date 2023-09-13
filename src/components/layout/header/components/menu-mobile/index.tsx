import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

type Props = {
    onShowWallet?: () => void;
    onShowAffiliate?: () => void;
    onShowSetting?: () => void;
    onShowLanguage?: () => void;
    onLogout?: () => void;
}

const MenuMobile = ({ onShowWallet, onShowAffiliate, onShowSetting, onShowLanguage, onLogout }: Props) => {
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
            {/* <Dropdown.Item onClick={onShowWallet}>
                {t('Wallet')}
            </Dropdown.Item> */}
            <Dropdown.Item onClick={onShowAffiliate}>
                {t('Referral')}
            </Dropdown.Item>
            {/* <Dropdown.Item onClick={onShowSetting}>
                {t('Setting')}
            </Dropdown.Item> */}
            <Dropdown.Item onClick={onShowLanguage}>
                {t('Language')}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => {}}>
                {t('FAQ')}
            </Dropdown.Item>
            <Dropdown.Divider />
            {/* <div className="logout">
                <button className="logout" type="button" onClick={onLogout}>
                    <span>Log out</span>
                </button>
            </div> */}
        </Dropdown.Menu>
    </Dropdown>
}
export default MenuMobile