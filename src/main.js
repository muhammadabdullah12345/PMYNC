import "../src/style.css";
import "../components/navbar.css";
import "../components/footer.css";

async function loadComponent(id, filePath) {
  try {
    const response = await fetch(filePath);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

// Load shared components
loadComponent("navbar", "/components/navbar.html");
loadComponent("footer", "/components/footer.html");
