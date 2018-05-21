// constructor
// input comma separated fields id
// finds the elems for ids
function PAGE(...fieldsId) {
  this.elems=[]
  fieldsId.map((id)=>{
    debugger;
    let elem = document.querySelector(`#${id}`);
    this.elems.push(elem);
  });
}

// use exsiting array of elems  get their respective values
PAGE.prototype.getDocumentContent = function() {
  return this.elems.map((elem)=>{
    return elem.value;
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  var page = new PAGE('field1');
  console.log('values: ',page.getDocumentContent());

  var page = new PAGE('field1','field2');
  console.log('values: ', page.getDocumentContent());
});
