function copyCode(button) {
  const codeElement = button.closest(".code-block").querySelector("code");
  const text = codeElement.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const original = button.textContent;
    button.textContent = "✅ Copiado";
    setTimeout(() => (button.textContent = original), 2000);
  });
}

// --- Renderizar el código dentro del bloque de resultado ---
document.querySelectorAll("[data-exec]").forEach(block => {
  const code = block.closest(".code-block").querySelector("code").innerText;
  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.minHeight = "150px";
  iframe.style.border = "none";
  iframe.sandbox = "allow-scripts allow-same-origin"; // seguridad básica
  block.appendChild(iframe);
  iframe.srcdoc = code; // ejecuta el código dentro del iframe
});


function copyHTML(button) {
  const codeElement = button.closest(".html-viewer").querySelector("code");
  const text = codeElement.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const original = button.textContent;
    button.textContent = "✅ Copiado";
    setTimeout(() => (button.textContent = original), 2000);
  });
}

// ======== ÍNDICE FLOTANTE ========
const floatBtn = document.getElementById("floatBtn");
const floatMenu = document.getElementById("floatMenu");

floatBtn.addEventListener("click", () => {
  if (floatMenu.classList.contains("show")) {
    floatMenu.classList.remove("show");
    setTimeout(() => {
      floatMenu.style.display = "none";
    }, 300); // coincide con la duración del CSS
  } else {
    floatMenu.style.display = "flex";

    void floatMenu.offsetWidth;

    floatMenu.classList.add("show");
  }
});
// Generar índice automáticamente
function generateMenu() {
  const headers = document.querySelectorAll("h2, h3");
  let menuHTML = `<a href="#top" class="top-link">⬆️ Subir</a>`;
  
  headers.forEach(h => {
    const id = h.id || h.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    h.id = id;
    const indent = h.tagName === "H3" ? "&nbsp;&nbsp;• " : "• ";
    menuHTML += `<a href="#${id}">${indent}${h.textContent}</a>`;
  });
  floatMenu.innerHTML = menuHTML;
}

generateMenu();
// == Cerrar el menú al pulsar la pantalla ==
const main = document.querySelector('main');

main.addEventListener("click", () => {
  floatMenu.classList.remove("show");
  setTimeout(() => {
    floatMenu.style.display = "none";
  }, 300);
});