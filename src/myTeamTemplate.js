const teamTemplate = (data) => {
	let html = data.map(employee => {
		if (employee.officeNumber) {
			return `
				<h2>Name: ${addManager(employee.name)}</h2>
				<p>Id: ${addManager(employee.id)}</p>
                <p>Email: ${addManager(employee.email)}</p>
				<p>Office Number: ${addManager(employee.officeNumber)}</p>
			`
		} else if (employee.github) {
			return `
                <h2>Name: ${addEngineer(employee.name)}</h2>
                <p>Id: ${addEngineer(employee.id)}</p>
                <p>Email: ${addEngineer(employee.email)}</p>
                <p>GitHub: ${addEngineer(employee.github)}</p>
			`
		} else if (employee.school) {
            return `
                <h2>Name: ${addIntern(employee.name)}</h2>
                <p>Id: ${addIntern(employee.id)}</p>
                <p>Email: ${addIntern(employee.email)}</p>
                <p>GitHub: ${addIntern(employee.school)}</p>
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
	<title>My Team</title>
	<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<header>My Team</header>
	<h1 className="text-blue-800 text-lg">${html.join("")}</h1>


</body>
</html>
	`
}

module.exports = teamTemplate