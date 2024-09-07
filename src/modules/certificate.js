import {animate} from "./helpers";

export const certificate = () => {
    const certificateDocs = document.querySelectorAll('.sertificate-document')
    const overlay = document.querySelector('.overlay')

    const modalImage = document.createElement('img')
    modalImage.style.cssText = `
        display: block;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
    `

    overlay.append(modalImage)

    const animateOnModal = (elem) => {
        elem.style.display = 'block';
        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                elem.style.opacity = progress
                elem.style.visibility = 'visible'
            }
        });
    }
    certificateDocs.forEach(doc => {
        const documentOverlay = doc.querySelector('.document-overlay')

        doc.addEventListener('mouseenter', () => {
            documentOverlay.style.opacity = '1'
        })

        doc.addEventListener('mouseleave', () => {
            documentOverlay.style.opacity = '0'
        })

        doc.addEventListener('click', (e) => {
            e.preventDefault()
            const imageSrc = doc.getAttribute('href')
            modalImage.src = imageSrc

            animateOnModal(overlay);
        })
    })
}