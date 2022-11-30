// Load when document is ready
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("main-menu")
    const open = document.getElementById("open-yes")
    const close = document.getElementById("ham-close")

    open.addEventListener("click", () => {
        menu.style.display = "flex"
    })

    close.addEventListener("click", () => {
        menu.style.display = "none"
    })
})