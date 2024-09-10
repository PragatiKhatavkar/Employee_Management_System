let isEditing = {
    editEmp: false,
    row: null
}

function editRecord(event){
    // select the row to edit
    const row = event.target.parentNode.parentNode;
    
    //get the "td" which needs to be edited
    const cells = document.querySelectorAll("td");
    
    //collect the info of selected "td"
    let employeeInfo = {
        emp_name: cells[0].innerText,
        email: cells[1].innerText,
        company_name: cells[2].innerText,
        gender: cells[3].innerText,
        role: cells[4].innerText,
        salary: cells[5].innerText
    }

    //refill collected info in the form
    refillForm(employeeInfo);

    //updating data in same "td"
    isEditing = {
        editEmp: true,
        row: row
    }

    document.querySelector("button").innerText = "Update";
}

function refillForm(employeeInfo){
    for(let details in employeeInfo){
        form[details].value = employeeInfo[details];
        console.log(form[details].value);
    }
}

function updateEmployee(updatedInfo){
    const updationRow = isEditing.row;
    const data = document.querySelectorAll("td");

    data[0].innerText = updatedInfo.name;
    data[1].innerText = updatedInfo.email;
    data[2].innerText = updatedInfo.company_name;
    data[3].innerText = updatedInfo.gender;
    data[4].innerText = updatedInfo.role;
    data[5].innerText = updatedInfo.salary;

    document.querySelector("button").innerText = "Add Employee";

    isEditing = {
        editEmp: false,
        row: null
    }
}