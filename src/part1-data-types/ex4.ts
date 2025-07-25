//any: bỏ qua kiểm tra kiểu
//unknown: phải kiểm tra kiểu trước khi dùng

function handleUnknown(i: unknown){
    if(typeof i === "string"){
        console.log(i.toUpperCase());
    } else{
        console.log("Not String");
    }
}

function handleAny(i: any) {
    console.log(i.toUpperCase()); 
}
  
handleAny("hello"); 
handleAny(123);
handleUnknown("hello");
handleUnknown(123);