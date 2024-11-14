
    const input = document.getElementById('new-task');
    const button = document.getElementById('add-task-btn');
    const output = document.getElementById('task-list');

    let todos = [];

    window.onload = ()=>{
        let show = JSON.parse(localStorage.getItem('todos')) || [];
        show.forEach((item) => {
            addtodo(item)
        });
    }

    button.addEventListener('click', ()=>{
        todos.push(input.value);
        localStorage.setItem('todos', JSON.stringify(todos))
        addtodo(input.value)
        input.value = ''
        
    })

    function addtodo(todo){
        const para = document.createElement('p');
        para.innerText = todo;
        const btn = document.createElement('button');
        btn.innerText = 'delete';
        para.appendChild(btn);
        output.appendChild(para);
        btn.addEventListener('click',()=>{
            output.removeChild(para);
            removeData(todo);
        })
    }
    function removeData(data){
        const index = todos.indexOf(data)
        if(index > -1){
            todos.splice(index,1)
        }
        localStorage.setItem('todos', JSON.stringify(todos))
    }