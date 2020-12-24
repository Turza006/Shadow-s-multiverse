const button = document.getElementById('submit')
button.addEventListener('click', (event) => {
    event.preventDefault()

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let data = {
        email,
        password
    }
    console.log(data)
    uploadData(data).then(r=>{
        console.log(r)
    })
})

const uploadData = async (data)=>{
    const settings = {
        method:'Post',
        body:JSON.stringify(data),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const response = await fetch('https://shadowworld.herokuapp.com/admin/login',settings)
    if (!response.ok) throw Error(response.message);
    try {
        const data = await response.json();
        if (data.msg == "Login Success"){
            location.replace("admin.html")
        }
        else{
            alert("Password and Email not match");
        }

        return console.log("massage     "+data.msg);
    } catch (err) {
        throw err;
    }


}
