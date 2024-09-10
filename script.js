const tbody = document.querySelector("tbody");
const form = document.querySelector("form");

function deleteRecord(event){
    let data = event.target;
    let row = data.parentNode.parentNode;
    row.remove();
}

function addEmployee(employee){
    let tr = document.createElement("tr");
    for(let key in employee){
        let td = document.createElement("td");
        td.innerText = employee[key];
        tr.appendChild(td);
    }

    let options = document.createElement("td");

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    let editButton = document.createElement("button");
    editButton.innerText = "Edit";

    options.append(deleteButton, editButton);

    tr.appendChild(options);
    tbody.appendChild(tr);

    deleteButton.addEventListener("click" , deleteRecord);
    editButton.addEventListener("click" , editRecord)
}

function onFormSubmit(event){
    
    event.preventDefault();

    let emp_details = {
        name : form.emp_name.value,
        email : form.email.value,
        company_name : form.company_name.value,
        gender : form.gender.value,
        role : form.role.value,
        salary : form.salary.value,
    }
    if(isEditing.editEmp){
        updateEmployee(emp_details);
    }
    else{
        addEmployee(emp_details);
    }

    //form.reset();
}

form.addEventListener("submit" , onFormSubmit);