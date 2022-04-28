document.querySelector("#push").onclick = () => {
    if (document.querySelector("#newTask input").value.length == 0) {
        Swal.fire({
            backdrop: 'linear-gradient(135deg,#8052ec,#d161ff)',
            icon: 'error',
            title: 'Oops...',
            text: 'Try to write a task first!',
            width: 300,
            heading: 50,
          })
    }
};