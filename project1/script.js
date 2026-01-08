// Welcome message
window.onload = function () {
    alert("🎉 Welcome to Smart Study App! Let’s learn and have fun 😊");
};

let lessonCount = 0;

// Mark lesson completed
function markLearned(subject) {
    lessonCount++;
    document.getElementById("progress").innerText =
        "⭐ Lessons Learned: " + lessonCount;

    alert("✅ Great job! You learned " + subject);
}

// Fun color mode
function changeTheme() {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// ✅ WORKING Today’s Class button
function showTodayClass() {
    document.getElementById("todayClass").innerText =
        "📅 Today’s Class: Fun Mathematics 🧮 at 5:00 PM";
}
