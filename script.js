const loadAllPosts = async(category) => {
    if (category){
        console.log(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
    } else {
        console.log('https://openapi.programming-hero.com/api/retro-forum/posts');
    }
    // const response = await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts');
    // const data = await response.json();
    // console.log(data.posts);
    // console.log(category);
}

loadAllPosts();

const handleSearchByCategory = () => {
    const searchText = document.getElementById('searchPosts').value;
    
    if(searchText === ""){
        alert('please input search value')
    } else{
        loadAllPosts(searchText);
    }

}
