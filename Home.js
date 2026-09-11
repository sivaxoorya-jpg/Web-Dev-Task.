const Name=localStorage.getItem('username');
document.getElementById('username').textContent=Name;

const openPostBtn = document.getElementById('openPost');
const postModal = document.getElementById('postModal');
const cancelPostBtn = document.getElementById('cancelPost');
const submitPostBtn = document.getElementById('submitPost');
const postText = document.getElementById('postText');
const postsContainer = document.getElementById('postsContainer');

openPostBtn.addEventListener('click', function(e) {
  e.preventDefault();
  postModal.classList.remove('hidden');
});

cancelPostBtn.addEventListener('click', function() {
  postModal.classList.add('hidden');
  postText.value = '';
});

function getPosts() {
  const saved = localStorage.getItem('posts');
  return saved ? JSON.parse(saved) : [];
}

function savePosts(posts) {
  localStorage.setItem('posts', JSON.stringify(posts));
}

function renderPost(content) {
  const username = localStorage.getItem('username') || 'Anonymous';

  const postCard = document.createElement('div');
  postCard.className = 'post-card';

  postCard.innerHTML = `
    <div class="post-username">${username}</div>
    <div class="post-content">${content}</div>
    <div class="post-actions">
      <button class="action-btn like-btn">👍 Like</button>
      <button class="action-btn comment-btn">💬 Comment</button>
      <button class="action-btn share-btn">⏩ Share</button>
    </div>
  `;

  postsContainer.prepend(postCard);
}


submitPostBtn.addEventListener('click', function() {
  const content = postText.value.trim();
  if (content === '') return;

  const posts = getPosts();
  posts.unshift(content);   // add new post to the front
  savePosts(posts);

  renderPost(content);

  postText.value = '';
  postModal.classList.add('hidden');
});

window.addEventListener('DOMContentLoaded', function() {
  const posts = getPosts();
  posts.forEach(function(content) {
    renderPost(content);
  });
});
