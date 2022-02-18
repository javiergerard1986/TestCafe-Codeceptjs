const { I, registerPage} = inject();

module.exports = {
    signInBtn: '#signin_button',
    feedbackTab:'#feedback',
    signIn(){
        I.click(this.signInBtn);
    },
    navigateToFeedbackPage() {
        I.click(this.feedbackTab);
    }
}