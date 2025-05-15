// document.addEventListener("DOMContentLoaded", () => {
// const taskInput = document.getElementById("taskInput");
// const dateInput = document.getElementById("dateInput");
// const timeInput = document.getElementById("timeInput");
// const addTaskBtn = document.getElementById("addTaskBtn");
// const tasksContainer = document.getElementById("tasksContainer");
// const searchInput = document.getElementById("searchTask");
// const alertBox = document.getElementById("alert");
// const alertMessage = document.getElementById("alertMessage");
// const closeAlert = document.getElementById("closeAlert");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// function showAlert(message) {
//   alertMessage.textContent = message;
//   alertBox.classList.remove("hidden");
// }

// closeAlert.onclick = () => alertBox.classList.add("hidden");

// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function displayTasks(filter = "") {
//     const dueList = document.getElementById("dueList");
//     const upcomingList = document.getElementById("upcomingList");
//     dueList.innerHTML = "";
//     upcomingList.innerHTML = "";
  
//     const today = new Date().toISOString().split("T")[0];
  
//     for (const task of tasks) {
//       if (filter && !task.text.toLowerCase().includes(filter.toLowerCase())) continue;
  
//       const taskDiv = document.createElement("div");
//       taskDiv.className = "task-item";
  
//       const desc = document.createElement("span");
//       desc.innerHTML = `${task.text} at <span class="task-time">${formatTime(task.time)}</span>`;
  
//       const actions = document.createElement("div");
//       const editBtn = document.createElement("button");
//       editBtn.textContent = "Edit";
//       editBtn.className = "edit-btn";
//       editBtn.onclick = () => editTask(task);
  
//       const deleteBtn = document.createElement("button");
//       deleteBtn.textContent = "Delete";
//       deleteBtn.className = "delete-btn";
//       deleteBtn.onclick = () => deleteTask(task);
  
//       actions.append(editBtn, deleteBtn);
//       taskDiv.append(desc, actions);
  
//       if (task.date <= today) {
//         dueList.appendChild(taskDiv);
//       } else {
//         upcomingList.appendChild(taskDiv);
//       }
//     }
//   }
  

// function formatTime(t) {
//   const [h, m] = t.split(":");
//   const hour = parseInt(h);
//   const suffix = hour >= 12 ? "pm" : "am";
//   return `${((hour + 11) % 12 + 1)}:${m} ${suffix}`;
// }

// function addTask() {
//   const text = taskInput.value.trim();
//   const date = dateInput.value;
//   const time = timeInput.value;

//   if (!text || !date || !time) {
//     showAlert("Please fill in all fields");
//     return;
//   }

//   tasks.push({ text, date, time });
//   saveTasks();
//   displayTasks();
//   taskInput.value = dateInput.value = timeInput.value = "";
// }

// function deleteTask(taskToDelete) {
//   tasks = tasks.filter(task => task !== taskToDelete);
//   saveTasks();
//   displayTasks();
// }

// function editTask(taskToEdit) {
//   const newText = prompt("Edit task:", taskToEdit.text);
//   if (newText !== null && newText.trim()) {
//     taskToEdit.text = newText.trim();
//     saveTasks();
//     displayTasks();
//   }
// }

// const taskForm = document.getElementById("taskForm");
// taskForm.onsubmit = function (e) {
//   e.preventDefault(); // prevents the page refresh
//   addTask(); // your existing function
// };

// searchInput.oninput = e => displayTasks(e.target.value);
// displayTasks()
// })



document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const dateInput = document.getElementById("dateInput");
    const timeInput = document.getElementById("timeInput");
    const addTaskBtn = document.getElementById("addBtn"); // in your HTML the button id is "addBtn"
    const dueList = document.getElementById("dueList");
    const upcomingList = document.getElementById("upcomingList");
    const searchInput = document.getElementById("searchTask");
    const alertBox = document.getElementById("alert");
    const alertMessage = document.getElementById("alertMsg"); // Make sure this matches your HTML
    const closeAlert = document.getElementById("closeAlert");
  
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    function showAlert(message) {
      alertMessage.textContent = message;
      alertBox.classList.remove("hidden");
    }
  
    closeAlert.onclick = () => alertBox.classList.add("hidden");
  
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function displayTasks(filter = "") {
      dueList.innerHTML = "";
      upcomingList.innerHTML = "";
  
      const today = new Date().toISOString().split("T")[0];
  
      for (const task of tasks) {
        if (filter && !task.text.toLowerCase().includes(filter.toLowerCase())) continue;
  
        const taskDiv = document.createElement("div");
        taskDiv.className = "task-item";
  
        const desc = document.createElement("span");
        desc.innerHTML = `${task.text} at <span class="task-time">${formatTime(task.time)}</span>`;
  
        const actions = document.createElement("div");
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => editTask(task);
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteTask(task);
  
        actions.append(editBtn, deleteBtn);
        taskDiv.append(desc, actions);
  
        if (task.date <= today) {
          dueList.appendChild(taskDiv);
        } else {
          upcomingList.appendChild(taskDiv);
        }
      }
    }
  
    function formatTime(t) {
      const [h, m] = t.split(":");
      const hour = parseInt(h);
      const suffix = hour >= 12 ? "pm" : "am";
      return `${((hour + 11) % 12 + 1)}:${m} ${suffix}`;
    }
  
    function addTask() {
      const text = taskInput.value.trim();
      const date = dateInput.value;
      const time = timeInput.value;
  
      if (!text || !date || !time) {
        showAlert("Please fill in all fields");
        return;
      }
  
      tasks.push({ text, date, time });
      saveTasks();
      displayTasks();
      taskInput.value = dateInput.value = timeInput.value = "";
    }
  
    function deleteTask(taskToDelete) {
      tasks = tasks.filter(task => task !== taskToDelete);
      saveTasks();
      displayTasks();
    }
  
    function editTask(taskToEdit) {
      const newText = prompt("Edit task:", taskToEdit.text);
      if (newText !== null && newText.trim()) {
        taskToEdit.text = newText.trim();
        saveTasks();
        displayTasks();
      }
    }
  
    const taskForm = document.getElementById("taskForm");
    taskForm.onsubmit = function (e) {
      e.preventDefault(); // prevent page refresh
      addTask();
    };
  
    searchInput.oninput = e => displayTasks(e.target.value);
    displayTasks();
  });
  