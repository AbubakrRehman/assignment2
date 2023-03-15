// let scrollableDivs = document.querySelectorAll(".sfooter-col");
// if (scrollableDivs[3].scrollHeight > scrollableDivs[3].clientHeight) {
//     console.log(scrollableDivs[3]);

//     // scrollableDivs[3].parentElement.A.style.display = "block";

// } else {
//     console.log(false);
// }


let scrollableDivs = document.querySelectorAll(".sfooter-col");
scrollableDivs.forEach((scrollableDiv, scrollableDivIndex) => {
    // console.log(true);
    let span = scrollableDiv.children[1];
    let button = scrollableDiv.children[2];


    console.log("style", button.style.display);

    if (span.scrollHeight > span.clientHeight) {
        button.style.display = "block";
    }
})


function read_more(e) {
    // console.log(e.target);/
    console.log("ha bhai bol !!!");

    console.log(e.target.parentElement);
    // 
    console.log(e.target.parentNode.children[1].class);


    e.target.parentElement.clientHeight = e.target.parentElement.scrollHeight;


}


document.addEventListener("click", read_more);





