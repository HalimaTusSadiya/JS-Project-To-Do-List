const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener('keyup',function(event){
    addToDO(event);
})


function addToDO(event){
    if(event.key == "Enter"){
        const li = document.createElement('li');
        li.innerHTML=item.value + '<i class="fas fa-times"></i>';
        toDoBox.appendChild(li);
        item.value=""

        li.addEventListener('click',function(){
            this.classList.toggle('done')
        })

        document.querySelector('i').addEventListener('click',function(){
            this.parentNode.remove()
        });
    }
}