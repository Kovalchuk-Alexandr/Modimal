function favorite() {
    const btns = document.querySelectorAll(".card__btn-fav");

    btns.forEach(function(btn) {
        btn.addEventListener("click", function () {
            // console.log('btn: ');
            // console.log(btn);
            // console.log('-----------------');
            
            const svg = btn.querySelector('.icon--favorite');
            
            const isActive = btn.classList.toggle("active");

            if (isActive) {
                svg.style.fill = "#C30000";
                svg.style.stroke = "#C30000";
            } else {
                svg.style.fill = "#fff";
                svg.style.stroke = "#0c0c0c";
            }
        });
    });
}

export default favorite;