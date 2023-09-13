import FnButton from 'components/shared/button';
import { useState } from 'react';
import { Form, InputGroup, Modal } from 'react-bootstrap';
import './index.scss';

type Props = {
	onSignIn: () => void;
	onSignUp: () => void;
	onDismiss: () => void;
};

const SignInModal = ({onSignIn, onSignUp, onDismiss }: Props) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	return (
		<Modal
			className="fn-modal fn-sign-in"
			centered
			backdrop
			keyboard={false}
			show
			onHide={onDismiss}
		>
			<Modal.Header closeButton>
				<Modal.Title>Sign In</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Group controlId="email" className="group">
					<Form.Control type="email" placeholder="Email" />
				</Form.Group>
				<InputGroup>
					<Form.Control
						type={`${showPassword ? 'text' : 'password'}`}
						className="no-br"
						placeholder="Login Password"
					/>
					<InputGroup.Text
						id="basic-addon1"
						className="pwd-icon"
						onClick={() => setShowPassword(!showPassword)}
					>
						<img src="/images/icons/eye.svg" alt="" />
					</InputGroup.Text>
				</InputGroup>

				<h3 className="forgot-password">Forgot your password?</h3>

				<InputGroup>
					<Form.Control
						type="text"
						className="no-br"
						placeholder="Verify Code"
					/>
					<InputGroup.Text id="basic-addon1" className="pwd-icon capcha">
						<div className="code-capcha"></div>
					</InputGroup.Text>
				</InputGroup>

				<div className="text-center btn-wrapper">
					<FnButton
						text="Sign In"
						width="169px"
						height="35px"
						borderRadius="5px"
						onClick={onSignIn}
						variant="primary"
					/>
				</div>

				<div className="sign-in-subtext">
					New to Qgacha?
					<span onClick={onSignUp} className="subtext-highlight">Create account</span>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default SignInModal;
