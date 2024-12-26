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
