function task1(callback) {
    setTimeout(() => {
        console.log('Task 1 completed');
        callback();
    }, 1000); // Task 1 takes 1 second
}

function task2(callback) {
    setTimeout(() => {
        console.log('Task 2 completed');
        callback();
    }, 500); // Task 2 takes 0.5 seconds
}

function task3(callback) {
    setTimeout(() => {
        console.log('Task 3 completed');
        callback();
    }, 800); // Task 3 takes 0.8 seconds
}

function runParallelTasks(finalCallback) {
    let tasksCompleted = 0;
    const totalTasks = 3;

    function checkAllTasksCompleted() {
        tasksCompleted++;
        if (tasksCompleted === totalTasks) {
            finalCallback();
        }
    }

    // Run all tasks in parallel
    task1(checkAllTasksCompleted);
    task2(checkAllTasksCompleted);
    task3(checkAllTasksCompleted);
}

// Running all tasks in parallel
runParallelTasks(() => {
    console.log('All tasks completed in parallel');
});
