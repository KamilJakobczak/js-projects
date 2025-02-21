function saveNote() {
  const noteText = document.querySelector('.note-area').value;
  const noteKey = Date.now().toString();
  localStorage.setItem(noteKey, noteText);
  createNote(noteKey, noteText);
}
function deleteNote(key) {
  localStorage.removeItem(key);
  document.getElementById(`id${key}`).remove();
}
function createNote(noteKey, noteText) {
  const div = document.createElement('div');
  div.id = 'id' + noteKey;
  div.textContent = noteText;

  const button = document.createElement('button');
  button.innerHTML = 'Delete';
  button.onclick = () => deleteNote(noteKey);

  div.appendChild(button);
  document.querySelector('.notes').appendChild(div);
}
function loadNotes() {}

function init() {
  Object.keys(localStorage).forEach((key) => {
    createNote(key, localStorage.getItem(key));
  });
}

init();
