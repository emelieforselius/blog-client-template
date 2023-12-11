
async function fetchAllPosts() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts')
        const posts = await response.json();

        let postListHTML = "";
        for (let post of posts) {

            postListHTML += `
            <h2>${post.title}</h2>
            <p>
            ${post.author} | ${new Date(post.date).toLocaleString()}
            </p>
            <p>tags: ${post.tags ? post.tags.join(', ') : ''}</p>
            <p>${post.content ? post.content.slice(0, 100) : ''}</p>
            <a href="post.html?id=${post._id}">...read more</a>
            `;
        }

        document.getElementById('blog-posts').innerHTML = postListHTML;

    } catch(error) {
        console.log(error)
    }
}

fetchAllPosts();
