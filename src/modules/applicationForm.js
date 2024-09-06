export const applicationForm = () => {
    const feedbackBtn = document.querySelector('.feedback')
    const inputName = document.getElementById('form-name')
    const inputPhone = document.getElementById('form-phone')


    inputName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-zА-Яа-я\s]/g, '')
    })
    inputPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9+]/g, '').substring(0, 17)
    })
    feedbackBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const name = inputName.value
        const phone = inputPhone.value

        const formData = {
            name: name,
            phone: phone
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Отправлено:', data)
            })
            .catch((error) => {
                console.error('Ошибка:', error)

            })
    })
}