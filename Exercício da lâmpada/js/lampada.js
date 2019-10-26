const lamp1 = document.getElementById('Lamp1')
lamp1.addEventListener('click', () => {
    if (lamp1.src.match('images/lampada.jpg')) {
        lamp1.src = 'images/lampada-on.jpg'
    } else {
        lamp1.src = 'images/lampada.jpg'
    }
})
const lamp2 = document.getElementById('Lamp2')

lamp2.addEventListener('mouseover', () => {
    lamp2.src = 'images/lampada-on.jpg'
})

lamp2.addEventListener('mouseout', () => {
        lamp2.src = 'images/lampada.jpg'
    }

)