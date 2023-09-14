import "./index.scss";

type Props = {
    onClick: () => void;
    title?: string
}

const ConnectWallet = ({onClick, title = 'connect wallet'}: Props) => {

    return <button type="button" className="fn-connect-wallet" onClick={onClick}>
        <span>{title}</span>
    </button>
}
export default ConnectWallet