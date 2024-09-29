export default function (arr, id){
    let obj
    const item = arr.forEach(item => {
        if(+item.id === +id){
            obj = item      
        }
    })
    return obj || false;
}