const employee = {name:"Kev",streetAddress:"home"};
function updateEmployeeWithKeyAndValue(obj,key,value)
{
    return {...obj,[key]:value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value)
{
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj,name)
{ 
    const newObj = {...obj};
    delete newObj.name;
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, name)
{
    delete employee.name;
    return employee;
}
