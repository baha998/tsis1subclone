document.addEventListener('DOMContentLoaded', () => {
  // Firebase configuration
  const firebaseConfig = {
    // The configuration will be populated by Firebase Hosting
  };

  // Initialize Firebase
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();

  const taskInput = document.getElementById('task');
  const addButton = document.getElementById('add');
  const todoList = document.getElementById('todo-list');

  // Add a new task
  addButton.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text !== '') {
      db.collection('tasks').add({
        text: text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      taskInput.value = '';
    }
  });

  // Real-time listener for tasks
  db.collection('tasks').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    todoList.innerHTML = '';
    snapshot.forEach(doc => {
      const task = doc.data();
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <span>${task.text}</span>
        <button class="delete" data-id="${doc.id}">Delete</button>
      `;
      todoList.appendChild(taskElement);
    });
  });

  // Delete a task
  todoList.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
      const id = e.target.getAttribute('data-id');
      db.collection('tasks').doc(id).delete();
    }
  });
});
