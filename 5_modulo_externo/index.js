import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
console.log(args);

const name = args["name"];
const job = args["job"];

console.log(name, job);
console.log(`His name is ${name} and the profession is ${job}`);