
const browserInfo = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  languages: navigator.languages,
  appName: navigator.appName,
  appVersion: navigator.appVersion,
  vendor: navigator.vendor,
  cookieEnabled: navigator.cookieEnabled,
  online: navigator.onLine
};

localStorage.setItem("browserInfo", JSON.stringify(browserInfo));

const footer = document.querySelector("footer");
const data = JSON.parse(localStorage.getItem("browserInfo"));

footer.innerHTML += `
  <h3>Browser & OS Info</h3>
  <p><strong>User Agent:</strong> ${data.userAgent}</p>
  <p><strong>Platform:</strong> ${data.platform}</p>
  <p><strong>Language:</strong> ${data.language}</p>
  <p><strong>Languages:</strong> ${data.languages}</p>
  <p><strong>Browser:</strong> ${data.appName}</p>
  <p><strong>Version:</strong> ${data.appVersion}</p>
  <p><strong>Vendor:</strong> ${data.vendor}</p>
  <p><strong>Cookies enabled:</strong> ${data.cookieEnabled}</p>
  <p><strong>Online:</strong> ${data.online}</p>
`;


fetch("https://jsonplaceholder.typicode.com/posts/4/comments")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("comments");

    data.forEach(comment => {
      const block = document.createElement("div");
      block.classList.add("comment-block");

      block.innerHTML = `
        <strong>${comment.name}</strong><br>
        <small>${comment.email}</small>
        <p>${comment.body}</p>
      `;

      container.appendChild(block);
    });
  });


const modal = document.getElementById("modal");
const contactBtn = document.getElementById("contactBtn");
const closeModal = document.getElementById("closeModal");

contactBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

setTimeout(() => {
  modal.style.display = "block";
}, 60000);


const toggleBtn = document.getElementById("themeToggle");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const hour = new Date().getHours();
  if (hour < 7 || hour >= 21) {
    applyTheme("dark");
  }
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});