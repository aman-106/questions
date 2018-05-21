/**

This function has complexity of O(n+m) n,m length of array
input two array of elems
prints commons elems of arrays 
**/
function getCommonElems(arrayA,arrayB){
    store={};
    commonElem=[];
    for( elem of arrayA){
        store[elem]=1;
    }

    for(elem of arrayB){
        if(store.hasOwnProperty(elem)){
          if(!commonElem.includes(elem)){
            commonElem.push(elem);
          }
      }
    }

    console.log(commonElem);
}

var a = [10, 2, 2 ,3, 'f',42, 5, 6];
var b = [10,2,'f',12];


getCommonElems(a,b);
