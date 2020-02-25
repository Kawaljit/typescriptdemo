
const human: {
  name: string;
  age: number;
  friends: string[];
  role: any[];
} = {
  name: 'Kawaljit',
  age: 36,
  friends: [
    'Udai',
    'Sameeer',
    'Tim',
    'David',
    'Sheetal'
  ],
  role: [2, 'developer']
}

let supportText: string;
supportText = ' years old';
const text = human.name + ' is ' + human.age + supportText + ' and his best friend is ' + human.friends[4];

console.log(human.role[0])

document.getElementById('print').innerHTML = text;