export const timer = (deadline) => {
    const countdown = document.querySelectorAll('.countdown')


    countdown.forEach(timer => {
        const timerDays = timer.querySelector('.count_1>span')
        const timerHours = timer.querySelector('.count_2>span')
        const timerMinutes = timer.querySelector('.count_3>span')
        const timerSeconds = timer.querySelector('.count_4>span')

        let timeout

        const getTimeRemaining = () => {
            const dateStop = new Date(deadline).getTime()
            const dateNow = new Date().getTime()
            const timeRemaining = (dateStop - dateNow) / 1000
            const days = Math.floor(timeRemaining / 60 / 60 / 24)
            const hours = Math.floor((timeRemaining / 60 / 60) % 24)
            const minutes = Math.floor((timeRemaining / 60) % 60)
            const seconds = Math.floor(timeRemaining % 60)

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
            const getTime = getTimeRemaining()
            timerDays.textContent = addTimeZero(getTime.days)
            timerHours.textContent = addTimeZero(getTime.hours)
            timerMinutes.textContent = addTimeZero(getTime.minutes)
            timerSeconds.textContent = addTimeZero(getTime.seconds)

            if (getTime.timeRemaining < 0) {
                timerDays.textContent = '00'
                timerHours.textContent = '00'
                timerMinutes.textContent = '00'
                timerSeconds.textContent = '00'
                clearTimeout(timeout)
                return
            }
            timeout = setTimeout(updateClock, 1000)
        }

        updateClock()
    })

}