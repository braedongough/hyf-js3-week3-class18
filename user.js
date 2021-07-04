class User {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const user = new User('Braedon', 'Gough')

console.log(user.firstName)
console.log(user)
console.log(user.getFullName())
