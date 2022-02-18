1. Create a folder to store the project
2. Initialize the project npm Init
3. Install required dependencies: npm i prettier testcafe codecept
4. Set prettier: create .prettierignore and .prettierrc.json files
5. Initialize a codeceptjs project: npx codeceptjs init
6. Set script in package.json to launch the tests "test": "codeceptjs run --steps"
7. Create custom helper: npx codeceptjs gh, then provide name, provide where it will be located the file
    7.1. In the codecept.conf.js config file, add the next data after the TestCafe attribute:
        CustomCommands: {
			require: './customComands_helper.js',
		},
8. Create page object:
    8.1. Create page: npx codeceptjs gpo    