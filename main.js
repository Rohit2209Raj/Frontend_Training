// // console.log(a)
// // var a = 10;

// // function area(){
// //     return 10;
// // }


// // const student={
// //     "name":"Rohit",
// //     "age":21,
// // };

// // console.log(typeof student);

// let x = 9;
// // x++;
// ++x;
// console.log(x)


// async function loadpost(){
//     const response = await fetch(
//         'https://jsonplaceholder.org/posts/1'
//     );
//     console.log(response.status);
//     // console.log(response.content)
//     console.log(typeof response)

//     const post = await response.json();

//     console.log(post["content"]);
//     // console.error.log("/n/n/n/n");
//     console.log(post.title);



// }

// loadpost();


async function createPost(){
const newPost = {
    'title':'Fetch API practise',
    body:'My first post',
    userId:1
};

const response = await fetch(
    'https://jsonplaceholder.org/posts/1',
    {
        method:'POST',
        headers:{'Content-Type':'application.json'},
        body:JSON.stringify(newPost)
    }
);

if(!response.ok) throw new Error('HTTP ${response.status}');
const result = await response.json();
console.log(result);
}

createPost().catch(console.error)

