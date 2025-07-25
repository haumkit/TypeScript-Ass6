type Person = {name: string};
type Employee = Person & {employeeId: number};

let emp: Employee = {
    name : "Hau",
    employeeId : 1
};
console.log(emp);

