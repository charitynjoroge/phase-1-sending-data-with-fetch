
function submitData(name,email){
   return fetch(`http://localhost:3000/users`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({name,email})
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })

    .then(data => {
        const id = data.id;
        document.body.append(id);
    })
    .catch(error => {
        document.body.append(error.message);
    });
} 
