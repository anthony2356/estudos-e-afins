function start_Server() {
    alert("[SYSTEM]: Server Started")
    let connections = document.getElementById("connections").value;
    let Storage = document.getElementById("server_limit").value;
    for (vI = Storage; vI < connections; vI++) {
       server_status = document.getElementById("server_status").value = "[SERVER]: Connections detected: " + vI + server_status + "\n"
        console.log(vI)
    } if (connections < server_limit) {
        v3()
        function v3() {
            alert('[SYSTEM]: the connections passed from the defined limit, closing server..')
            alert("[SYSTEM]: Server Closed.")
            let connections = document.getElementById("connections").value = "";
            let server_limit = document.getElementById("server_limit").value = "";
            let server_status = document.getElementById("server_status").value = "";
        }
    }else {
        alert("[SYSTEM]: new connections.. detected, updating status.....")
    }
}

function stop_Server() {

    alert("[SYSTEM]: closing server..")
    alert("[SYSTEM]: Server Closed.")

    let connections = document.getElementById("connections").value = "";
    let server_limit = document.getElementById("server_limit").value = "";
    let server_status = document.getElementById("server_status").value = "";
}
