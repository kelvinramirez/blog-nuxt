function Post(post) {
  if (post == undefined) {
    this.title = {
      rendered: "Hola entiendo"
    };
    this.categories = [];
    this.date = "";
    this.excerpt = {
      rendered: ""
    };
    this.fimg_url = "";
  } else {
    this.title = { rendered: post.title.rendered };
    this.categories = post.categories;
    this.date = post.date;
    this.excerpt = post.excerpt.rendered;
    this.fimg_url = post.fimg_url;
  }
}

export default Post;

// var fb = new Post({});
// fb.categories = [];
