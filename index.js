const func =require("../game/data");



// - 1. Write a function called `countAllPeople` which counts the total number of people in `got` variable defined in `data.js` file.

function countAllPeople() {
    return func.houses.reduce((total, house) => total + house.people.length, 0);
  }
  console.log(countAllPeople());
  
  // 2. Count the total number of people in different houses


  function peopleByHouses() {
    return func.houses.reduce((result, house) => {
      result[house.name] = house.people.length;
      return result;
    }, {});
  }
  console.log(peopleByHouses());
  // 3. Get an array of names of all the people

function everyone() {
    return func.houses.flatMap(house => house.people.map(person => person.name));
  }

  console.log(everyone());
  
// 4. Get an array of names of people whose name includes 's' or 'S'

function nameofpeopleincludes() {
    return everyone().filter(name => name.toLowerCase().includes('s'));
  }
  console.log(nameofpeopleincludes());
  


  // 5. Get an array of names of people whose name includes 'a' or 'A'
  function nameincludesWithA() {
    return everyone().filter(name => name.toLowerCase().includes('a'));
  }
  console.log(nameincludesWithA());
  
  // 6. Get an array of names of people whose surname starts with 'S'

  function surnamestartWithS() {
    return everyone().filter(name => name.split(' ')[1]?.startsWith('S'));
  }
  console.log(surnamestartWithS());
  
  // 7. Get an array of names of people whose surname starts with 'A'

  function surnamestartsWithA() {
    return everyone().filter(name => name.split(' ')[1]?.startsWith('A'));
  }
  console.log(surnamestartsWithA());
  
  // 8. Get an object with houses as keys and an array of people in each house as values
  function peopleNameOfAllHouses() {
    return func.houses.reduce((result, house) => {
      result[house.name] = house.people.map(person => person.name);
      return result;
    }, {});
  }
  console.log(peopleNameOfAllHouses());