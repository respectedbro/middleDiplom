import {animate} from "./helpers";

export const modalHeader = () => {
    const callBtn = document.querySelector('.button')
    const modal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const closeBtn = modal.querySelector('.header-modal__close')
    const btn = modal.querySelector('.btn-warning')


    modal.style.opacity = 0
    modal.style.visibility = 'hidden'

    overlay.style.opacity = 0
    overlay.style.visibility = 'hidden'

    const animateOnModal = () => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = progress
                modal.style.visibility = 'visible'
                overlay.style.opacity = progress
                overlay.style.visibility = 'visible'
            }
        });
    }

    const animateOutModal = () => {
        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = 1 - progress
                overlay.style.opacity = 1 - progress
                if (progress === 1) {
                    modal.style.visibility = 'hidden'
                    modal.style.display = 'none'
                    overlay.style.visibility = 'hidden'
                    overlay.style.display = 'none'
                }

            }
        });
    }

    const openModal = () => {
        animateOnModal()
    }

    const closeModal = () => {
        animateOutModal()
    }

    callBtn.addEventListener('click', openModal)
    closeBtn.addEventListener('click', closeModal)

    btn.addEventListener('click', (e) => {
        e.preventDefault()
    })

    overlay.addEventListener('click', (e) => {
        if (e.target.closest('.overlay')) {
            closeModal()
        }
    })
}