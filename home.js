console.log('------------------');


// var doc = '<div><h2 id="heading">My First Web page</h2></div>';



// var doc = {
//     div: {
//         h2: {
//             id: 'heading',
//             content: 'My First Web page'
//         }
//     }
// }

// doc.div.h2.id = 'new heading'



// var document = {
//     html: {
//         head: {
//             title : {
//                 value: 'Title'
//             },
//             script : {
//                 src: './home.js'
//             }
//         },
//         body: {
//             div: {
//                 h2: {
//                     id: 'heading',
//                         content: 'My First Web page'
//                     }
//                 }
//         }
//     }
// }


//DOM Selector - getElementById
//DOM Events - click, blur, focus
//DOM Properties - innerHTML, height, width


function clickFn () {
    console.log('Button clicked......................');
    alert('hi.......');
    //alert, confirm, prompt
}



function clickFn2() {
    console.log('click 2------------------');
}

function clickFn3() {
    console.log('click 3------------------');
}



window.onload = () => {
    document.getElementsByTagName('button')[0].addEventListener('click', clickFn2);
    document.getElementsByTagName('button')[0].addEventListener('click', clickFn3);
    document.getElementsByTagName('button')[0].addEventListener('mouseover', clickFn3);
}
