function create_tr(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
        tr_clone.style.backgroundColor = 'unset';
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

function MakeGreen(e) {
    if(e.closest('tbody').childElementCount !== 1){
        e.closest('tr').style.backgroundColor = 'green';
        
            alert("Emin misin ?");
          
    }
}

function MakeDanger(e) {
    if(e.closest('tbody').childElementCount !== 1){
        e.closest('tr').style.backgroundColor = 'red';
        alert("Emin misin ?");
          
    }
}


function myFunction() {
    document.getElementById("save").submit();
  }