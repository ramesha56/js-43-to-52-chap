// EVENTS chapters 43  to 48


// /////////////////////////////////////////ans1
function Alert() {
    alert("Hello! You clicked the link.");
}
////////////////////////////////////////ans 2
function showAlert(message) {
    alert(message);
}
// //////////////////////////////////////ans 3
function devareRow(button) {
 
    var row = button.parentElement.parentElement;
    
    row.remove();
}
// //////////////////////////////////////ans4
function changeImage() {
    document.getElementById("myImage").src = "hover2.jpg";
}

function resetImage() {
    document.getElementById("myImage").src = "hover.jfif";
}
// ////////////////////////ans 5
var counter = 0;
function increaseCounter() {
    counter++;
    document.getElementById("counterValue").innerText = counter;
}
function decreaseCounter() {
    counter--;
    document.getElementById("counterValue").innerText = counter;
}



//  chapters 49  to 52

// /////////////////////////////////////////////ans 1
function displayData(event) {
    event.preventDefault();

    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

   
    document.getElementById("displayName").innerText = "Name: " + name;
    document.getElementById("displayEmail").innerText = "Email: " + email;
    document.getElementById("displayPassword").innerText = "Password: " + password;

   
    document.getElementById("signupForm").reset();
}
// ///////////////////////////ans 2
function toggleContent() {
   
    var fullContent = document.getElementById("fullContent");
    var readMoreBtn = document.getElementById("readMoreBtn");

   
    if (fullContent.style.display === "none") {
        fullContent.style.display = "inline";
        readMoreBtn.innerHTML = "Read Less";
    } else {
        fullContent.style.display = "none"; 
        readMoreBtn.innerHTML = "Read More";
    }
}

// ///////////////////////////////ans 3
var editingRow = null; 
  
        function addStudent(event) {
            event.preventDefault(); 


            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const grade = document.getElementById('grade').value;

            const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow();


            newRow.insertCell(0).innerText = name;
            newRow.insertCell(1).innerText = age;
            newRow.insertCell(2).innerText = grade;

       
            const actionsCell = newRow.insertCell(3);
            const devareButton = document.createElement('button');
            devareButton.innerText = 'Devare';
            devareButton.onclick = function () { devareRow(newRow); };
            actionsCell.appendChild(devareButton);

            const editButton = document.createElement('button');
            editButton.innerText = 'Edit';
            editButton.onclick = function () { editRow(newRow); };
            actionsCell.appendChild(editButton);

  
            document.getElementById('studentForm').reset();
        }


        function devareRow(row) {
            const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
            table.devareRow(row.rowIndex - 1); 
        }

        function editRow(row) {
 
            document.getElementById('editForm').style.display = 'block';
            editingRow = row;

            document.getElementById('editName').value = row.cells[0].innerText;
            document.getElementById('editAge').value = row.cells[1].innerText;
            document.getElementById('editGrade').value = row.cells[2].innerText;
        }

        function updateStudent() {
    
            const name = document.getElementById('editName').value;
            const age = document.getElementById('editAge').value;
            const grade = document.getElementById('editGrade').value;

        
            editingRow.cells[0].innerText = name;
            editingRow.cells[1].innerText = age;
            editingRow.cells[2].innerText = grade;

            
            document.getElementById('editForm').style.display = 'none';
            editingRow = null; 
        }
        function cancelEdit() {
            document.getElementById('editForm').style.display = 'none';
            editingRow = null;} 