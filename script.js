document.addEventListener('DOMContentLoaded', () => {
    // Randomize the positions and shapes of .patch elements
    document.querySelectorAll('.patch').forEach((patch, i) => {
        let b = i + 1;
        let rX = Math.floor(Math.random() * 50);
        let rY = Math.floor(Math.random() * 100);
        let rH = Math.floor(Math.random() * 10) + 15;

        patch.style.left = `${i - 1}vw`;
        patch.style.height = `${rH}vh`;
        patch.style.clipPath = `polygon(${rX}% ${rX}%, 0% 100%, 100% 100%)`;
    });

    // Randomize the rotation of .cross elements
    document.querySelectorAll('.cross').forEach((cross, i) => {
        let b = i + 1;
        let rR = Math.floor(Math.random() * 15) * Math.cos(Math.PI * Math.round(Math.random()));
        cross.style.transform = `rotateZ(${rR}deg)`;
    });

    // Randomize the position of .star elements
    document.querySelectorAll('.star').forEach((star, i) => {
        star.style.top = `${Math.random() * document.documentElement.scrollHeight - document.documentElement.scrollHeight / 4}px`;
        star.style.left = `${Math.random() * document.documentElement.scrollWidth}px`;
    });

    // Initialize animation
    const init = () => {
        document.querySelector('.crypt').style.transform = `translateX(-50%) rotateZ(${Math.floor(Math.random() * 5) * Math.cos(Math.PI * Math.round(Math.random()))}deg)`;

        const title = document.querySelector('.title');
        title.style.transition = 'top 5s';
        title.style.top = '45%';

        setTimeout(() => {
            title.classList.add('life');
            document.querySelector('.msg').style.display = 'block';
            document.querySelector('.msg').style.opacity = 1;
        }, 5000);
    };

    init();
});
