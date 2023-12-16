const posts=[
    {title:'Post One',body:'This is podt one'},
    {title:'Post Two',body:'This is post two'}
];
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;

        });
        document.body.innerHTML=output;
    },1000);
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error =false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: Somthing went wrong');
            }
        },2000);
    })
    .then(() => updateLastUserActivityTime(user))
    .then((lastActivityTime) => {
      user.lastActivityTime = lastActivityTime;
      getPostsAndLastActivityTime(user);
    })
    .then(() => deleteLastPost(user))
    .then((remainingPosts) => {
      console.log('Remaining Posts after deletion:', remainingPosts);
    })
    .catch((error) => console.error(error));
  }
  
  function updateLastUserActivityTime(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedLastActivityTime = new Date();
        resolve(updatedLastActivityTime);
      }, 1000);
    });
  }
  
  function deleteLastPost(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const deletedPost = posts.pop();
        resolve(posts);
      }, 1000);
    });
  }
  
  // Example usage
  const user = {
    id: 1,
    name: 'John',
    posts: [],
    lastActivityTime: null
  };
  
  createPost({ title: 'Post Three', body: 'This is post three' }, user);
  

}
//createPost({title:'Post Three',body:'This is post three'})
//.then(getPosts)
//.catch(err=>console.log(err));

//Async /await
//async function init(){
  //  await createPost({title:'Post Three',body:'This is post three'});
    //getPosts();
//}
//init();


//Async/Await/fetch
async function fetchUsers(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    console.log(data);
}
fetchUsers();
//Promise.all
//const promise1=Promise.resolve('hello world');
//const promise2=10;
//const promise3=new Promise((resolve,reject)=>
//setTimeout(resolve,2000,'Goodbye'));
//const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(rse=>res.json());
//Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));