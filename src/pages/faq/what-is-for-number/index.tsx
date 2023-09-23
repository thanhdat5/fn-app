import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const FirstAcc = () => {
	const { t } = useTranslation();
	return (
		<Accordion.Body>
			{t("Challenge Fate with Mind: The 'Four Numbers' Game")}
			<br />
			<br />
			{t(
				'Have you ever wondered if luck is on your side when buying lottery tickets? Try the “Four Numbers” game now - an exciting game that promises the chance of winning big.'
			)}
			<br />
			<br />
			{t(
				"This game's thrilling and anticipation-filled experiences make buying lottery tickets more exciting than ever. You can test your luck daily and feel the special thrill when your numbers match the winning combination."
			)}
		</Accordion.Body>
	);
};

export default FirstAcc;
