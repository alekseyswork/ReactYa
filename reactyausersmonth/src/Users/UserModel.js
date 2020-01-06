class UserModel {
    constructor(id, firstName, lastName, dob) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.date = new Date(dob);
        this.dateNumber = this.date.getMonth();

    }
}

export default UserModel
