Feature('Login tests')

Scenario(
	'User can login into the application',({ I, MainPage, LoginPage, HomePage }) => {
		I.amOnPage('http://zero.webappsecurity.com');
		MainPage.signIn();
		LoginPage.isPageDisplayed();
		LoginPage.login('username', 'password');
		HomePage.isPageDisplayed();
	}
),
Scenario(
	'User cannot login with invalid credentials',({ I, MainPage, LoginPage }) => {
		I.amOnPage('http://zero.webappsecurity.com');
		MainPage.signIn();
		LoginPage.isPageDisplayed();
		LoginPage.login('invalidUsername', 'InvalidPassword');
		I.see('Login and/or password are wrong.');
	}
)