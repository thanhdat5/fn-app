import "./index.scss";

const Referral = () => {
    return <div className="fn-referral">
        <div className="header">
            <h4>INVITE A FRIEND TO GET:
                <span><strong>8%</strong> COMMISSION REWARDS</span></h4>
        </div>
        <div className="body">
            <div className="form-group">
                <label>Referral Code</label>
                <div className="input-gr">
                    <input readOnly value="abcdefgh" />
                    <button type="button" className="copy">
                        <img src="/images/icons/copy.svg" alt="" />
                    </button>
                </div>
            </div>
            <div className="form-group">
                <label>Referral Link</label>
                <div className="input-gr">
                    <input readOnly value="https://q-gacha/abcdefgh" />
                    <button type="button" className="copy">
                        <img src="/images/icons/copy.svg" alt="" />
                    </button>
                </div>
            </div>
            <div className="form-action">
                <button type="button" className="more">
                    <span>More info our affiliate</span>
                </button>
            </div>
        </div>
    </div>
}
export default Referral