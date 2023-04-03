let  monsterparts = document.querySelectorAll('#monsterparts');
let  monsters = document.querySelector('#monsters');
let xDistance = 0;
let yDistance = 0;

monsterparts.forEach(function(monsterparts, index){
    monsterparts.addEventListener('dragstart', function(event){
       event.dataTransfer.setData('indux', event.target.id);
       xDistance = event.clientX - event.target.offsetLeft;
       yDistance = event.clientY - event.target.offsetTop;
    });
    
});

document.body.addEventListener('drop',function(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("indux")

    itemMove.style.top = event.clientY - yDistance + "px";
    itemMove.style.left = event.clientX - xDistance + "px";

    itemMove.style.zIndex = itemIndex + 1;
    console.log(event.pageX,event.pageY)
});

