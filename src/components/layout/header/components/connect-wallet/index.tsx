import { useTranslation } from "react-i18next";
import "./index.scss";

type Props = {
    onClick: () => void;
    title?: string
}

const ConnectWallet = ({onClick, title = 'connect wallet'}: Props) => {
    const {t} = useTranslation();
    return <button type="button" className="fn-connect-wallet" onClick={onClick}>
        <span>{t(title)}</span>
    </button>
}
export default ConnectWallet