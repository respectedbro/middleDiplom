export const scrollTop = () => {
    const scrollBtn = document.querySelector('.smooth-scroll')
    const firstSection = document.querySelector('.scroll')

    const checkScroll = () => {
        const sectionBound = firstSection.getBoundingClientRect();

        if (sectionBound.top < 0) {
            scrollBtn.style.display = 'block'
        } else {
            scrollBtn.style.display = 'none'
        }
    }

    window.addEventListener('scroll', checkScroll);

    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    checkScroll()
}