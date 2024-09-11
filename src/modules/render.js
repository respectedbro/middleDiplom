export const render = (users) => {
    const commentsContainer = document.querySelector('.comments-container')
    const usersRender = users.comments.slice(0, 3)

    usersRender.forEach((user, index) => {
        console.log(user)
        const imageSrc = user.image ? `./images/users/${user.image}` : './images/users/placeholder.png'

        commentsContainer.insertAdjacentHTML('beforeend', `
            <div class="review-margin-bottom row comment-item">
                ${index % 2 === 0 ? `
                <div class="col-xs-3 col-sm-2">
                    <div class="review-user">
                        <img src="${imageSrc}" alt="" class="img-responsive avatar">
                    </div>
                </div>
                <div class="col-xs-9 col-sm-9">
                    <div class="review-inner review-green review-arrow review-arrow-left">
                        <p class="text-normal">${user.author}</p>
                        <p>${user.comment}</p>
                    </div>
                </div>
                ` : `
                <div class="col-xs-9 col-sm-9">
                    <div class="review-inner review-gray review-arrow review-arrow-right">
                        <p class="text-normal">${user.author}</p>
                        <p>${user.comment}</p>
                    </div>
                </div>
                <div class="col-xs-3 col-sm-2">
                    <div class="review-user">
                        <img src="${imageSrc}" alt="" class="img-responsive avatar">
                    </div>
                </div>
                `}
            </div>
        `)
    })
}
