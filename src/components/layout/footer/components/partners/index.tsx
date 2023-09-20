import { useTranslation } from "react-i18next";
import "./index.scss";

const Partners = () => {
    const { t } = useTranslation();
    return <div className="fn-partners">
        <div className="fn-partners-title">{t('Partner')}</div>
        <div className="fn-partners-list">
            {/* <a href="https://www.baka.casino/">
                <img src="/images/partners/bakac.png" alt="BAKAC" />
                <span>BAKAC</span>
            </a> */}
        </div>
    </div>
}
export default Partners