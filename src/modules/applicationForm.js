export const applicationForm = ({elem = []}) => {
    const forms = document.querySelectorAll('.form-horizontal')

    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            if (input.value.trim() === '') {
                input.classList.add('error')

                success = false
            } else {
                input.classList.remove('error')
            }
        })
        return success
    }

    const sendData = (data) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Отправлено:', data)
            })
            .catch((error) => {
                console.error('Ошибка:', error)

            })
    }

    forms.forEach(form => {
        const feedbackBtn = form.querySelector('.feedback')
        const inputName = form.querySelector('.form-name')
        const inputPhone = form.querySelector('.form-phone')


        inputName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^A-Za-zА-Яа-я\s]/g, '');
        })

        inputPhone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9+]/g, '').substring(0, 17);
        })

        feedbackBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const formElements = form.querySelectorAll('input')
            const formData = new FormData(form)
            const formBody = {}

            formData.forEach((value, key) => {
                formBody[key] = value
            })

            elem.forEach(el => {
                const element = document.getElementById(el.id)
                if (element) {
                    if (el.type === 'input') {
                        formBody[el.id] = element.value
                    } else if (el.type === 'block') {
                        formBody[el.id] = element.textContent
                    }
                }

            })
            if (validate(formElements)) {
                sendData(formBody)
            }

        })
    })

}