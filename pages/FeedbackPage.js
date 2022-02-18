const { I, registerPage} = inject();

module.exports = {
    
    nameTxt: `#name`,
    emailTxt: `#email`,
    subjectTxt: `#subject`,
    commentTxt: `#comment`,
    submitBtn: `.btn-signin`,

    isPageDisplayed() {
        I.seeElement(this.nameTxt)
            && I.seeElement(this.emailTxt)
            && I.seeElement(this.subjectTxt)
            && I.seeElement(this.commentTxt)
            && I.seeElement(this.submitBtn)
    },
    
    submitFeedback(name, email, subject, comment) {
        I.fillField(this.nameTxt, name),
        I.fillField(this.emailTxt, email),
        I.fillField(this.subjectTxt, subject),
        I.fillField(this.commentTxt, comment),
        I.click(this.submitBtn)
    }
}