const buttons = document.querySelectorAll('#humanButtons img')
const main = document.querySelector('#main')
const result = document.querySelector('#block')
const retry = document.querySelector('#retry')
const box = document.querySelector('#boxs')
const item = ['rock', 'paper', 'scissors']

let robot = []
let human = []
let randomItem = ''

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        randomNumber()
        switch(randomItem) {
            case 'rock' : 
            robotImgShow(1)
            if(button.className === 'rock') {
                return
            } else if(button.className === 'paper') {
                human.push(button.className)
                appendImg(1, createImg("img/paper.png"))
            } else if(button.className === 'scissors') {
                robot.push(randomItem)
                appendImg(0, createImg("img/rock.png"))
            }
            break;

            case 'paper' : 
            robotImgShow(2)
            if(button.className === 'rock') {
                robot.push(randomItem)
                appendImg(0, createImg("img/paper.png"))
            } else if(button.className === 'paper') {
                return
            } else if (button.className === 'scissors') {
                human.push(button.className)
                appendImg(1, createImg("img/scissors.png"))
            }
            break;

            case 'scissors' : 
            robotImgShow(3)
            if(button.className === 'rock') {
                human.push(button.className)
                appendImg(1, createImg("img/rock.png"))
            } else if(button.className === 'paper') {
                robot.push(randomItem)
                appendImg(0, createImg("img/scissors.png"))
            } else if(button.className === 'scissors') {
                return
            }
            break;
        }
        if(robot.length > 2) {
            win("Robot Win")
        } else if (human.length > 2) {
            win("You Win")
        }
    })
})

function randomNumber() {
    const randomIndex = Math.ceil(Math.random() * item.length - 1)
    return randomItem = item[randomIndex]
}

retry.addEventListener('click', () => {
    robot = []
    human = []
    result.removeAttribute('class', 'active')
    itemRemove(0)
    itemRemove(1)
    robotImgReset()
})

function itemRemove(val) {
    while (box.children[val].firstChild) {
        box.children[val].removeChild(box.children[val].firstChild)
    }
}

function win(val) {
    result.setAttribute('class', 'active')
    result.querySelector('h1').innerText = val
}

function createImg(src) {
    const img = document.createElement('img')
          img.src = src
    return img
}

function appendImg(val, child) {
    box.children[val].appendChild(child)
}

function robotImgShow(val) {
   for(let i=1; i <= 3; i++) {
    main.children[0].children[i].removeAttribute('name', 'active');
   }
    main.children[0].children[val].setAttribute('name', 'active');
    setTimeout(() => {
        main.children[0].children[val].removeAttribute('name', 'active');
    }, 802)
}

function robotImgReset() {
   for(let i=1; i <= 3; i++) {
    main.children[0].children[i].removeAttribute('name', 'active');
   }
}
