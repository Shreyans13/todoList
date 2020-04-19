//the div that contains all the todos
let list=document.getElementById("todos");


//to store all todos
let todoList=[];

//To print all todos . Its like a refresh for todo list
let showTodos = ()=>{

    let i=0
    list.innerHTML=` `;
    // for(var i=0 ; i < todoList.length-1 ; i++)
    todoList.map(ele=>{

        if (!ele.status){
            list.innerHTML+=`
                <div class="task">
                    <input type="checkbox" class="checkBox" onclick="checkIt(${i})">
                    <div class="taskText">
                        ${ele.title}
                    </div>
                    <button class="delete" onclick="deleteTodo(${i})">
                        <img src="./img/bin.png" alt="delete">
                    </button>
                </div>
                <hr class="line">
            `;
        }
        else {
            list.innerHTML+=`
                <div class="task">
                    <input type="checkbox" class="checkBox" onclick="checkIt(${i})">
                    <div class="taskText strikeout" >
                        ${ele.title}
                    </div>
                    <button class="delete" onclick="deleteTodo(${i})">
                        <img src="./img/bin.png" alt="delete">
                    </button>
                </div>
                <hr class="line">
            `;
        }
        
        // ele.status ?  document.getElementsByClassName("checkBox")[i].checked=false : document.getElementsByClassName("checkBox")[i].checked=true ;
        // checkIt(i);
        i++;
    } );
}


//To add a new todo to the list
function addNew(){
    let todo = document.getElementById("newTodo").value;
    if(todo){
        newTodo={
                title:todo,
                status:false
            }        
        todoList.unshift(newTodo);
        showTodos();
    }
    else{
        alert("Please Input some data!");
    }
}

//To delete a todo

let deleteTodo = index =>{

    if(confirm("Are You Sure ?")){
        todoList.splice(index,1);
        showTodos();
    }

}

//To check and uncheck checkbox next to task

let checkIt = (index) =>{
    // console.log(index)
    todoList[index].status = !todoList[index].status
    showTodos()
}


document.getElementById("newTodo").addEventListener("keydown", e => {
    if (e.keyCode === 13) { 
        addNew();
    }
});

