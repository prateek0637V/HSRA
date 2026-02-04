document.addEventListener('DOMContentLoaded', function () {

    // Scroll Smoothness for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Console log to confirm static mode
    console.log("HSRA Website Loaded - Frontend Only Mode");
});
