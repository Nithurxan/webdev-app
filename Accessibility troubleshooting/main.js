// Functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.addEventListener('click', function() {
    const isHidden = commentWrapper.style.display === 'none';
    commentWrapper.style.display = isHidden ? 'block' : 'none';
    showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
    showHideBtn.setAttribute('aria-expanded', !isHidden);
});

// Functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    submitComment();
});

function submitComment() {
    const nameValue = nameField.value.trim();
    const commentValue = commentField.value.trim();
    if (nameValue && commentValue) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p><strong>${nameValue}:</strong> ${commentValue}</p>
        `;
        list.appendChild(listItem);

        nameField.value = '';
        commentField.value = '';
    }
}
