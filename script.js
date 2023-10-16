document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello I'm Sabah Abderrahmane\nI'm from France, Paris metropolitain area.\nI'm a 2 year student at SUPINFO Paris.\nAnd I'm currently looking for an internship from mid-June to mid-August.\nIn addition to my studies, I work as a manager at McDonald's.";
    const textContainer = document.getElementById("typewriter-text");
    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            textContainer.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 50); // Contrôle la vitesse de dactylographie (50 millisecondes)
        }
    }

    type(); // Commence l'effet dactylographique
});
