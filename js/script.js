document.querySelector("#push").onclick = () => {
    if (document.querySelector("#newTask input").value.length == 0) {
        alert("Try to write a task first!");
    } else {
        document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskName">
                    ${document.querySelector("#newTask input").value}
                </span>
                <button class="delete">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </div>
        `;
        let currentTasks = document.querySelectorAll(".delete");
        for (i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        let tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }
    };
};