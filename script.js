

// Отримати дані з cookie
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value ? JSON.parse(value) : null;
        }
    }
    return null;
}


// Зберегти дані в cookie
function setCookie(name, value) {
    document.cookie = `${name}=${JSON.stringify(value)};path=/;max-age=${3600 * 24 * 30}`;
}
let block = document.querySelector(".container")
document.addEventListener("mousemove", function (e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerWidth / 2
    let angleX = 35 * dx / window.innerWidth / 2
    let angleY = 35 * dy / window.innerWidth / 2
    block.style.transform = `rotateX(${angleX}deg)rotateY(${angleY}deg)`
})