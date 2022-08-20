class Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        this.getRole = () => {
            return ('Manager');
        }
    }
}
module.exports = Manager