// //console.log('SANITY');

// var btn = document.getElementById('button');
// var count = 0;

// function onButtonClick(e){
//     count++;
//     console.log("user click " + count + " times");
//     e.stopPropagation();
// }

// btn.addEventListener('click', onButtonClick);

// document.addEventListener('click', function () {
//     console.log("doc was clicked");
// });

// console.log("bnt", btn);

document.addEventListener('keydown', function(event){
    console.log("key was clicked", event);
});

