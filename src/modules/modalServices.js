import {animate} from "./helpers";
import {sendData} from "./helpers";

export const modalServices = () => {
    const modal = document.querySelector('.services-modal')
    const servicesBtn = document.querySelectorAll('.service-button')
    const overlay = document.querySelector('.overlay')
    const modalClose = document.querySelector('.services-modal__close')
    const modalForm = document.querySelector('.application-form')
    const btnSuccess = modal.querySelector('.btn-success')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка валидации'
    const successText = 'Спасибо, данные отправлены'

    const statusBlock = document.createElement('div')

    modal.style.opacity = 0
    modal.style.visibility = 'hidden'

    overlay.style.opacity = 0
    overlay.style.visibility = 'hidden'

    const animateOnModal = () => {
        modal.style.display = 'block'
        overlay.style.display = 'block'
        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction
            },
            draw(progress) {
                modal.style.opacity = progress
                modal.style.visibility = 'visible'
                overlay.style.opacity = progress
                overlay.style.visibility = 'visible'
                overlay.style.zIndex = '9'
            }
        });
    }

    const animateOutModal = () => {
        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction
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

    servicesBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal()
        })
    })

    modalClose.addEventListener('click', closeModal)

    btnSuccess.addEventListener('click', (e) => {
        e.preventDefault()

        const formElements = modalForm.querySelectorAll('input')
        const formData = new FormData(modalForm)
        const formBody = {}

        statusBlock.textContent = loadText
        statusBlock.style.textAlign = 'center'
        statusBlock.style.backgroundColor = '#f4f6fa'
        modal.append(statusBlock)

        if (formElements) {
            statusBlock.textContent = successText
            statusBlock.style.color = 'green'
            sendData(formBody)
        } else {
            statusBlock.textContent = errorText
            statusBlock.style.color = 'red'
        }
    })

    overlay.addEventListener('click', (e) => {
        if (e.target.closest('.overlay')) {
            closeModal()
        }
    })
}