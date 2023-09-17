import { LANGUAGES } from "constants/language";
import i18n from "i18n";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

type Props = {
    onDismiss: () => void;
    selectedLang: string;
  onChangeLanguage: (value: string) => void;
}
const LanguageModal = ({ onDismiss, selectedLang, onChangeLanguage }: Props) => {
    const { t } = useTranslation();


	const handleSelectLanguage = (value: string) => {
		onChangeLanguage(value);
		i18n.changeLanguage(value);
        onDismiss();
	};

    return <Modal className="fn-modal fn-language-modal"  backdrop keyboard={false} show onHide={onDismiss}>
        <Modal.Header closeButton>
            <Modal.Title>{t('Language')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
                {LANGUAGES.map(language => (
                    <li onClick={()=> handleSelectLanguage(language.value)} className={`${selectedLang === language.value ? 'active' : ''}`}>{language.label}</li>
                ))}
               
            </ul>
        </Modal.Body>
    </Modal>
}
export default LanguageModal