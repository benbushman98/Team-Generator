class Intern {
    constructor(school) {
        this.school = school;
        this.getSchool = () => {
            return this.school;
        }
        this.getRole = () => {
            return ('Intern');
        }
    }
}
module.exports = Intern