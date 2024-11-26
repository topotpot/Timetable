

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
