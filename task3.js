function PortfolioUser(user) {
    const { name, age } = user;
    return `Мене звати, ${name}! Мені ${age} років.`;
}

const user = { name: "Паша", age: 25 };
console.log(PortfolioUser(user));
