
async function fetchAllPosts() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts')
        const posts = await response.json();

        let postListHTML = "";
        for (let post of posts) {
            postListHTML += `
            <h2>${post.title}</h2>
            <p>Author: ${post.author}</p>
            <p>Date: ${new Date(post.createdAt).toLocaleDateString()}</p>
            <p>tags: ${post.tags.join(', ')}</p>
            <p>${post.content.slice(0, 100)}</p>
            <a href="post.html?id=${post.id}">...read more</a>
            `;
        }

        document.getElementById('blog-posts').innerHTML = postListHTML;

    } catch(error) {
        console.log(error)
    }
}

fetchAllPosts();
