import FnButton from 'components/shared/button';
import { useState } from 'react';
import { Form, InputGroup, Modal } from 'react-bootstrap';
import './index.scss';

type Props = {
	onDismiss: () => void;
};

const SignUpModal = ({ onDismiss }: Props) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showRePassword, setShowRePassword] = useState<boolean>(false);

	return (
		<Modal
			className="fn-modal fn-sign-up"
			centered
			backdrop
			keyboard={false}
			show
			onHide={onDismiss}
		>
			<Modal.Header closeButton>
				<Modal.Title>Sign Up</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Group  controlId="email" className='control-group'>
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
				<div className="risk-wrapper">
					<div className="risk risk-red"></div>
					<div className="risk risk-yellow"></div>
					<div className="risk risk-green"></div>
					<p className="risk-text">High Risk</p>
				</div>

				<InputGroup >
					<Form.Control
						type={`${showRePassword ? 'text' : 'password'}`}
						className="no-br"
						placeholder="Re-Enter Password"
					/>
					<InputGroup.Text
						id="basic-addon1"
						className="pwd-icon"
						onClick={() => setShowRePassword(!showRePassword)}
					>
						<img src="/images/icons/eye.svg" alt="" />
					</InputGroup.Text>
				</InputGroup>

				<InputGroup >
					<Form.Control
						type="text"
						className="no-br"
						placeholder="Verification Code"
					/>
					<InputGroup.Text id="basic-addon1">Resend(60s)</InputGroup.Text>
				</InputGroup>

				<Form.Group  controlId="code" className='control-group'>
					<Form.Label>Enter Referral/Promo Code</Form.Label>
					<Form.Control
						type="text"
						placeholder="referral/Promo Code (Optional)"
					/>
				</Form.Group>

				<Form.Check
					type="checkbox"
					label="I agree to the User Agreement & confirm I am at least 18 years old"
				/>

				<Form.Check
					type="checkbox"
					label="I agree to receive marketing promotions from Four Numbers"
				/>

				<div className="text-center btn-wrapper">
					<FnButton
						text="Sign Up"
						width="169px"
						height="35px"
						borderRadius="5px"
						onClick={() => {}}
						variant="primary"
					/>
				</div>

				<div className="sign-up-subtext">
					Already have an account?{' '}
					<span className="subtext-highlight">Sign up</span>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default SignUpModal;
