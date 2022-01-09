let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/*
画一个太极
*/
#html{
    width: 500px;
    word-wrap:break-word;
    background: #ccc;
    text-indent:100px;
    background: rgba(108, 105, 110, 0.2);
    border-radius: 25px;
    margin: 15px;
    padding: 15px;
    box-shadow: 2px 10px 5px rgba(34, 33, 33, 0.5);
    overflow-y: scroll;
}
#tu{
    width:400px;
    height:400px;
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    background: linear-gradient(90deg,
    rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 49%, rgba(0,0,0,1) 49%,
     rgba(0,0,0,1) 100%);
}
#tu::after{
    content:"";
    display:block;
    width:200px;
    height:200px;
    position:absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 28%, 
    rgba(0,0,0,1) 29%, 
    rgba(0,0,0,1) 100%,
    rgba(255,255,255,1) 100%);
}
#tu::before{
    content:"";
    display:block;
    width:200px;
    height:200px;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#fff;
    background: radial-gradient(circle,
    rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 0%, 
    rgba(0,0,0,1) 0%, 
    rgba(255,255,255,1) 0%, 
    rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 25%, 
    rgba(255,255,255,1) 26%, 
    rgba(255,255,255,1) 100%);
}
`
let n = -1
let string1 = ' '

console.log(string.length)
let ding = () => {
    setTimeout(function () {
        n += 1
        html.innerHTML = string.substring(0, n)
        if (string[n] == '\n') {
            string1 += "<br/>"
        } else if (string[n] === " ") {
            console.log(666)
            string1 += "&nbsp"
        }
        string1 += string[n]
        html.innerHTML = string1
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            ding()
        }
    }, 10)
}
ding()