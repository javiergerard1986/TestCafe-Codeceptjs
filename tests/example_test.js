Feature('example')

const VALID_USERNAME = 'username'
const VALID_PASSWORD = 'password'
const INVALID_USERNAME = 'usernameX'
const INVALID_PASSWORD = 'passwordX'

Scenario('Test 1', ({ I }) => {
	// Launch browser and navigate to http://www.example.com url
	I.amOnPage('http://www.example.com')
	// Explicit wait in seconds
	I.wait(1)
	// Wait for element to be displayed
	I.waitForElement('h1')
	// Verify that the "Example" word is displayed
	I.see('Example')
	// Verify that the "Login" form is not displayed
	I.dontSeeElement('.login-form')
	// Verify url content
	I.seeInCurrentUrl('example.com')
})
Scenario('Test 2', ({ I }) => {
	// Launch browser and navigate to http://www.example.com url
	I.amOnPage('http://www.example.com')
	// Explicit wait in seconds
	I.wait(1)
	// Wait for element to be displayed
	I.waitForElement('h1')
	// Verify that the "Example" word is displayed
	I.see('Example')
	// Verify that the "Login" form is not displayed
	I.dontSeeElement('.login-form')
	// Verify url content
	I.seeInCurrentUrl('example.com')
})
Scenario('Test 3', ({ I }) => {
	// Launch browser and navigate to http://www.example.com url
	I.amOnPage('http://www.example.com')
	// Explicit wait in seconds
	I.wait(1)
	// Wait for element to be displayed
	I.waitForElement('h1')
	// Verify that the "Example" word is displayed
	I.see('Example')
	// Verify that the "Login" form is not displayed
	I.dontSeeElement('.login-form')
	// Verify url content
	I.seeInCurrentUrl('example.com')
})
Scenario('Full Page screenshot', ({ I }) => {
	// Launch browser and navigate to http://www.example.com url
	I.amOnPage('http://www.example.com')
	// Explicit wait in seconds
	I.wait(1)
	// Take full screenshot
	I.saveScreenshot('test.png', true)
	// Take Element screenshot
	I.saveElementScreenshot('h1', 'element.png')
})
Scenario('Login test', ({ I }) => {
	I.amOnPage('http://zero.webappsecurity.com/login.html')
	I.waitForElement('#login_form')
	I.fillField('#user_login', INVALID_USERNAME)
	I.fillField('#user_password', INVALID_PASSWORD)
	I.click("input[type='submit']")
	I.waitForText('Login and/or password are wrong')
})
Scenario('Extract Text test', async ({ I }) => {
	I.amOnPage('http://www.example.com')
	I.refreshPage()
	let text = await I.grabTextFrom('h1')
	console.log(`Text: ${text}`)
	let value = await I.grabValueFrom('h1')
	console.log(`Text: ${value}`)
})