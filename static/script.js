function scroll_to(anchor) {
    document.getElementById(anchor).scrollIntoView()

    if (nav_buttons.classList.contains('disclosed')) {
        toggle_nav_buttons()
    }
}

function toggle_nav_buttons() {
    nav_buttons.classList.add('transition')
    nav_buttons.classList.toggle('disclosed')
    nav_menu_img.src = nav_buttons.classList.contains('disclosed') ? 'static/images/symbols/xmark.png' : 'static/images/symbols/line.3.horizontal.png'
    
    setTimeout(function() {
        nav_buttons.classList.remove('transition')
    }, 0.35 * 1000)
}
toggle_nav_buttons()

total_slides = 3
current_slide = 0
function next_slide() {
    intro.style.backgroundImage = `url('/static/images/slides/${current_slide}.jpeg')`
    current_slide = (current_slide + 1) % total_slides

    setTimeout(function() {
        next_slide()
    }, 5 * 1000)
}
next_slide()