var validation = 0

var submit = document.querySelector("#ssub")
var b1 = document.querySelector("#b1")
var b2 = document.querySelector("#b2")
var b3 = document.querySelector("#b3")
var b4 = document.querySelector("#b4")
var b5 = document.querySelector("#b5")

list = [b1,b2,b3,b4,b5]

function selbutton(a){
    if (a ==1){
        validation = 1
        b1.style.backgroundColor = '#7c8798'
        b1.style.color = 'white'
        reclick(1)
    }

    if (a==2){
        validation = 2
        b2.style.backgroundColor = '#7c8798'
        b2.style.color = 'white'
        reclick(2)
    }
    
    if (a==3){
        validation = 3
        b3.style.backgroundColor = '#7c8798'
        b3.style.color = 'white'
        reclick(3)
    }
    if (a==4){
        validation = 4
        b4.style.backgroundColor = '#7c8798'
        b4.style.color = 'white'
        reclick(4)
    }

    if (a==5){
        validation = 5
        b5.style.backgroundColor = '#7c8798'
        b5.style.color = 'white'
        reclick(5)
    }
}

b1.addEventListener('mouseenter',function a(){
    mouseenter(1)
})

b2.addEventListener('mouseenter',function a(){
    mouseenter(2)
})

b3.addEventListener('mouseenter',function a(){
    mouseenter(3)
})

b4.addEventListener('mouseenter',function a(){
    mouseenter(4)
})

b5.addEventListener('mouseenter',function a(){
    mouseenter(5)
})

function mouseenter(button){
    button -=1
    list[button].style.backgroundColor = '#fb7413'
    list[button].style.color = 'white'
    
    if (validation ==button+1) {
        list[button].addEventListener('mouseout',function b(){
            list[button].style.backgroundColor = '#7c8798'
            list[button].style.color = 'white'
        })
        } else{
            list[button].addEventListener('mouseout',function b(){
                list[button].style.backgroundColor = '#252d37'
                list[button].style.color = '#7c8798'
                if (validation ==button+1){
                    list[button].style.backgroundColor = '#7c8798'
                    list[button].style.color = 'white'
                }
            })
    }    
}

function reclick(a){
    for (let pos in list){
        if (pos != a-1){
            list[pos].style.color = '#7c8798'
            list[pos].style.backgroundColor = '#252d37'
        }
    }
}

function sub(){
    if (validation != 0){
        alert(validation)
    }
}

