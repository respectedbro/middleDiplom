export const timer = (deadline) => {
    const timerDays = document.querySelector('.count_1>span')
    const timerHours = document.querySelector('.count_2>span')
    const timerMinutes = document.querySelector('.count_3>span')
    const timerSeconds = document.querySelector('.count_4>span')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        return {timeRemaining, days, hours, minutes, seconds}

    }

    const addTimeZero = (time) => {
        if (time < 10) {
            return '0' + time
        } else {
            return time
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()
        timerDays.textContent = addTimeZero(getTime.days)
        timerHours.textContent = addTimeZero(getTime.hours)
        timerMinutes.textContent = addTimeZero(getTime.minutes)
        timerSeconds.textContent = addTimeZero(getTime.seconds)

        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000)
        }

    }

    updateClock()

}