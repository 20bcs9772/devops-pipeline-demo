document.addEventListener("DOMContentLoaded", () => {
  const log = document.getElementById("log");
  const messages = [
    "Initializing deployment...",
    "Running GitHub Actions workflow...",
    "Building static files...",
    "Deploying to GitHub Pages...",
    "✅ Deployment successful!"
  ];

  let i = 0;
  const interval = setInterval(() => {
    log.textContent += messages[i] + "\n";
    i++;
    if (i >= messages.length) clearInterval(interval);
  }, 1200);
});
