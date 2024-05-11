function accordion() {
    const btns = document.querySelectorAll(".mobile-links__parent-btn");
    
    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
           
            const content = btn.nextElementSibling;
            console.log(content);

            const isActive = btn.classList.toggle('active');

            if (isActive) {
                // Раскрываем список на максимальную высоту
                // content.style.maxHeight = "100%";
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0px';
            }
        })
    });
    
}

export default accordion;