const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const chokidar = require('chokidar');

const lessonPath = path.join(__dirname); // Adjust as necessary
const testPath = path.join(__dirname, '__tests__');

const successMessages = [
	"Great job! You're on fire 🔥",
	'Success! You nailed it 🎉',
	"All tests passed! You're a JavaScript wizard 🧙‍♂️",
	'You did it! High five ✋',
];

const errorMessages = [
	'Oops! Something went wrong 🐛',
	"Don't worry, errors make you stronger 💪",
	"Keep trying, you're almost there! 🚀",
	'Remember, every master was once a disaster 🌪️',
];

const getRandomMessage = (messages) =>
	messages[Math.floor(Math.random() * messages.length)];

async function runTests() {
	const ora = (await import('ora')).default;
	fs.readdirSync(lessonPath).forEach((file) => {
		if (
			file.endsWith('.js') &&
			file !== 'checkTests.js' &&
			file !== '01_HelloWorld.js'
		) {
			const content = fs.readFileSync(
				path.join(lessonPath, file),
				'utf-8'
			);
			if (!content.includes('REMOVE THIS LINE to check your work')) {
				const testName = file.replace('.js', '.test.js');
				const spinner = ora(`🤖 Running test for ${file}`).start();

				exec(
					`npm test -- ${path.join(testPath, testName)}`,
					(error, stdout, stderr) => {
						spinner.stop();
						if (error) {
							console.error(
								`Error running test for ${file}: ${error}`
							);
							console.log(getRandomMessage(errorMessages)); // Display a random error message
							return;
						}
						console.log(`Results for ${file}:\n${stdout}`);
						if (stderr) {
							console.error(
								`Error output for ${file}:\n${stderr}`
							);
						} else {
							console.log(getRandomMessage(successMessages)); // Display a random success message
						}
					}
				);
			}
		}
	});
}

// Watch for file changes
chokidar.watch('*.js', { cwd: lessonPath }).on('change', (file) => {
	const fullFilePath = path.join(lessonPath, file);
	runTests(fullFilePath);
});
