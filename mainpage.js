document.getElementById("date").valueAsDate = new Date();
function loadSubjects() {
    const subjects = getCookie("subjects") || []
    const select = document.getElementById("homework-subject");
    select.innerHTML = `<option value="">Оберіть предмет</option>`;
    subjects.forEach(subject => {
        const option = document.createElement("option")
        option.value = subject
        option.textContent = subject
        select.appendChild(option)
    })
}
function addSubject() {
    subject = document.getElementById("subject-name").value.trim();
    if (!subject) {
        showAlert("Будь ласка, введіть назву предмету.");
        return;
    }
    subjects = getCookie("subjects") || []
    if (!subjects.includes(subject)) {
        subjects.push(subject);
        setCookie("subjects", subjects);
        loadSubjects()
        showAlert(`Предмет "${subject}" успішно додано.`);
        document.getElementById("subject-name").value = "";
    }
    else {
        showAlert(`Предмет "${subject}" вже існує.`);
    }
}
function removeSubject() {
    const subjectToRemove = document.getElementById("subject-name").value.trim();
    if (!subjectToRemove) {
        showAlert("Будь ласка, введіть назву предмету для видалення.");
        return;
    }

    const subjects = getCookie("subjects") || [];
    const index = subjects.indexOf(subjectToRemove);
    if (index !== -1) {
        subjects.splice(index, 1);
        setCookie("subjects", subjects);
        loadSubjects();
        showAlert(`Предмет "${subjectToRemove}" успішно видалено.`);
        document.getElementById("subject-name").value = "";
    } else {
        showAlert(`Предмет "${subjectToRemove}" не знайдено.`);
    }
}
function loadLessons() {
    const date = document.getElementById("date").value;
    const lessons = getCookie(date) || [];
    const list = document.getElementById("lessons-list");
    list.innerHTML = "";
    lessons.forEach((lesson, index) => {
        const li = document.createElement('li');
        li.className = 'lesson-item';
        const textClass = lesson.completed ? 'completed-text' : '';
        const icon = lesson.completed ? 'fas fa-times-circle' : 'fas fa-check';
        const iconClass = lesson.completed ? 'complete' : 'incomplete';
        li.innerHTML = `
          <span class="${textClass}">${lesson.subject}: ${lesson.homework}</span>
          <div class="lesson-actions">
            <button onclick="toggleComplete(${index})" class="${iconClass} ${icon}" data-index="${index}"></button>
            <button onclick="showNotes(${index})" class="notes fas fa-book" data-index="${index}"></button>
            <button onclick="deleteHomework(${index})" class="delete fas fa-trash" data-index="${index}"></button>
          </div>
        `;
        list.appendChild(li);
    });
}
function addHomework() {
    const subject = document.getElementById("homework-subject").value;
    const homework = document.getElementById("homework-task").value.trim();
    const notes = document.getElementById("homework-notes").value.trim();
    if (!subject || !homework) {
        showAlert("Будь ласка, введіть предмет і домашнє завдання.");
        return;
    }
    const date = document.getElementById("date").value;
    const lessons = getCookie(date) || [];
    lessons.push({ subject, homework, notes, completed: false });
    setCookie(date, lessons);
    document.getElementById("homework-task").value = "";
    document.getElementById("homework-notes").value = "";
    loadLessons();
}
function deleteHomework(index) {
    const date = document.getElementById("date").value;
    const lessons = getCookie(date) || [];
    if (index >= 0 && index < lessons.length) {
        lessons.splice(index, 1);
        setCookie(date, lessons);
        loadLessons();
    }
}
function toggleComplete(index) {
    const date = document.getElementById("date").value;
    const lessons = getCookie(date) || [];
    if (index >= 0 && index < lessons.length) {
        lessons[index].completed = !lessons[index].completed;
        setCookie(date, lessons);
        loadLessons();
    }
}
// Показати нотатки до домашнього завдання
function showNotes(index) {
    const date = document.getElementById("date").value;


    console.log("Збережені уроки:", getCookie(date));


    const lessons = getCookie(date) || [];
    showAlert(lessons[index]?.notes || "Немає нотатків");
}
// Прив'язуємо події через addEventListener
document.getElementById("add-subject-btn").addEventListener("click", addSubject);
document.getElementById("remove-subject-btn").addEventListener("click", removeSubject);
document.getElementById("add-homework-btn").addEventListener("click", addHomework);
document.getElementById("date").addEventListener("change", loadLessons);
loadSubjects();
loadLessons();
const modal = document.getElementById('custom-alert');
const alert_message = document.getElementById('alert-message');
const btn_alert = document.getElementById('close-alert');
function showAlert(message){
    alert_message.textContent=message
    modal.style.display="flex"
}
btn_alert.addEventListener("click",function(){
     modal.style.display="none"
})
