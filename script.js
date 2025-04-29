// function getPostTitle(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://dummyjson.com/posts/${id}`)
//             .then(response => response.json())
//             .then(post => resolve(post.title))
//             .catch(reject)
//     })
// }

// getPostTitle(1)
//     .then(title => console.log(title)
//     )
//     .catch(erroe => console.error(error)
//     )



function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(post => {
                fetch(`https://dummyjson.com/users/${post.userId}`)
                    .then(response => response.json())
                    .then(user => resolve({ ...post, user }))
                    .catch(reject)
            })
            .catch(reject)
    })

}

getPost(1)
    .then(post => console.log(post)
    )
    .catch(error => console.error(error)
    )