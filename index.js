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
            `<div class="bx">
    <div class="card" id:"img"> <img class="card-img" src="${value.links}" alt="" height="250px" width="350px">
        <div class="card-img-overlay">
            <div class="bottom-text">
                <h5 class="card-title" >${value.name}</h5>
            </div>
        </div>
    </div>
</div>`
    })
}
