const posts = [
  {
    id: '1',
    topic: 'test',
    text: 'test text',
  },
  {
    id: '2',
    topic: 'test2',
    text: 'test2 text',
  },
  {
    id: '3',
    topic: 'test3',
    text: 'test3 text',
  },
];

const getPosts = (req, res) => {
  res.json({posts});
};

const getPostsById = (req, res) => {
  const {id} = req.params;
  const [post] = posts.filter((item) => item.id === id);
  if (!post) {
    return res
        .status(400)
        .json({status: `sorry, there are now post with id# ${id}`});
  }
  res.json({post});
};

const postPosts = (req, res) => {
  const {topic, text} = req.body;
  posts.push({id: new Date().getTime().toString(), topic, text});
  res.json({status: 'success'});
};

const putPosts = (req, res) => {
  const {topic, text} = req.body;
  posts.forEach((post) => {
    if (post.id === req.params.id) {
      post.text = text;
      post.topic = topic;
    }
  });
  res.json({status: 'success'});
};

const deletePost = (req, res) => {
  posts = posts.filter((item) => item.id !== req.params.id);
  res.json({status: 'success'});
};

module.exports = {getPosts, getPostsById, postPosts, putPosts, deletePost};
