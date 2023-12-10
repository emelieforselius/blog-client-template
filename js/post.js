async function fetchBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    try {
        const response = await fetch(`https://blog-api-assignment.up.railway.app/posts/65738ce731b9d5002a636a6c`)
        const post = await response.json()

        postDate = new Date(post.date)

            let postDetails = `
            <h2>${post.title}</h2>
            <p> 
            ${post.author} | ${new Date(post.date).toLocaleString()}
            </p>
            <p>tags: ${post.tags.join(', ')}</p>
            <p>${post.content}</p> 
            <a href="index.html">back</a>
            `;

        document.getElementById('post-details').innerHTML = postDetails;


    } catch(error) {
        console.log(error)
    }
}

fetchBlogPost();



 







