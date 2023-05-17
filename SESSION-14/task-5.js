class Post {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = new Date();
    }
}

class Blog {
    constructor() {
        this.posts = [];
    }

    addPost(post) {
        this.posts.push(post)
    }

    listAllPosts() {
        return this.posts;
    }
    findPostsByAuthor(author) {
        this.posts.filter(post => post.author === author);
    }
    findPostsByDate(date) {
        this.posts.filter(post => { post.date === date });
    }
}

let post1 = new Post('4th Industrial Revolution', 'IT is known as 4th I', 'Jamal');
let post2 = new Post('Digital Knowledge', 'Understanding the base of Digital World', 'Borislav');
let post3 = new Post('abc', 'bca', 'Ali');


let blog1 = new Blog();
blog1.addPost(post1)
blog1.addPost(post2)
blog1.addPost(post3)

console.log(blog1.listAllPosts());



