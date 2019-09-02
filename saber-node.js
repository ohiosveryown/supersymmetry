// saber-node.js
exports.onCreatePages = function() {
  // Pages are read into the `this.pages` Map
  // Sort posts by createdAt (date) from new to old
  const posts = [...this.pages.values()]
    .filter(page => page.type === 'post' && !page.draft)
    .sort((a, b) => {
      return a.createdAt > b.createdAt ? 1 : -1
    })
  const selectFields = page => (page && {
    title: page.title,
    first_line: page.first_line,
    second_line: page.second_line,
    date: page.date,
    architect: page.architect,
    permalink: page.permalink,
    img: page.assets.first_img,
  })
  for (const [index, post] of posts.entries()) {
    post.prevPost = selectFields(posts[index - 1])
    post.nextPost = selectFields(posts[index + 1])
  }
}