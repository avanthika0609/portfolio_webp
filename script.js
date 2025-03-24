const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with HTML, CSS, and JavaScript showcasing my skills and projects.",
    link: "hfile:///Users/parvathivenkat/avanthika_html/index.html"
  },
  {
    title: "AI Chatbot",
    description: "Developed an AI-powered chatbot using Python and NLP libraries to assist users with common queries.",
    link: "https://github.com/yourusername/chatbot"
  },
  {
    title: "Weather App",
    description: "A real-time weather application fetching data using OpenWeather API and displaying forecasts beautifully.",
    link: "https://github.com/yourusername/weatherapp"
  }
];

let currentProject = 0;

function showProject(index) {
  document.getElementById('project-title').textContent = projects[index].title;
  document.getElementById('project-description').textContent = projects[index].description;
  document.getElementById('project-link').href = projects[index].link;
}

function nextProject() {
  currentProject = (currentProject + 1) % projects.length;
  showProject(currentProject);
}

function prevProject() {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  showProject(currentProject);
}

// Initialize first project
showProject(currentProject);
