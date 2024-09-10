export const render = (users) => {
const commentsContainer = document.querySelector('.comments-container')
    console.log(commentsContainer)
    users.forEach(user => {
        commentsContainer.insertAdjacentHTML('beforeend', `
        <div class="review-margin-bottom row comment-item">
                    <div class="col-xs-3 col-sm-2">
                        <div class="review-user">
                            <img src="./images/users/face4.png" alt="" class="img-responsive avatar">
                        </div>
                    </div>
                    <div class="col-xs-9 col-sm-9">
                        <div class="review-inner review-green review-arrow review-arrow-left">
                            <p class="text-normal">Алексей Панкратов</p>
                            <p>Не люблю писать отзывы, но в данном случае решил помочь компании, потому что неоднократно
                                обращался в другие организации со своими просьбами, но либо не было компетентного
                                сотрудника, либо навязывали стандартные решения. У меня коттедж, и мне нужны были
                                нестандартные цветные окна, чтобы не нарушать дизайн интерьера моего дома. Еще один
                                момент, после обращения, ко мне загород бесплатно отправили мастера для обсуждения моего
                                заказа. Парень отработал на отлично, помог с решением технических моментов!</p>
                        </div>
                    </div>
                </div>
        `)
    })
}