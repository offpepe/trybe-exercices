let idNumber = 0;
function employeeRegister (name, email) {
    const nE = {
        nome: name,
        email: email,
        id: '_' + Math.random().toString(36).substr(2, 9)
    };
    return nE;
}

const newEmployees = () => {
    const employees = {id:undefined};
    employees.id= employeeRegister();;
    return employees;
  };

console.log(newEmployees().employeeRegister('jhon larson','email@email.com'));