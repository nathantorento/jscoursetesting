// Variable to store the content of different pages
const pages = {
    about: `
        <h2>About Me</h2>
        <img id="profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Jose_Rizal_full.jpg/250px-Jose_Rizal_full.jpg">
        <p>Hello! I'm Jose Rizal, a developer with 2 weeks experience in HTML, CSS, and JavaScript.</p>
    `,
    skills: `
        <h2>Skills</h2>
        <ul class="skills">
        <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo" class="skill-logo">
            <span>HTML & CSS</span>
        </li>
        <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript logo" class="skill-logo">
            <span>JavaScript</span>
        </li>
        <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python logo" class="skill-logo">
            <span>Python</span>
        </li>
        </ul>
    `,
    projects: `
        <h2>Projects</h2>
        <p>Here are some projects I’ve worked on:</p>
        <ul>
            <li>Portfolio Website</li>
            <li>Task Manager App</li>
            <li>Weather Dashboard</li>
        </ul>
    `,
    recommendations: `
        <h2>Recommendations</h2>
        <p>"John is a fantastic developer and team player." – Jane Doe</p>
    `
};

// Handle nav clicks
document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            content.innerHTML = pages[page] || "<h2 style='text-align: center'>404 Not Found<h2>"

            // Highlight the active menu item
            document.querySelectorAll(".menu a").forEach(a => a.classList.remove("active"));
            e.target.classList.add("active");
        })
    })
})