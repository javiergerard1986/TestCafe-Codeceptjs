Feature('Feedback tests')

Scenario(
	'User can provide feedback',({ I, MainPage, FeedbackPage }) => {
		I.amOnPage('http://zero.webappsecurity.com');
		MainPage.navigateToFeedbackPage();
		FeedbackPage.isPageDisplayed();
		FeedbackPage.submitFeedback('name', 'email@random.com', 'subject', 'comment');
		I.see('Thank you for your comments, name.')
	}
)