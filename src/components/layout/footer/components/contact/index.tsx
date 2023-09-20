import { Col, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import './index.scss';
import { useTranslation } from 'react-i18next';

const Contact = () => {
	const {t} = useTranslation();
	return (
		<div className="fn-contact">
			<Row className="gx-lg-5">
				<Col lg="5" className="pe-lg-5">
					<div className="contact-p">
						<p>
						{t('Together, we are changing lives.')}
						</p>
						<p>
						{t("It's happening in dramatic ways, never the same twice. And fundamentally, life is getting a little better. We exist to change lives and maximize profits. But we can't do that without you – with every play, you make life a little bit brighter – Four Number will turn that into reality.")}
						
						</p>
					</div>
				</Col>
				<Col lg="7">
					<h4 className="d-md-none d-flex form-title">Get in touch</h4>
					<Row>
						<Col md="5" xs="6">
							<div className="fn-contact-email">
								<label>Email</label>
								<a href="mailto:support@4number.com">support@4number.io</a>
							</div>
						</Col>
						<Col md="7" xs="6">
							<div className="fn-contact-form">
								<h4>{t('Get in touch')}</h4>
								<FormGroup className="form-group">
									<FormLabel>Email</FormLabel>
									<FormControl type="email" placeholder={t('Your Email')} />
								</FormGroup>
								<FormGroup className="form-group">
									<FormLabel>{t('Message')}</FormLabel>
									<FormControl as="textarea" placeholder={t('Your Message')} />
								</FormGroup>
								<FormGroup className="form-group">
									<button type="submit" className="fn-send">
										{t('Submit')}
									</button>
								</FormGroup>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};
export default Contact;
