import { useTranslation } from "react-i18next";
import "./index.scss";

const Countdown = () => {
    const {t} = useTranslation();
    return <div className="fn-countdown">
        <label>{t('Next draw start in')}</label>
        <span>00H:00M:00S</span>
    </div>
}
export default Countdown