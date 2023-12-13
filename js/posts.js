
async function fetchAllPosts() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts')
        const posts = await response.json();

        let postListHTML = "";
        for (let post of posts) {

            postListHTML += `
            <div class="blog-post">
            <h2>${post.title}</h2>
            <p>
            <em>${post.author}</em> | <em>${new Date(post.date).toLocaleString()}</em>
            </p>
            <p><strong>tags:</strong> ${post.tags ? post.tags.join(', ') : ''}</p>
            <p>${post.content ? post.content.slice(0, 100) : ''} <a href="post.html?id=${post._id}">...read more</a></p>
            </div>
            `;
        }

        document.getElementById('blog-posts').innerHTML = postListHTML;

    } catch(error) {
        console.log(error)
    }
}

fetchAllPosts();