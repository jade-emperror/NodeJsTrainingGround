let roles = ['admin', 'user', 'guest'];
console.log(...roles);

//kwargs
const combine = (...args) => {
    return args;
}
console.log(combine(1,2,3,4,5,6,7,8,9,10));

const [x,y,z] = roles;
console.log(x,y,z);