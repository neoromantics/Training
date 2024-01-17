function fetchUserData(callback) {
  setTimeout(() => {
    console.log("User data fetched");
    callback(null, { userId: 1, username: "john_doe" });
  }, 1000);
}

function getUserPosts(userId, callback) {
  setTimeout(() => {
    console.log("Posts for user " + userId + " fetched");
    callback(null, [{ postId: 1, content: "Hello World" }]);
  }, 1000);
}

function getPostComments(postId, callback) {
  setTimeout(() => {
    console.log("Comments for post " + postId + " fetched");
    callback(null, ["Great post!", "Interesting read"]);
  }, 1000);
}

// Callback hell
fetchUserData((error, user) => {
  if (error) {
    console.log("Error fetching user data:", error);
  } else {
    getUserPosts(user.userId, (error, posts) => {
      if (error) {
        console.log("Error fetching posts:", error);
      } else {
        posts.forEach((post) => {
          getPostComments(post.postId, (error, comments) => {
            if (error) {
              console.log("Error fetching comments:", error);
            } else {
              console.log("Comments for post", post.postId, comments);
            }
          });
        });
      }
    });
  }
});
