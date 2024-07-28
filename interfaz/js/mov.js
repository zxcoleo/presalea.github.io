document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Define CSS keyframes for falling and rotating animations
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes falling {
            to { top: ${window.innerHeight + 500}px; }
        }
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Select the existing image element from HTML
    const originalImg = document.getElementById('juice-box');

    // Function to create and animate a juice box
    function createAndAnimateJuiceBox() {
        // Clone the original image element
        const img = originalImg.cloneNode(true);
        
        img.style.display = 'block'; // Ensure it's visible
        img.style.position = 'fixed';
        img.style.maxWidth = '50px';
        img.style.height = 'auto';
        img.style.zIndex = '15';
        img.style.pointerEvents = 'none';

        // Generate a random starting position
        const startX = Math.random() * window.innerWidth;
        img.style.left = `${startX}px`;

        // Adjust initial top position to start further off-screen
        img.style.top = '-150px'; // Start further above the screen

        // Append the cloned image to the body
        body.appendChild(img);

        // Add animation for falling and rotating with random durations
        const fallingDuration = 4 + Math.random() * 2; // between 4 and 6 seconds
        const rotateDuration = 5 + Math.random(); // between 5 and 6 seconds
        img.style.animation = `falling ${fallingDuration}s linear forwards, rotate ${rotateDuration}s linear infinite`;

        // Remove the cloned image after it has fallen out of view to clean up DOM
        setTimeout(() => {
            img.remove();
        }, fallingDuration * 1000); // Match the timeout to the falling duration
    }

    // Create initial set of juice boxes
    for (let i = 0; i < 9; i++) {
        createAndAnimateJuiceBox();
    }

    // Continuously create new juice boxes at random intervals
    setInterval(createAndAnimateJuiceBox, 1000); // Adjust interval as needed
});



  // Lista de URLs de imágenes

  document.addEventListener("DOMContentLoaded", function() {
    var index = 0; // Índice de la imagen actual
    var images = document.querySelectorAll('.side-image'); // Obtener todas las imágenes

    function changeImage() {
      images[index].style.display = 'none'; // Ocultar la imagen actual
      index = (index + 1) % images.length; // Cambiar al siguiente índice circularmente
      images[index].style.display = 'block'; // Mostrar la siguiente imagen
    }

    setInterval(changeImage, 2000); // Cambiar cada 3 segundos (3000 milisegundos)
  });









  document.addEventListener('DOMContentLoaded', () => {
    function getRandomColor() {
        const colors = [
            'linear-gradient(90deg, rgba(255, 105, 180, 1) 50%, rgba(255, 20, 147, 0.966) 80%)',  // Deep Pink
            'linear-gradient(90deg, rgba(173, 216, 230, 1) 50%, rgba(70, 130, 180, 0.966) 80%)',  // Steel Blue
            'linear-gradient(90deg, rgba(144, 238, 144, 1) 50%, rgba(34, 139, 34, 0.966) 80%)',  // Forest Green
            'linear-gradient(90deg, rgba(255, 255, 224, 1) 50%, rgba(255, 215, 0, 0.966) 80%)',  // Gold
            'linear-gradient(90deg, rgba(255, 192, 203, 1) 50%, rgba(255, 105, 97, 0.966) 80%)',  // Light Coral
            'linear-gradient(90deg, rgba(255, 228, 225, 1) 50%, rgba(255, 160, 122, 0.966) 80%)',  // Light Salmon
            'linear-gradient(90deg, rgba(240, 248, 255, 1) 50%, rgba(176, 224, 230, 0.966) 80%)',  // Powder Blue
            'linear-gradient(90deg, rgba(250, 240, 230, 1) 50%, rgba(255, 228, 181, 0.966) 80%)'   // Blanched Almond
        ];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    // Seleccionar el primer elemento con la clase .purchase-interface
    const purchaseInterfaces = document.querySelectorAll('.purchase-interface');
    if (purchaseInterfaces.length > 0) {
        // Cambiar el fondo de cada elemento con la clase .purchase-interface
        purchaseInterfaces.forEach(element => {
            element.style.background = getRandomColor();
        });
    } else {
        console.error('Elemento con la clase "purchase-interface" no encontrado.');
    }
});


