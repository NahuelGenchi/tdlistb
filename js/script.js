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
    };
};