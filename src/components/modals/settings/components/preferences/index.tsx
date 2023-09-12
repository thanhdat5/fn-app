import { FormCheck } from "react-bootstrap";
import "./index.scss";

const SettingPreferences = () => {

    return <>
        <div className="fn-setting-preferences">
            <div className="header">
                <h4>Preferences</h4>
                <span>User privacy is one of the core values of Qgacha. These settings allow you to be completely anonymous from the rest of the players.</span>
            </div>
            <div className="body">
                <div className="form-switcher">
                    <FormCheck
                        type="switch"
                        id="custom-switch"
                        label=""
                    />
                    <div className="label">
                        <label>Enable Ghost Mode</label>
                        <span>Your Actions won't appear in Live Stats</span>
                    </div>
                </div>
                <div className="form-switcher">
                    <FormCheck
                        type="switch"
                        id="custom-switch"
                        label=""
                    />
                    <div className="label">
                        <label>Hide all your statistics</label>
                        <span>Other users won't be able to view your statistics</span>
                    </div>
                </div>
            </div>
            <div className="footer">
                <span>Please allow up to 30 seconds for update to take effect.</span>
                <button type="submit" className="save">
                    <span>Save changes</span>
                </button>
            </div>
        </div>
        <div className="fn-setting-preferences">
            <div className="title">Marketing</div>
            <div className="body">
                <div className="form-switcher">
                    <FormCheck
                        type="switch"
                        id="custom-switch"
                        label=""
                    />
                    <div className="label">
                        <label>Receive Email Marketing</label>
                        <span>Opt out from marketing emails or offers</span>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="save">
                    <span>Save changes</span>
                </button>
            </div>
        </div>
    </>
}
export default SettingPreferences