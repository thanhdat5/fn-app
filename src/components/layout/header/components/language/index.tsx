import { DEFAULT_LANGUAGE, LANGUAGES } from 'constants/language';
import i18n from 'i18n';
import { Dropdown } from 'react-bootstrap';
import './index.scss';
import { useState } from 'react';

type Props = {
  selectedLang: string;
  onChangeLanguage: (value: string) => void;
}

const Language = ({selectedLang, onChangeLanguage}: Props) => {
	// const [selectedLang, setSelectedLang] = useState<string>(DEFAULT_LANGUAGE);
	const [userSelect, setUserSelect] = useState<string | null>(DEFAULT_LANGUAGE)

	const handleSelectLanguage = (e: any, value: string) => {
		e.preventDefault();
		onChangeLanguage(value);
		i18n.changeLanguage(value);
	};

	return (
		<Dropdown className="fn-language">
			<Dropdown.Toggle variant="dark">
				<span>{userSelect}</span>
				<img src="/images/icons/language.svg" alt="lang" />
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{LANGUAGES.map(language => (
					<Dropdown.Item
						href={language.value}
						className={selectedLang === language.value ? 'active' : ''}
						onClick={e => {
							handleSelectLanguage(e, language.value)
							setUserSelect(language.value)
							
						}}
					>
						{language.label}
					</Dropdown.Item>
				))}

				
			</Dropdown.Menu>
		</Dropdown>
	);
};
export default Language;
