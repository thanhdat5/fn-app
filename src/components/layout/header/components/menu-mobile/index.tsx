import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './index.scss';
import { Link } from 'react-router-dom';

type Props = {
	onShowAffiliate?: () => void;
	onShowLanguage?: () => void;
	onShowFAQ?: () => void;
};

const MenuMobile = ({ onShowAffiliate, onShowLanguage, onShowFAQ }: Props) => {
	const { t } = useTranslation();
	return (
		<Dropdown className="fn-menu-mobile">
			<Dropdown.Toggle id="dropdown-menu">
				<svg
					width="29"
					height="28"
					viewBox="0 0 29 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						opacity="0.5"
						x="3"
						y="25"
						width="22"
						height="23"
						rx="3"
						transform="rotate(-90 3 25)"
						fill="#202327"
					/>
					<rect
						x="6"
						y="7"
						width="17"
						height="3"
						rx="1.5"
						fill="currentColor"
					/>
					<rect
						x="6"
						y="12"
						width="17"
						height="3"
						rx="1.5"
						fill="currentColor"
					/>
					<rect
						x="6"
						y="17"
						width="17"
						height="3"
						rx="1.5"
						fill="currentColor"
					/>
				</svg>
			</Dropdown.Toggle>

			<Dropdown.Menu align="end">
				<Dropdown.Item onClick={onShowAffiliate}>{t('Affiliate')}</Dropdown.Item>

				<Dropdown.Item onClick={onShowLanguage}>{t('Language')}</Dropdown.Item>
				<Dropdown.Item><Link to="/claim-reward">{t('Claim Reward')}</Link></Dropdown.Item>
				<Dropdown.Item onClick={onShowFAQ}>{t('FAQ')}</Dropdown.Item>
				<Dropdown.Divider />
			</Dropdown.Menu>
		</Dropdown>
	);
};
export default MenuMobile;
