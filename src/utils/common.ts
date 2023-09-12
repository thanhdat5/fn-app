export function dspWalletAddress(address: string) {
	return address;
}

export const emailValidate = (e: string) => {
    const regexEmail = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regexEmail.test(e);
};

export const validatePwd = (pwd: string) => {
    const regexPassword = new RegExp(
        /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/
    );
    return regexPassword.test(pwd);
};