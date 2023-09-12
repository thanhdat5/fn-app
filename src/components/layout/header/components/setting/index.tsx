import "./index.scss";

type Props = {
    onClick: () => void;
}

const Setting = ({ onClick }: Props) => {

    return <button type="button" className="fn-setting" onClick={onClick}>
        <img src="/images/icons/setting.svg" alt="setting" />
    </button>
}
export default Setting