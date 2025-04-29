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



// function getPost(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://dummyjson.com/posts/${id}`)
//             .then(response => response.json())
//             .then(post => {
//                 fetch(`https://dummyjson.com/users/${post.userId}`)
//                     .then(response => response.json())
//                     .then(user => resolve({ ...post, user }))
//                     .catch(reject)
//             })
//             .catch(reject)
//     })

// }

// getPost(1)
//     .then(post => console.log(post)
//     )
//     .catch(error => console.error(error)
//     )



// function lanciaIlDado() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const incastra = Math.floor(Math.random() * 10) + 1
//             if (incastra <= 2) {
//                 reject("il dado si è incastrato")
//             } else {
//                 const dado = Math.floor(Math.random() * 6) + 1
//                 resolve(dado)
//             }
//         }, 2000)
//     })
// }

// lanciaIlDado()
//     .then(mes => console.log(mes))
//     .catch(error => console.error(error)
//     )



let ultimoLancio = null;

function lanciaIlDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const incastra = Math.floor(Math.random() * 10) + 1;
            if (incastra <= 2) {
                ultimoLancio = null;
                reject("il dado si è incastrato");
            } else {
                const dado = Math.floor(Math.random() * 6) + 1;
                if (dado === ultimoLancio) {
                    console.log("incredibile");
                }
                ultimoLancio = dado;
                resolve(dado);
            }
        }, 2000);
    });
}

lanciaIlDado()
    .then(mes => {
        console.log(mes);
        lanciaIlDado()
            .then(mes => console.log(mes))
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));


