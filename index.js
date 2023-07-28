// Add your code here
const submitData = (name, email) => {
    
    fetch('http://localhost:3000/users',{
        method:'POST',
        headers : {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({name, email})
    })
        .then(res => res.json())
        .then(data => {
            document.body.innerHTML = data['id'];
        })
        .catch((error) =>{
            document.body.innerHTML = error.message;
        })
}