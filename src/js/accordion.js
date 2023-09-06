

document.querySelectorAll('.sixth-screen__accordion-button').forEach((e) => {
    e.addEventListener('click', () => {
        let content = e.nextElementSibling;
        let accordionIcon = e.querySelector('.sixth-screen__accordion-icon');
        
        if (content.style.maxHeight) {
            document.querySelectorAll('.sixth-screen__accordion-content').forEach((e) => {
                e.style.maxHeight = null;
                let icon = e.previousElementSibling.querySelector('.sixth-screen__accordion-icon');
                icon.innerHTML = '+';
            });
        } else {
            document.querySelectorAll('.sixth-screen__accordion-content').forEach((e) => {
                e.style.maxHeight = null;
                let icon = e.previousElementSibling.querySelector('.sixth-screen__accordion-icon');
                icon.innerHTML = '+';
            });

            content.style.maxHeight = content.scrollHeight + 'px';
            accordionIcon.innerHTML = '-';
        }
    });
});
