const createdTeam = (theTeam) => {
    const genTeam = [];

    const getIntern = intern => {
        // let internSection = 
        genTeam.push(interSection);
    }

    const getEngineer = engineer => {
        // let engineerSection =
        genTeam.push(engineerSection);
    }

    const getManager = manager => {
        // let managerSection = 
        genTeam.push(managerSection);
    }

    for (employee of theTeam) {
        if (employee.getRole() === 'Intern') {
            getIntern(employee)
        }
        if (employee.getRole() === 'Engineer') {
            getEngineer(employee)
        }
        if (employee.getRole() === 'Manager') {
            getManager(employee)
        }
    }

    return genTeam.join('')
}

function generateHTML(yourHTML) {

}


module.exports = generateHTML;