function solve(input, filterInput) {
    let employees = JSON.parse(input);
    let [criteria, value] = filterInput.split('-');

    if (criteria !== 'all') {
        employees = employees.filter(emp => emp[criteria] === value);
    }
    let result = [];
    let index = 0;

    employees.map(emp => result.push(`${index++}. ${emp['first_name']} ${emp["last_name"]} - ${emp.email}`))
    

    return console.log(result.join('\n'));
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);