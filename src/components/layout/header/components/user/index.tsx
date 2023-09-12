import "./index.scss";

type Props = {
    onClick: () => void;
}

const User = ({ onClick }: Props) => {

    return <button type="button" className="fn-user" onClick={onClick}>
        <img src="/images/icons/user.svg" alt="user" />
    </button>
}
export default User