import { Form, Modal } from 'react-bootstrap';
import './index.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

type Props = {
	onDismiss: () => void;
};

const LicenseModal = ({ onDismiss }: Props) => {
	const { t } = useTranslation();
	const [nickname, setNickName] = useState('');
	const [agree, setAgree] =useState(false);


	const handleNickname = (e: any) => {
		e.preventDefault();
		if(!nickname || nickname === "" || !agree) {
			return
		}else {
			onDismiss();
		}
	}

	return (
		<Modal
			className="fn-modal fn-license"
			size="lg"
			centered
			backdrop
			keyboard={false}
			show
			animation={true}
		>
			<Modal.Body>
				<img
					src="/images/icons/license-logo.svg"
					alt=""
					className="license-logo"
				/>

				<div className="license-form">
					<Form.Label htmlFor="nickname">
						{t('Nickname')} <span>*</span>
					</Form.Label>
					<Form.Control type="text" id="nickname" onChange={(e) => setNickName(e.target.value)}/>

					<Form.Check
						type="checkbox"
						onChange={(e) => setAgree(e.target.checked)}
						label={t('I agree to the collection of information in cookies, I agree with Privacy Policy and with Terms of Use. Lottery is not for people under 18 years old')}
					/>

					<div className="d-flex justify-content-start">
						<button type="button" className="buy" onClick={handleNickname} disabled={!nickname || !agree || nickname  === "" ? true : false}>
							<span>{t('Create')}</span>
						</button>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default LicenseModal;
