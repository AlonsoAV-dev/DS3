function toExchangeImage(miniatura) {
    const imgMain = document.getElementById('img_main');
    
    imgMain.src = miniatura.src;
    imgMain.alt = miniatura.alt;
    
    document.querySelectorAll('.miniatura-container').forEach(container => {
        container.classList.remove('border-blue-500', 'border-2');
        container.classList.add('border-gray-300');
    });
    
    const container = miniatura.closest('.miniatura-container');
    if (container) {
        container.classList.remove('border-gray-300');
        container.classList.add('border-blue-500', 'border-2');
    }
}

function showMore() {
    const moreText = document.getElementById("more-text");
    const btnText = document.getElementById("show-more-btn");
    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        btnText.innerHTML = "Leer menos";
    } else {
        moreText.classList.add("hidden");
        btnText.innerHTML = "Leer más";
    }
}


