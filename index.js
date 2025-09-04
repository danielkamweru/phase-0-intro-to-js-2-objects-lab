// Write your solution in this file!
let  employee = {
    name:"Sam",
    streetAddress:"11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
return{
       "name": "Sam","streetAddress": "11 Broadway" };
}
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
function  deleteFromEmployeeByKey(employee, key){
    return{}
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
return employee;
} 





         
