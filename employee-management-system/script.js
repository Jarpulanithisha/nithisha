function addEmployee() {

let name = document.getElementById("name").value;
let role = document.getElementById("role").value;

let li = document.createElement("li");

li.textContent = name + " - " + role;

document.getElementById("employeeList").appendChild(li);

}