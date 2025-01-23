function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
}
