// Search Feature Code
document.getElementById('searchInput').addEventListener('input', function(e) {
    let searchTerm = e.target.value.toLowerCase();
    let cards = document.querySelectorAll('.note-card');

    cards.forEach(card => {
        let titleData = card.getAttribute('data-title');
        if(titleData.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Card Click Alert Function
function openNote(noteName) {
    alert("🎉 Aapka '" + noteName + "' khul raha hai! (Aap yahan apna pdf link ya naya page jodh sakte hain)");
}

// Share Button Feature (Apne dosto ko link bejhne ke liye)
document.getElementById('shareBtnWebsite').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: 'Strawberry Notes 🍓',
            text: 'Bhai, meri personal notes website check kar!',
            url: window.location.href
        }).then(() => {
            console.log('Successfully shared');
        }).catch((error) => {
            console.log('Error sharing:', error);
        });
    } else {
        alert("Aapki website ka link copy ho gaya hai! Kahi bhi share karein: " + window.location.href);
    }
});
