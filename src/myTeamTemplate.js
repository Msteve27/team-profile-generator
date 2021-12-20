const teamTemplate = (data) => {
	let htmlPage = data.map(employee => {
		if (employee.officeNumber) {
			return `
				<h1 class="mt-3">Manager's Name: ${(employee.name)}</h1>
				<p>Id: ${(employee.id)}</p>
                <a href="mailto:${(employee.email)}"> <p class="text-blue-800 text-decoration-line: underline">${(employee.email)}</pclass=></a>
				<p>Office Number: ${(employee.officeNumber)}</p>
			`
		} else if (employee.github) {
			return `
                <h2 class="mt-3">Engineer's Name: ${(employee.name)}</h2>
                <p>Id: ${(employee.id)}</p>
                <a href="mailto:${(employee.email)}"> <p class="text-blue-800 text-decoration-line: underline">${(employee.email)}</pclass=></a>
                <a href="https://github.com/${(employee.github)}"> <p class="text-blue-800 text-decoration-line: underline">GitHub: https://github.com/${(employee.github)}</pclass=></a>
			`
		} else if (employee.school) {
            return `
                <h3 class="mt-3">Intern's Name: ${(employee.name)}</h3>
                <p>Id: ${(employee.id)}</p>
                <a href="mailto:${(employee.email)}"> <p class="text-blue-800 text-decoration-line: underline">${(employee.email)}</pclass=></a>
                <p>School: ${(employee.school)}</p>
			`
        }
	})

	return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
	<title>My Team</title>
</head>
<body>
<header class="flex-1 text-white bg-red-500 h-12 flex justify-center items-center">My Team</header>
	<div id="team-container" class="flex-1 grid grid-cols-4">
		<div>
		<h1>${htmlPage.join("")}</h1>
		</div>
		
	</div>


</body>
</html>
	`
}

module.exports = teamTemplate