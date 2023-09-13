import "./index.scss";

type Props = {
    onClick?: () => void;
}
const Language = ({ onClick }: Props) => {

    return <button type="button" className="fn-language" onClick={onClick}>
        <span>ENG</span>
        <img src="/images/icons/language.svg" alt="lang" />
    </button>
}
export default Language