let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function show_employees(arr){
  for (role in users ){
    counter = 0
    console.log (role.toUpperCase())
      for (person in users[role]){

        counter += 1
        first_name = users[role][person].first_name.toUpperCase();
        last_name = users[role][person].last_name.toUpperCase();
        console.log(counter,'-',first_name,last_name)
      }
  }
}

show_employees(users)