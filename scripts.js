document.addEventListener('DOMContentLoaded', function () {
    const cookieToggle = document.getElementById('cookie-toggle');

    // Controlla se l'utente ha già accettato i cookie
    if (localStorage.getItem('cookieAccepted')) {
        cookieToggle.checked = true;
    }

    // Quando l'utente accetta i cookie
    cookieToggle.addEventListener('change', function () {
        if (cookieToggle.checked) {
            localStorage.setItem('cookieAccepted', 'true');
        }
    });
});

