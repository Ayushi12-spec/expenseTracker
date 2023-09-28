function Ayushi(event){
    event.preventDefault()  //That it shouldnot refresh by itself
    var expense=document.getElementById("exampleInputEmail1").value
    var description=document.getElementById("exampleInputPassword1").value
    var category=document.getElementById("inputGroupSelect02").value
    var object={
        expense,
        description,
    category
    }
    localStorage.setItem("ExpenseDetails",JSON.stringify(object))
    storeExpense(object) 
}
function storeExpense(object){
    let parent=document.getElementById("list")
    let child=document.createElement("li")
    child.textContent=object.expense + " --- " + object.description + "----" + object.category
    child.className ="list-group-item list-group-item-action list-group-item-light";
    let deleteButton=document.createElement("input")
    let editButton=document.createElement("input")
    deleteButton.type="button"
    deleteButton.className="btn btn-outline-danger float-right";
    deleteButton.value="delete"
    editButton.value="edit"
    editButton.type="button"
    editButton.className="btn btn-outline-info float-right";
    parent.appendChild(child)
    child.appendChild(deleteButton)
    child.appendChild(editButton)

    deleteButton.onclick=mataRani
    editButton.onclick=jaiMataDi

    function mataRani(){
        localStorage.removeItem("ExpenseDetails")
        parent.removeChild(child)
    }

    function jaiMataDi(){
        localStorage.removeItem("ExpenseDetails")
        parent.removeChild(child)

        document.getElementById("exampleInputEmail1").value=object.expense
        document.getElementById("exampleInputPassword1").value=object.description
        document.getElementById("inputGroupSelect02").value=object.category
    }
}

