const { I, registerPage} = inject();

module.exports = {
    
    loginForm: `#login_form`,
    usernameTxt: `#user_login`,
    passwordTxt: `#user_password`,
    loginBtn: `.btn-primary`,

    login(username, password) {
        I.fillField(this.usernameTxt, username);
        I.fillField(this.passwordTxt, password);
        I.click(this.loginBtn);
    },

    isPageDisplayed(){
        I.seeElement(this.loginForm)
            && I.seeElement(this.usernameTxt)
            && I.seeElement(this.passwordTxt)
            && I.seeElement(this.loginBtn);
    },
    navigateToForgotPasswordPage(){
        I.click(this.forgotPasswordLnk);
    }
}