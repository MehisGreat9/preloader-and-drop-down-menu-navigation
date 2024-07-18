document.addEventListener("DOMContentLoaded", function(){
    let percentageElement = document.getElementById('percentage');
    let preloader = document.querySelector('.preloader');
    let content = document.querySelector('.content');
    let progress = 0;
    let interval = setInterval(function(){
        progress += 1;
        percentageElement.textContent = progress + '%';
        if(progress >= 100){
            clearInterval(interval);
            setTimeout(function(){
                preloader.classList.add('hidden');
            }, 1000);
        }
    }, 30);
});