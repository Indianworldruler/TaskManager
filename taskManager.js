function taskSummary() {
    console.log('Summary of tasks');
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
}

function addTask(task) {
    tasks.push(task);
}

function taskSummary() {
    console.log('Summary of tasks');
}
