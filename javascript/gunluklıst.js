function create_tr(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
    table_body.append(tr_clone);


    clean_first_tr(table_body.firstElementChild);
    

}

function clean_first_tr(firstTr) {
    let children = firstTr.children;

    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElemanChild){

           x.firstElementChild.value = ''; 
        }
        
    });
        
    
}

function remove_tr(e) {
    if(e.closest('tbody').childElementCount !== 1){
        
   
        e.closest('tr').remove();

    }


}











const modalBtn = document.getElementById("modal-ac");
const modal = document.querySelector(".modal");
const modalKapat = document.getElementById("modal-kapat");

modalBtn.addEventListener("click", () => {

   modal.style.display = "flex";
}
);

modalKapat.addEventListener("click", () => {

  modal.style.display = "none";
}
);