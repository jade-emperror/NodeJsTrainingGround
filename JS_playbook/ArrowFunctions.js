//arrow functon with single line
let iam = "Bharath";
const greetUser = (name) => {
    return "hello "+ name;
}
console.log(greetUser(iam))

//arrow function and JSON
let userobj = {
    name: "Bharath",
    age: 21,
    role: "Associate Software Engineer",
    organisation: "RecruitCRM"
}
const parseUserObj = (user) => {
    return `Name: ${user.name} Age: ${user.age} Role: ${user.role} Organisation: ${user.organisation}`
}
console.log(parseUserObj(userobj));