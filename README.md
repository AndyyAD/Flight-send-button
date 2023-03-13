# Flight-send-button
This is an animated button made by me using HTML, CSS and JavaScript.

When you press the send button, it creates a flight path and the plane which you see on the button flies off with your message. Isn't it a cool animation.

## Usage
To use this button, simply download the zip file or copy the HTML and CSS and paste them into your project. If you want you could optimise the code further and modify it according to your requirements.

This code is not responsive and few things changes when you press f11 and go to fullscreen. So you can freely optimize it according to your needs.

## Working
The flight path which you see after clicking the button is in the background itself. The button is adjusted according to it.

To hide the flight path I used a div with the same background color in top of it and used JavaScript to animate it. When we click the button the button moves to the left and the div covering the path moves all the way to the right thus revealing the path and itself gets hidden.

The following JavaScript code is used to animate the whole thing.

```JS
var btn = document.getElementById('BTN');

btn.addEventListener('click', (e) => {
    document.getElementById('btn-wrap').classList.add('move-btn');
    setTimeout(()=>{
        document.getElementById('scene').classList.add('move-plains')
    },1000) 
    setTimeout(()=>{
        document.getElementById('flight').classList.add('fly-plane')
    },3000) 
    setTimeout(()=>{
        document.getElementById('flight').classList.add('hide')
    },5000) 
})
```

To make the plane fly the following CSS code is used.

```css
.fly-plane{
    animation-name: fly;
    animation-duration: 2s;
    animation-timing-function: linear;
}

@keyframes fly {
    0% {
        transform: translate(0%, 0%);
    }
    25% {
        transform: translate(450%, 0%);
    }
    50% {
        transform: translate(900%, -150%);
    }
    75% {
        transform: translate(1350%, -250%);
    }
    100% {
        transform: translate(1800%, -320%);
    }
}
```

## Preview
https://user-images.githubusercontent.com/80671044/222528233-da90151d-bf89-4a5d-ac66-4be800b8938b.mp4
