import { useTranslation } from 'react-i18next';
import './index.scss';

type Props = {
	title: string;
	image: string;
	imageHover: string;
	isSelected: boolean;
	onSelect: () => void;
};
const Ticket = ({
	title,
	image,
	imageHover,
	isSelected = false,
	onSelect
}: Props) => {

	const {t} = useTranslation();
	return (
		<div className="fn-ticket" onClick={onSelect}>
			<span>{t(title)}</span>
			<img className="original" src={`${isSelected ? imageHover : image}`} alt="" />
			<img className="hover" src={imageHover} alt="" />
		</div>
	);
};
export default Ticket;
