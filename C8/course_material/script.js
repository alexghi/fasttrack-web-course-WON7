setTimeout(() => {

    console.log('called now')

    var button1 = document.querySelector('#button1');
    var button2 = document.querySelector('#button2');


    var onButton1Click = () => {
        console.log('btn1 clicked')
    };

 
    var onButton2Click = () => {
        console.log('btn2 clicked')
        button1.removeEventListener('click', onButton1Click)
    }
 
    button1.addEventListener( 'click', onButton1Click)
    button2.addEventListener( 'click', onButton2Click)
 
    console.log('registered all listeners')

    
}, 2000)