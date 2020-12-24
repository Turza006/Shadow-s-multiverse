fetch('https://shadowworld.herokuapp.com/pic/allpic')
    .then(response => response.json())
    .then(data => {
        // Do what you want with your data

        displayData(data);

    })
    .catch(err => {
        console.error('An error ocurred', err);
    });
const displayData = (data) => {
    data.map((value, index) => {
        return document.getElementById("imageCard").innerHTML +=
            `
<div class="col-sm-4 p-4">
 <div class="card"> <img class="card-img" src="${value.links}" width="225px" height="357px" alt="">
                <div class="card-img-overlay">
                  <div class="bottom-text">
                    <p class="card-text">${value.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`
    })
}
