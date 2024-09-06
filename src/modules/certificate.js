export const certificate = () => {
    const certificateDocs = document.querySelectorAll('.sertificate-document')



certificateDocs.forEach(doc => {
    const documentOverlay = doc.querySelector('.document-overlay')

    doc.addEventListener('click', (e) => {
        e.preventDefault()

    })
})

}