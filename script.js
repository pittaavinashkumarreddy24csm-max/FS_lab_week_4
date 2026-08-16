// State array to store student names
let students = ["Bob", "Boina"]; // Pre-populated to match initial state

// DOM Element References
const studentInput = document.getElementById("studentInput");
const addBtn = document.getElementById("addBtn");
const studentCount = document.getElementById("studentCount");
const studentList = document.getElementById("studentList");

// Function to render the list and update the count
function render() {
  // Clear existing items
  studentList.innerHTML = "";

  // Render each student in the array with 1-based index numbering
  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.className = "student-item";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = `${index + 1}. ${student}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => removeStudent(index);

    li.appendChild(nameSpan);
    li.appendChild(deleteBtn);
    studentList.appendChild(li);
  });

  // Update total count
  studentCount.textContent = students.length;
}

// Function to add a new student
function addStudent() {
  const name = studentInput.value.trim();
  if (name !== "") {
    students.push(name);
    studentInput.value = "";
    render();
  }
}

// Function to remove a student by array index
function removeStudent(index) {
  students.splice(index, 1);
  render(); // Re-render updates numbering and count automatically
}

// Event Listeners
addBtn.addEventListener("click", addStudent);

// Allow pressing 'Enter' inside the text box to add student
studentInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addStudent();
  }
});

// Initial Render on page load
render();