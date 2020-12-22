// var index = 130;
// var i;
// for(i=1;i<=13;i++){
//     if (i%9 ==1 ){
//         console.log('1st line')
//     }
//     if(i%9 == 1){
//         console.log('1.1 line')
//     }
//     if(i%9 == 2){
//         console.log('1.2 line')
//     }
//     if(i%9 == 3){
//         console.log('1.3 line')
//     }
//     if(i%9 == 4){
//         console.log('1.4 line')
//     }
//     if(i%9 == 5){
//         console.log('5st line')
//     }
//     if(i%9 == 5){
//         console.log('5.1st line')
//     }
//     if(i%9 == 6){
//         console.log('6st line')
//     }
//     if(i%9 == 7){
//         console.log('7st line')
//     }
//     if(i%9 == 8){
//         console.log('8st line')
//     }
//     if(i%9 == 9){
//         console.log('9st line')
//     }
//     if(i%9 == 9){
//         console.log('9.2st line')
//     }
//     console.log(i)
//
// }

// fetch data and log it


// started here..//

let i = 1;
let text = '';
for (i = 1; i <= 8; i++) {
    if (i % 5 === 0) {
        text += `<div class="bx bx-middle" style="padding: 0;">`
    }

    if (i % 7 === 0) {
        text += `</div>`
    }

    text += getGrid(i, "https://image.freepik.com/free-vector/new-year-2021-background_23-2148762372.jpg", "Dummy Image Name " + i)

    if (i % 8 === 0) {
        text += `</div>
    </div>`
    }
}


function getGrid(index, imageLink, imageName) {
    return `
        <div class="bx bx-${index}">
                <div class="card"> <img class="card-img" src="${imageLink}" alt="">
                    <div class="card-img-overlay"> <a href="#"><img src="assets/img/heart.png" class="heart" alt="heart icon"></a>
                        <div class="bottom-text">
                            <h5 class="card-title">${imageName}</h5>
                        </div>
                    </div>
                </div>
            </div>
    `
}

console.log('text----->>>', text)
