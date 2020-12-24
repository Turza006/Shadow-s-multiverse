const button = document.getElementById('submit')
button.addEventListener('click', (event) => {
    event.preventDefault()


    let placename = document.getElementById('placename').value
    let imageLink = document.getElementById('imageLink').value

    let data = {
        placename,
        links: imageLink,
    }

    uploadData(data).then(r => {
        console.log(r)
    })
})

//for upload image to imageUpload route by formData
const uploadImage = async (file) => {
    console.log('file: ', file);
    let formData = new FormData(document.getElementById('signup'))
    formData.append('imageFile', file, "image.png")
    console.log('formData', formData)
    // const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const settings = {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        }
    }

    const response = await fetch('https://shadowworld.herokuapp.com/pic/imageUpload', settings);
    if (!response.ok) throw Error(response.message);
    try {
        const data = await response.json();
        alert("image uploaded");
        return console.log(data);
    } catch (err) {
        alert(err);
        throw err;
    }
};

$('#upload_file').change(function(e) {
    var file = e.target.files[0];
    var imageType = /image.*/;

    if (!file.type.match(imageType)) return;

    var form_data = new FormData();
    form_data.append('imageFile', file);

    for (var key of form_data.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }

    $.ajax({
        url: 'https://shadowworld.herokuapp.com/pic/imageUpload',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: 'POST',
        success: function(response) {
            console.log('response ====?>>', response.imagelink);
            let linkInput = document.getElementById('imageLink')
            linkInput.value = response.imagelink;
        },
        error: function(error) {
            console.log(error);
            alert('Image upload failed!');
        }
    });
});


//for upload all input data
const uploadData = async (data) => {
    const settings = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(' https://shadowworld.herokuapp.com/pic/createpic', settings);
    if (!response.ok) throw Error(response.message);
    try {
        const data = await response.json();
        alert("Data Uploaded");
        return console.log(data);
    } catch (err) {
        alert("Something Went Wrong");
        throw err;
    }
};



