
console.log("=== Activity 4: Interactive To-Do List (Part 1) ===");


let tasks = [];
let taskIdCounter = 1;

// Part A
console.log("\n=== ELEMENT CREATION DEMONSTRATIONS ===");

// These are the elements found at the bottom of the page are created using DOM
const demoDiv = document.createElement("div");
const demoSpan = document.createElement("span");
const demoButton = document.createElement("button");

console.log("Created div element:", demoDiv);
console.log("Created span element:", demoSpan);
console.log("Created button element:", demoButton);

// These add information to the elements created above
// <strong> opening and closing tags are used to style the span
demoDiv.textContent = "This is a demo div";
demoDiv.id = "demo-div";
demoSpan.innerHTML = "<strong>Demo span with HTML</strong>";
demoButton.textContent = "Demo Button";

console.log("Div after setting properties:", demoDiv);
console.log("Div textContent:", demoDiv.textContent);
console.log("Div id:", demoDiv.id);

// Part B
console.log("\n=== ELEMENT STYLING DEMONSTRATIONS ===");

// These are used to add direct styles to created elements 
// since you cannot use a css file with thesecreated elements
demoDiv.style.backgroundColor = "lightblue";
demoDiv.style.padding = "10px";
demoDiv.style.border = "1px solid blue";

console.log("Applied direct styles to demo div");

// These demostart classlist 
demoDiv.classList.add("demo-class");
demoDiv.classList.add("highlighted");
console.log("Added classes. ClassList:", demoDiv.classList);
console.log("Has 'demo-class':", demoDiv.classList.contains("demo-class"));

demoDiv.classList.remove("highlighted");
console.log("After removing 'highlighted':", demoDiv.classList);

demoDiv.classList.toggle("active");
console.log("After toggling 'active':", demoDiv.classList);

// These add more styles to the created DOM elements above
demoSpan.style.marginTop = "10px";
demoSpan.style.display = "block";
demoButton.style.marginTop = "10px";
demoButton.style.display = "block";

console.log("Applied spacing styles to demo span and button");

// Part C
console.log("\n=== ELEMENT APPENDING DEMONSTRATIONS ===");

const outputDiv = document.getElementById("output");
console.log("Output div before appending:", outputDiv.children.length, "children");

// This adds three children to the output ID found in index.HTML
// These appends are what allow these newly created elements to show on the HTML
outputDiv.appendChild(demoDiv);
outputDiv.appendChild(demoSpan);
outputDiv.appendChild(demoButton);

console.log("Output div after appending:", outputDiv.children.length, "children");

// Part D
console.log("\n=== TO-DO LIST FUNCTIONALITY ===");

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    console.log(`Attempting to add task: "${taskText}"`);
    
    // These if statements check if the user has entered in something
    // We don't want them to and returns to them an alert
    // It also returns to the console what the issue was
    if (taskText === "") {
        alert("Please enter a task!");
        console.log("Task addition failed: empty input");
        return;
    }
    
    if (taskText.length > 100) {
        alert("Task is too long! Please keep it under 100 characters.");
        console.log("Task addition failed: too long");
        return;
    }
    
    // This creates the task object with a counter that ticks up
    // A text property for the name of the task
    // A true or false boolean
    // And a date 
    const task = {
        id: taskIdCounter++,
        text: taskText,
        completed: false,
        createdAt: new Date()
    };
    
    // This adds the tasks to an array which will be used to
    // also retrived the tasks later
    tasks.push(task);
    console.log("Task added to array:", task);
    
    // Creates list item element
    const listItem = createTaskElement(task);
    
    // This adds the listItem created above to the todoList
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(listItem);
    
    // Clears the input
    taskInput.value = "";
    
    // Updates the tasks statistics
    updateTaskStats();
    
    console.log(`Task "${taskText}" added successfully. Total tasks: ${tasks.length}`);
}

function createTaskElement(task) {
    // Creates list item 
    const listItem = document.createElement("li");
    listItem.className = "task-item";
    listItem.setAttribute("data-task-id", task.id);
    
    // Creates span element 
    const taskTextSpan = document.createElement("span");
    taskTextSpan.className = "task-text";
    taskTextSpan.textContent = task.text;
    
    // Creates span element for the status
    const statusSpan = document.createElement("span");
    statusSpan.className = "task-status";
    
    // This if else statement effects the visual of the page if a
    // task is completed or pending depending on the users' input
    if (task.completed) {
        listItem.classList.add("done");
        statusSpan.textContent = "\u2713 Done";
        statusSpan.className += " status-done";
    } else {
        statusSpan.textContent = "\u23F3 Pending";
        statusSpan.className += " status-pending";
    }
    
    // This adds the spans to the item list 
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(statusSpan);
    
    // This adds the onclick event to the list item 
    listItem.onclick = function() {
        toggleTaskCompletion(task.id);
    };
    
    console.log("Created task element:", listItem);
    return listItem;
}

// Part E
function toggleTaskCompletion(taskId) {
    console.log(`Toggling completion for task ID: ${taskId}`);
    
    //This checks for the task in the array and retruns and error to the console
    //If the task is not found
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        console.error(`Task with ID ${taskId} not found`);
        return;
    }
    
    // This defines the onclick event on one of the items the user
    // added to the list and this would change whether or not the
    // item was completed
    task.completed = !task.completed;
    console.log(`Task "${task.text}" is now ${task.completed ? 'completed' : 'pending'}`);
    
    // Finds the DOM element with the taskID and updates its status
    const listItem = document.querySelector(`[data-task-id="${taskId}"]`);
    const statusSpan = listItem.querySelector(".task-status");
    
    if (task.completed) {
        listItem.classList.add("done");
        statusSpan.textContent = "\u2713 Done";
        statusSpan.className = "task-status status-done";
    } else {
        listItem.classList.remove("done");
        statusSpan.textContent = "\u23F3 Pending";
        statusSpan.className = "task-status status-pending";
    }
    
    // Updates the statistics
    updateTaskStats();
}

function updateTaskStats() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    
    // Updates the DOM elements used in updateTaskStats
    // These also update the span elements in the HTML documents 
    document.getElementById("taskCount").textContent = `(${totalTasks} task${totalTasks !== 1 ? 's' : ''})`;
    document.getElementById("totalTasks").textContent = `Total: ${totalTasks}`;
    document.getElementById("completedTasks").textContent = `Completed: ${completedTasks}`;
    document.getElementById("pendingTasks").textContent = `Pending: ${pendingTasks}`;
    
    console.log(`Stats updated - Total: ${totalTasks}, Completed: ${completedTasks}, Pending: ${pendingTasks}`);
}

// Allows for the enter key to be used for the task iput aswell as the button
document.getElementById("taskInput").onkeydown = function(event) {
    if (event.key === "Enter") {
        addTask();
    }
};

console.log("To-Do List application initialized successfully!");
console.log("Try adding some tasks and clicking them to mark as complete!");

const initialDemo = `
    <h3>DOM Manipulation Demonstrations</h3>
    <p>Element creation examples loaded above</p>
    <p>Styling and classList demonstrations complete</p>
    <p>Ready to create and manage to-do tasks!</p>
`;

setTimeout(() => {
    document.getElementById("output").innerHTML = initialDemo + document.getElementById("output").innerHTML;
}, 100);
