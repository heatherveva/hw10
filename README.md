# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This team builder application asks the user a series of prompts and returns a clean HTML page with the user's entered information.

The user is prompted to create a role; manager, engineer, or intern. They choose this employee type from a dropdown menu within the prompt.

If the user selects manager they are prompted with questions about their name, id, email, and office number.

If the user selects engineer they are prompted with questions about their name, id, email, and GitHub link. The GitHub link will populate as a live link on the end result HTML page.

If the user selects intern they are prompted with questions about their name, id, email, and school.

All email addresses are live on the end result HTML page and when clicked, the user will be taken to their default email program with the team member's email address in the "To" spot.

## Installation

This application requires a package JSON and inquirer. The tests require jest to run.

## Screenshots

## License

This application is covered under an MIT License.

## Tests

Each employee file contains its own tests. The employee file is the parent class, the test demonstrates that the information is contained in an object and that each employee type will take a name, id, and email. The three other employee types extend the employee class, becoming the children.

The engineer role intakes a GitHub link, the intern role intakes a school name, and the manager role intakes an office number. These special properties are unique to each of the three employee types.

There are eight total tests for the four employee files and all eight of them pass.

## Contact Me

GitHub: https://github.com/heatherveva

Email: heatherveva@gmail.com
