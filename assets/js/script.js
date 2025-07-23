// Add Comment Feature
const postBtn = document.getElementById("post-comment");
if (postBtn) {
  postBtn.addEventListener("click", () => {
    const input = document.getElementById("comment-input");
    const list = document.getElementById("comments-list");
    if (input.value.trim() !== "") {
      const newComment = document.createElement("div");
      newComment.classList.add("comment");
      newComment.innerHTML = `
        <img src="./assets/img/avatar.png" alt="Anonymous" class="comment-avatar" />
        <div class="comment-content">
          <div class="comment-author">Anonymous</div>
          <div class="comment-text">${input.value}</div>
          <div class="comment-date">Just now</div>
        </div>
      `;
      list.prepend(newComment);
      input.value = "";
      
      updateCommentCount();
    }
  });
}

// Update comment count
function updateCommentCount() {
  const comments = document.querySelectorAll('.comment');
  const countElement = document.querySelector('.comments-section h3:last-of-type');
  if (countElement) {
    countElement.textContent = `${comments.length} comments`;
  }
}

const textarea = document.getElementById("comment-input");
if (textarea) {
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      postBtn.click();
    }
  });
}

