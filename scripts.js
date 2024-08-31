// Mostra il pulsante quando si scorre oltre 200px
window.onscroll = function() {
    let scrollTopButton = document.getElementById("scrollTopButton");
    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // Mostra il pulsante se si è scorsi oltre 200px
        scrollTopButton.style.display = "block";
    } else {
        // Nasconde il pulsante se si è tornati in cima
        scrollTopButton.style.display = "none";
    }
};

// Scorrimento verso l'alto con animazione
document.getElementById("scrollTopButton").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
