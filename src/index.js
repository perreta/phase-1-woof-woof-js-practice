document.addEventListener('DOMContentLoaded', () => {

    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            let span = document.createElement('span')

            span.textContent = element.name

            span.addEventListener('click', () => {
                document.getElementById('dog-info').innerHTML = ''
                let img = document.createElement('img')
                let h2 = document.createElement('h2')
                let button = document.createElement('button')

                img.src = element.image
                h2.textContent = element.name
                if (element.isGoodDog === true){
                    button.textContent = 'Good Dog'
                }
                if (element.isGoodDog === false){
                    button.textContent = 'Bad Dog'
                }

                document.getElementById('dog-info').append(img, h2, button)

                button.addEventListener('click', () => {
                    if (button.textContent === 'Good Dog'){
                        button.textContent = 'Bad Dog'
                    }
                    else /*(button.textContent === 'Bad Dog')*/{
                        button.textContent = 'Good Dog'
                    }
                })
            })

            document.getElementById('dog-bar').append(span)
        })
    })
})