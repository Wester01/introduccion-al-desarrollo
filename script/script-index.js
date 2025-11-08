document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro-screen");
  const skipBtn = document.getElementById("skip-intro");

  // Función para cerrar la intro
  const closeIntro = () => {
    if (!intro.classList.contains("fade-out")) {
      intro.classList.add("fade-out");
      setTimeout(() => intro.remove(), 800);
    }
  };

  // Cierre automático tras 2 s
  const autoClose = setTimeout(closeIntro, 2000);

  // Permitir “Saltar” manualmente
  skipBtn.addEventListener("click", () => {
    clearTimeout(autoClose);
    closeIntro();
  });

  // También si hace clic en cualquier parte
  intro.addEventListener("click", () => {
    clearTimeout(autoClose);
    closeIntro();
  });

  const cards = document.querySelectorAll(".tarjeta");
  cards.forEach(card => {
    card.style.boxShadow = 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px';
  });

  //efectos de las tarjetas
  const MAX_ELEVATION_Z = 20;//elevación máxima en el eje Z
  const MAX_ROTATION_DEG = 5; //ángulo máximo de rotación
  const SHADOW_INTENSITY = 15;//desplazamiento de la sombra
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      
      const rect = card.getBoundingClientRect();

      //posición del ratón relativa a la tarjeta
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      //centro de la tarjeta
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      //normalización de las coordenadas del ratón entre -1 (izda arriba) y 1 (dcha abajo)
      const offsetX = (x - centerX) / centerX;
      const offsetY = (y - centerY) / centerY;

      //elevación en el eje Z según la distancia al centro
      const absX = Math.abs(offsetX);
      const absY = Math.abs(offsetY);
      const elevationFactor = 1 - (absX + absY) / 2;
      const translatedZ = Math.max(0, elevationFactor) * MAX_ELEVATION_Z;


      //rotación según la posición del ratón
      const rotateX = -offsetY * MAX_ROTATION_DEG; 
      const rotateY = offsetX * MAX_ROTATION_DEG;

      //aplicación del estilo
      card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateZ(${translatedZ}px) 
            `;

      //sombra dinámica
      const shadowX = -offsetX * SHADOW_INTENSITY;
      const shadowY = -offsetY * SHADOW_INTENSITY;

      //sombra multicapa
      /* Capa 1: Sombra principal, utiliza la elevación (translatedZ) para el blur */
      /* Capa 2: Un poco más alejada */
      /* Capa 3: Más alejada */
      card.style.boxShadow = `
          ${shadowX}px ${shadowY}px 0 rgba(240, 46, 170, 0.4),
          ${shadowX * 1.5}px ${shadowY * 1.5}px 0 rgba(240, 46, 170, 0.3),
          ${shadowX * 2}px ${shadowY * 2}px 0 rgba(240, 46, 170, 0.2),
          ${shadowX * 2.5}px ${shadowY * 2.5}px 0 rgba(240, 46, 170, 0.1),
          ${shadowX * 3}px ${shadowY * 3}px 0 rgba(240, 46, 170, 0.05)
      `;
    });

    card.addEventListener('mouseleave', () => {
            // reiniciamos todas las transformaciones a su estado base (0)
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
            
            // restauramos sombra original:
            card.style.boxShadow = 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px';
    });
  });
});

const js_button = document.getElementById("js-button");
const php_button = document.getElementById("php-button");
const html_button = document.getElementById("html-button");
const css_button = document.getElementById("css-button");
const mysql_button = document.getElementById("mysql-button");
const xampp_button = document.getElementById("xampp-button");

xampp_button.addEventListener("click", () => {
  location.href = "pages/introduccion-a-xampp.html";
});

mysql_button.addEventListener("click", () => {
  location.href = "pages/introduccion-a-mysql.html";
});

css_button.addEventListener("click", () => {
  location.href = "pages/introduccion-a-css.html";
});

html_button.addEventListener("click", () => {
  location.href = "pages/introduccion-a-html.html";
});

php_button.addEventListener("click", () => {
  location.href = "pages/introduccion-a-php.html";
});
js_button.addEventListener("click", () => {
  location.href = "pages/introduccion-a-js.html";
});

/* === Animación de inicio === */
document.addEventListener("DOMContentLoaded", () => {
  
});
