export const render = (users) => {
const commentsContainer = document.querySelector('.comments-container')
    console.log(commentsContainer)
    users.forEach(user => {
        commentsContainer.insertAdjacentHTML('beforeend', `
        <div class="review-margin-bottom row comment-item">
                    <div class="col-xs-3 col-sm-2">
                        <div class="review-user">
                            <img src="./images/users/${user.image}" alt="" class="img-responsive avatar">
                        </div>
                    </div>
                    <div class="col-xs-9 col-sm-9">
                        <div class="review-inner review-green review-arrow review-arrow-left">
                            <p class="text-normal">${user.author}</p>
                            <p>${user.comment}</p>
                        </div>
                    </div>
                </div>
        `)
    })
}