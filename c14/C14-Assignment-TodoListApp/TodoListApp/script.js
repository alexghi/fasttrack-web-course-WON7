const list = document.getElementById('list');
const listForm = document.getElementById('listForm');
const listInput = document.getElementById('listInput');


listForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const items = [];
  const item = listInput.value;


  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  const span = document.createElement('span');
  const buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('id', 'buttonContainer');
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'delete');
  const editButton = document.createElement('button');
  editButton.setAttribute('id', 'edit');

  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(buttonContainer);
  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(editButton);

  span.textContent = item;
  deleteButton.textContent = 'Delete';
  editButton.textContent = 'Edit';
  items.push(item);

  list.insertBefore(li, list.firstElementChild);
  listInput.value = '';
});

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode.parentNode;
    const list = li.parentNode;
    const action = button.textContent;
    const crudActions = {
      removeItem: () => {
        list.removeChild(li);
      },

      editItem: () => {
        const span = li.firstElementChild.nextElementSibling;
        const input = document.createElement('input');
        input.setAttribute('id', 'editInput');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'Save';
      },

      saveItem: () => {
        const input = li.firstElementChild.nextElementSibling;
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'Edit';
      }
    };

    if (action === 'Delete') {
      crudActions.removeItem();
    }else if (action === 'Edit') {
      crudActions.editItem();
    }else if (action === 'Save') {
      crudActions.saveItem();
    }
  }
});


list.addEventListener('change', (event) => {
  const checkBox = event.target;
  const checked = checkBox.checked;
  const listItem = checkBox.nextElementSibling;

  if (checked) {
    listItem.classList.add('completed');
  }else{
    listItem.classList.remove('completed');
  }
});
