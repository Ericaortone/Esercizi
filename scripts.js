document.addEventListener('DOMContentLoaded', () => {
  const acceptButton = document.getElementById('accept-button');
  const closeButton = document.getElementById('close-button');
  const popupToggle = document.getElementById('popup-toggle');

  // Nascondi il popup quando si clicca il pulsante "Accetta"
  acceptButton.addEventListener('click', () => {
    popupToggle.checked = true;
  });

  // Nascondi il popup quando si clicca il pulsante di chiusura
  closeButton.addEventListener('click', () => {
    popupToggle.checked = true;
  });
});
