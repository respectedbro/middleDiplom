const animate = ({timing, draw, duration}) => {

    const start = performance.now();

    requestAnimationFrame(function animate(time) {

        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;


        const progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}

export {animate}

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

export {sendData}