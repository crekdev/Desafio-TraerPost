const url = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = async () => {
  try {
    let response = await fetch(url)
    let data = await response.json()
    
    /**
     * data Array<{body: string, title: string, userId: number}>
     */
    const postsContainer = document.getElementById('post-data');
  
    const listItems = data.map(post =>
      `<li><strong>${post.title}</strong><p>${post.body}</p></li>`
    ).join('');
    postsContainer.innerHTML = `<ul>${listItems}</ul>`
  } catch (error) {
    console.error("Error", error)
  }
}

// function() {}
// function nombre () {}
