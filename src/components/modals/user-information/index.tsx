import { FormControl, FormGroup, FormLabel, FormText, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

type Props = {
    onDismiss: () => void;
    onLogout: () => void;
}
const UserInformationModal = ({ onDismiss, onLogout }: Props) => {
    const { t } = useTranslation();
    return <Modal className="fn-modal fn-user-info" centered backdrop keyboard={false} show onHide={onDismiss}>
        <Modal.Header closeButton>
            <Modal.Title>{t('User Information?')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="fn-uf-body">
                <div className="avatar">
                    <span><img src="/images/icons/user.svg" alt="" /></span>
                    <button type="button">
                        <img src="/images/icons/camera.svg" alt="" />
                    </button>
                </div>
                <div className="username">Name1</div>
                <div className="userid">User ID: 9999999999</div>
                <FormGroup>
                    <FormLabel>Username</FormLabel>
                    <FormControl placeholder="Your username" value="Name1" />
                    <FormText>Do not use special symbols, otherwise your account may not be supported.</FormText>
                </FormGroup>
                <div className="actions">
                    <button type="button" className="modify">
                        <span>Modify</span>
                    </button>
                    <button type="button" className="logout" onClick={onLogout}>
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </Modal.Body>
    </Modal>
}
export default UserInformationModal