let eventList=document.querySelector('#event-list');
let clearBtn=document.querySelector('#clear-all');
function eventSubmitHandler(event) {
    event.preventDefault(); 
    let title=event.target.title.value;
    let date=event.target.date.value;
    let category=event.target.category.value;
    let description=event.target.description.value;

    let eachlist=document.createElement('div');
    eachlist.classList.add('event_card');
    
    eachlist.innerHTML=`
        <h4>${title}</h4>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>${description}</p>
        <span class="delbtn">X</span>
    `;
    eachlist.querySelector('.delbtn').onclick = function() {
        eachlist.remove();
    };
    eventList.append(eachlist);
    event.target.reset();
}
clearBtn.onclick=function() {
    eventList.innerHTML='';
};