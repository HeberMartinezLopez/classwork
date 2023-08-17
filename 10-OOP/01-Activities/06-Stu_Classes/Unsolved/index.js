// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
    constructor(authorName, title, text, createdOn) {
      this.authorName = authorName;
      this.title = title;
      this.text = text;
      this.createdOn = createdOn;
      // TODO: Give BlogPost a property called 'comments' that is set to an empty array.
      this.comments = [];
    }
    // TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.
    printMetaData() {
      console.log(`Created by ${this.authorName} on ${this.createdOn}.`);
    }
  }
  // TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
  BlogPost.prototype.addComent = function (comments) {
    this.comments.push(comments);
  };
  // TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.
  class Comment {
    constructor(authorName, text, createdOn, reaction) {
      this.authorName = authorName;
      this.text = text;
      this.createdOn = createdOn;
      this.reaction = reaction;
    }
    // TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.
    printMetaData() {
      console.log(
        `Created by ${this.authorName} on ${this.createdOn} ${this.reaction}.`
      );
    }
  }
  // TODO: Create a new object using the Comment class constructor.
  const comment1 = new Comment("Rebecca Yarros", "Iron Flame", "2023", ":runner:");
  // TODO: Create a new object using the BlogPost class constructor.
  const blogPost2 = new BlogPost(
    "Ann Patchett",
    "3 Daughters Learn About Their Mother's Past Relationship",
    "Tom Lake",
    "2023"
  );
  // TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
  blogPost2.addComent(comment1);
  // TODO: Print the meta data for both the BlogPost and the Comment to the console.
  blogPost2.printMetaData();
  comment1.printMetaData();
  
  
  
  
  
  
  
  