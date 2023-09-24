import FAQModal from 'pages/faq/modal';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Menu = () => {
	const { t } = useTranslation();
	const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
	const [showModal, setShowModal] = useState<boolean>(false);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<>
			<ul className="fn-menu">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					{t('Home')}
				</NavLink>
				<NavLink
					to="/affiliate"
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					{t('Affiliate')}
				</NavLink>
				<NavLink
					to={`${windowSize > 1024 ? "/faq" : "/"}`}
					className={({ isActive }) => (isActive && windowSize > 1024 ? 'active' : '')}
					onClick={() => {
						if (windowSize <= 1024) {
							setShowModal(true);
						} else {
							return;
						}
					}}
				>
					{t('FAQ')}
				</NavLink>
			</ul>

			{showModal ? <FAQModal onDismiss={() => {
                setShowModal(false);
            }} /> : <></>}
		</>
	);
};
export default Menu;
