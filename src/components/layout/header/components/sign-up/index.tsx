import "./index.scss";

type Props = {
    onClick: () => void;
}

const SignUp = ({onClick}: Props) => {

    return <button type="button" className="fn-signup" onClick={onClick}>
        <span>sign up</span>
    </button>
}
export default SignUp