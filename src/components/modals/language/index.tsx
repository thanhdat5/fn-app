import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

type Props = {
    onDismiss: () => void;
}
const LanguageModal = ({ onDismiss }: Props) => {
    const { t } = useTranslation();
    return <Modal className="fn-modal fn-language-modal" centered backdrop keyboard={false} show onHide={onDismiss}>
        <Modal.Header closeButton>
            <Modal.Title>{t('Language')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li>English</li>
                <li className="active">Việt Nam</li>
                <li>한국어</li>
                <li>日本語</li>
                <li>Filipino</li>
                <li>हिन्दी</li>
                <li>nigeria</li>
                <li>日本語</li>
            </ul>
        </Modal.Body>
    </Modal>
}
export default LanguageModal