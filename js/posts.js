fetch ('https://blog-api-assignment.up.railway.app/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => renderPost(post)); 
            
        })
        .catch((error) => {
            console.log(error)
        })


