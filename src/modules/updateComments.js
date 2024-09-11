import { render } from './render'

export const updateComments = () => {
    const commentsContainer = document.querySelector('.comments-container')
    commentsContainer.innerHTML = `<div class="custom-loader"></div>`

    let comments = []
    let startIndex = 0

    const displayComments = () => {

        commentsContainer.innerHTML = ''

        const usersRender = []
        for (let i = 0; i < 3; i++) {
            usersRender.push(comments[(startIndex + i) % comments.length])
        }

        render({ comments: usersRender })
    }

    const rotateComments = () => {
        startIndex = (startIndex + 1) % comments.length;
        displayComments()
    }

    fetch('http://localhost:8080/comments.json')
        .then(response => response.json())
        .then(data => {
            comments = data.comments;
            displayComments()
            setInterval(rotateComments, 5000)
        })
        .catch(error => {
            console.error('Ошибка при загрузке комментариев:', error)
        })
}