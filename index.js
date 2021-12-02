function generate() {

    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    var arr = []
    for (let i = 0; i < 6; i++) {
        arr[i] = randomIntFromInterval(1, 256);
    }
    var gradient = "linear-gradient(to bottom, rgba(" + arr[0] + "," + arr[1] + " , " + arr[2] + ", 0.52), rgba(" + arr[3] + ", " + arr[4] + ", " + arr[5] + ", 0.73))";


    document.getElementById("cp").style.backgroundImage = gradient

}

function getToastContainer() {
    var container = document.getElementById('toast-container')
    if (container == null) {
        container = document.createElement('div')
        container.id = 'toast-container'
        container.classList.add('toast-container')
        container.classList = 'toast-container position-fixed bottom-0 end-0 p-3'
        container.setAttribute("style", "z-index: 11");
        document.body.appendChild(container)
    }
    return container;
}

function getToast() {
    var toast = document.createElement("div")
    toast.classList = 'toast fade bg-success text-white'
    toast.id = "toast-" + toast_id
    toast.setAttribute('data-autohide', 'true')
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    return toast
}

function getSnack() {
    var body = document.createElement('div')
    body.classList = 'toast-body d-flex'
    body.appendChild(getToastText())
    body.appendChild(getToastCloseBtn())
    return body;
}


function getToastCloseBtn() {
    var closeBtn = document.createElement('button')
    closeBtn.classList = 'btn-close btn-close btn-close-white me-2 m-auto'
    closeBtn.setAttribute('type', 'button')
    closeBtn.setAttribute('data-bs-dismiss', 'toast');
    return closeBtn
}

function getToastText() {
    var text = document.createElement('div')
    text.setAttribute('style', 'font-size: large;')
    text.innerHTML = `عملیات با موفقیت انجام شد`
    text.id = toast_id;

    return text
}

var toast_id = 1;

function displayNotification(message, color, time, hide){
    time = 5000;
    hide = true;

    var option = {delay: time, autohide: hide}

    var toast_container = getToastContainer();
    toast = getToast();
    toast_container.appendChild(toast);
    toast.appendChild(getSnack());

    var toast = new bootstrap.Toast(toast, option);
    toast.show();

    toast_id = toast_id + 1;
}

document.onload = generate();