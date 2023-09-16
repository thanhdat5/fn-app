import "./index.scss";

const GetInTouch = () => {
    return <div className="fn-get-in-touch">
        <div className="header">
            <img src="/images/icons/support.svg" alt="" />
            <span>Get in touch</span>
        </div>
        <div className="body">
            <div className="contact">
                <div className="avatar">
                    <img src="/images/bot.svg" alt="" />
                    <span>Support001</span>
                </div>
                <div className="info">
                    <label>Email</label>
                    <a href="mailto:support@qgacha.com">
                        <img src="/images/icons/mail.svg" alt="" />
                        <span>Support@4number.io</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
}
export default GetInTouch