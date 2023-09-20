import { useTranslation } from "react-i18next";
import "./index.scss";

const Networks = () => {
    const { t } = useTranslation();
    return <div className="fn-networks">
        <div className="fn-networks-title">{t('Accept Networks')}</div>
        <div className="fn-networks-list">
            <a href="https://google.com" title="USDT">
                <img src="/images/tokens/usdt.svg" alt=""/>
            </a>
            <a href="https://google.com" title="BTC">
                <img src="/images/tokens/btc.svg" alt=""/>
            </a>
            <a href="https://google.com" title="BNB">
                <img src="/images/tokens/bnb.svg" alt=""/>
            </a>
            <a href="https://google.com" title="ETH">
                <img src="/images/tokens/eth.svg" alt=""/>
            </a>
            <a href="https://google.com" title="DOGE">
                <img src="/images/tokens/doge.svg" alt=""/>
            </a>
            <a href="https://google.com" title="SHIB">
                <img src="/images/tokens/shib.svg" alt=""/>
            </a>
            {/* <a href="https://google.com" title="BAKAC">
                <img src="/images/tokens/bakac.svg" alt=""/>
            </a> */}
        </div>
    </div>
}
export default Networks