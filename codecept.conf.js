const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

exports.config = {
	tests: './tests/*.js',
	output: './output',
	helpers: {
		TestCafe: {
			url: 'http://localhost',
			browser: 'chrome',
			show: true,
			waitForTimeout: 15000,
			keepCookies: false,
			windowSize: '800x600'
		}
	},
	include: {
		I: './steps_file.js',
		MainPage: './pages/MainPage.js',
		LoginPage: './pages/LoginPage.js',
		HomePage: './pages/HomePage.js',
		FeedbackPage: './pages/FeedbackPage.js',
		ForgotPasswordPage: './pages/RequestPasswordPage.js',
		t: 'testcafe',
	},
	bootstrap: null,
	mocha: {},
	name: 'CodeCept',
}
