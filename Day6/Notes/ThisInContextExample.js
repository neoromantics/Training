const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    // Here 'this' refers to the video object
    this.tags.forEach(function (tag) {
      // Using 'this' in the forEach callback, specifying the context with the second argument
      console.log(this.title, tag);
    }, this);
  },
};

// Test the showTags method
video.showTags();
