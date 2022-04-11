function object (){
    var obj = {
        "key1": "value1",
        "key2": "Value2" 
       } 
       return [obj['key1'], obj['key2']] = [obj['key2'], obj['key1']];
}
console.log(object());