document.querySelectorAll('.sixth-screen__accordion-button').forEach((e) => {
    e.addEventListener('click', () => {
        let content = e.nextElementSibling
        if(content.style.maxHeight){
            document.querySelectorAll('.sixth-screen__accordion-content').forEach((e) => {
                e.style.maxHeight = null
            })
        }else{
            document.querySelectorAll('.sixth-screen__accordion-content').forEach((e) => {
                e.style.maxHeight = null
            })
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    } )
})