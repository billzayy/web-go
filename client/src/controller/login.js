async function getUser() { 
    const res = await fetch(`http://localhost:27564/api/get-all-user`, {
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', },
    });
    const data = await res.json();
    return data
}

async function getValueBox() {
    const inputEmail = document.querySelector('.fill-box-email').value;
    const inputPwd = document.querySelector('.fill-box-password').value;

    const fetchedData = await getUser()
   
    if (fetchedData.status !== "Successful") {
        alert("Error!");
    }

    var checker = false;
    fetchedData.data.forEach(data => {
        if (inputEmail === data.email && inputPwd === data.password) {
            checker = true
        }
        else if(inputEmail === "" && inputPwd === ""){
            checker = undefined
        }
    });
    
    if (checker === undefined) {
        alert("Your email or password does not exist ! Please sign up.")
    }
    else if (checker === false) {
        alert("Your email or password is incorrect ! Please try again later.")
    }
    else {
        alert("Login successful !")
    }
}

export default getValueBox