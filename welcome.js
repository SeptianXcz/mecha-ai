document.addEventListener('DOMContentLoaded', async () => {
let musik = document.getElementById('musik');

Swal.fire({
title: "Welcome To",
text: "Chat AI by SuryaDev",
imageUrl: "https://feeldreams.github.io/cilukba.gif",
imageWidth: 200,
imageHeight: 200,
imageAlt: "SuryaDev"
}).then(async() => await musik.play())
})