async function getUser() { 
    const res = await fetch(`http://localhost:27564/api/get-all-user`, {
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', },
    });
    const data = await res.json();
    console.log(data)
}

export default getUser