async function fetchBlogPost() {
    const urlParams = new URLSearchParams(window.location.search); 
    const postId = urlParams.get('id');
    console.log(postId)

    try {
        const response = await fetch(`https://blog-api-assignment.up.railway.app/posts/${postId}`)
        const post = await response.json()

        postDate = new Date(post.date)

            let postDetails = `
            <h2>${post.title}</h2>
            <p> 
            <em>${post.author}</em> | <em>${new Date(post.date).toLocaleString()}</em>
            </p>
            <p><strong>tags:</strong> ${post.tags ? post.tags.join(', ') : ''}</p>
            <p>${post.content}</p> 
            <a href="index.html">Back</a>
            `;

        document.getElementById('post-details').innerHTML = postDetails;


    } catch(error) {
        console.log(error)
    }
}

fetchBlogPost();


 







