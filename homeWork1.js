const person = {
    firstName: "Aleksandr",
    lastName: "Filonov",
    middleName: "Borisovich",
    yearOfBirth: "1991",
    currentYear: Date(),
    age: 0,
    Work: true,
    Studying: false,
};
person.currentYear = new Date().getFullYear();
person.age = new Date().getFullYear() - parseInt(person.yearOfBirth);
console.table(person);