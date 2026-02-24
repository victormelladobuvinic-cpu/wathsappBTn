document.addEventListener("DOMContentLoaded", function() {
    // Tu número de WhatsApp (con código de país, sin +)
    const phone = "56975258840";
    const message = "Hola, necesito más información";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Crear el elemento del botón
    const button = document.createElement("a");
    button.href = url;
    button.className = "whatsapp-button";
    button.target = "_blank";
    button.innerHTML = '<i class="fab fa-whatsapp"></i>'; // Requiere FontAwesome

    // O una alternativa sin FontAwesome (usando texto/emoji):
    // button.innerHTML = '💬';

    // Insertar en el contenedor
    document.getElementById("whatsapp-container").appendChild(button);
});
