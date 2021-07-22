const generateHTML = (group) => {
	console.log("teams!!!!!!", group);

	var cards = [];

	for (let i = 0; i < group.length; i++) {
		if (group[i].getRole() === "Intern") {
			var card = `
        <div>
        <h1>  ${group[i].name}</h1>
        <h3> email: ${group[i].email}</h1>
        <h3> school: ${group[i].school}</h1>
        </div>
        `;

			cards.push(card);
		} else if (group[i].getRole() === "Engineer") {
			var card = `
        <div>
        <h1> ${group[i].name}</h1>
        <h3> email: ${group[i].email}</h3>
        <h3> github: ${group[i].github}</h3>
      
        </div>
        `;

			cards.push(card);
		} else if (group[i].getRole() === "Manager") {
			var card = `
        <div>
        <h1> ${group[i].name}</h1>
        <h3> email: ${group[i].email}</h3>
        <h3> office number: ${group[i].officeNumber}</h3>
        </div>
        `;

			cards.push(card);
		}
	}

	const fakeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

${cards}
    
</body>
</html>`;

	return fakeHtml;
};

module.exports = generateHTML;
