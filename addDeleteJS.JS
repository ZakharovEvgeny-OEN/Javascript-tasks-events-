let counter=0
var counter1=0
div.innerHTML=counter

function init(){
    const div=document.getElementById("div")
    const button=document.getElementById("button")
    const buttonList=document.getElementById("buttonList")
    button.addEventListener('click',pressButton)
    buttonList.addEventListener('click',createList)

    div.innerHTML=counter

}
function pressButton(){
    counter++
    div.innerHTML=counter
}


var list=document.getElementById("list")

function createList() {
    const li = document.createElement('li');
    li.textContent = `Запись ${counter1} `;

    const btn = document.createElement('button');
    btn.textContent = 'Удалить';
    btn.id = `but${counter1}`;
    btn.addEventListener('click', deleteElem);

    li.appendChild(btn);
    list.appendChild(li);

    counter1++;
}
function deleteElem(event) {
    event.target.parentElement.remove(); // удаляет родительский элемент <li>
}

window.addEventListener('DOMContentLoaded', init);
