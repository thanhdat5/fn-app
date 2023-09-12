import FnButton from 'components/shared/button';
import { useState } from 'react';
import { Form, InputGroup, Modal } from 'react-bootstrap';
import './index.scss';

type Props = {
	onDismiss: () => void;
};

const SignInModal = ({ onDismiss }: Props) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	
	return (
		<Modal
			className="fn-modal"
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
				<Form.Group className="mb-3" controlId="email">
					<Form.Control type="email" placeholder="Email" />
				</Form.Group>
				<InputGroup className="mb-1">
					<Form.Control
						type={`${showPassword ? 'text' : 'password'}`}
						className="no-bl"
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

				<InputGroup className="mb-3">
					<Form.Control
						type="text"
						className="no-bl"
						placeholder="Verify Code"
					/>
					<InputGroup.Text id="basic-addon1" className="pwd-icon capcha">
						<div className="code-capcha"></div>
					</InputGroup.Text>
				</InputGroup>

				<div className="text-center mt-3">
					<FnButton
						text="Sign In"
						width="169px"
						height="35px"
						borderRadius="5px"
						onClick={() => {}}
						variant="primary"
					/>
				</div>

				<div className="sign-in-subtext">
					Already have an account?{' '}
					<span className="subtext-highlight">Sign in</span>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default SignInModal;
