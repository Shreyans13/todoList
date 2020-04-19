//the div that contains all the todos
let list=document.getElementById("todos");


//to store all todos
let todoList=[];

//To print all todos . Its like a refresh for todo list
let showTodos = ()=>{
    randomColor()
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
                    <input type="checkbox" class="checkBox" onclick="checkIt(${i})" checked>
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

// ----------------------------Random color added bonus material------------------------
let randomColor = () => {
    // var colorletters = 'ABCDEF0123456789';
    // var color = '#';
    // for (var i = 0; i < 6; i++) {
    //     color += colorletters[Math.floor(Math.random() * 16)];
    // }\
    
    document.querySelector('body').style.background = '#'+['3fe0d0','7ef9ff','588bae','4682b4','73c2fb','6593f5','008ecc','of52ba','0080ff','1034a6','0e4d92','000080','111e6c'][Math.floor(Math.random() * 13)]
}