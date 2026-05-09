// Example Data for Dashboard
let academicData = {
    tasks: 5,
    deadlines: 3,
    exams: 2
};

let healthData = {
    waterIntake: 4, // Liters
    sleepHours: 7
};

let mentalHealthData = {
    mood: 'Happy',
    stressLevel: 3 // 1-5 scale
};

// Function to Update Dashboard Summary Cards
function updateDashboard() {
    let dashboard = document.querySelector('.summary-cards');

    dashboard.innerHTML = `
        <div>
            <h3>Tasks</h3>
            <p>${academicData.tasks}</p>
        </div>
        <div>
            <h3>Deadlines</h3>
            <p>${academicData.deadlines}</p>
        </div>
        <div>
            <h3>Exams</h3>
            <p>${academicData.exams}</p>
        </div>
        <div>
            <h3>Water Intake</h3>
            <p>${healthData.waterIntake} Liters</p>
        </div>
        <div>
            <h3>Sleep Hours</h3>
            <p>${healthData.sleepHours} Hours</p>
        </div>
        <div>
            <h3>Mood</h3>
            <p>${mentalHealthData.mood}</p>
        </div>
    `;
}

// Call the function to populate the dashboard
updateDashboard();

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
