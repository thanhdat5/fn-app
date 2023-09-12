import "./index.scss";

type Props = {
    onClick: () => void;
}
const SignIn = ({ onClick }: Props) => {

    return <button type="button" className="fn-signin" onClick={onClick}>
        <span>sign in</span>
    </button>
}
export default SignIn