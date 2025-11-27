
//callback

/* console.log("1.start");

setTimeout(()=>{
    console.log("3.timeout");
    
},1000)

console.log("2.end");
 */
//callback hell

/* setTimeout(()=>{    
    console.log("1");
    setTimeout(()=>{
    console.log("2");
    setTimeout(()=>{
    console.log("3");
    setTimeout(()=>{
    console.log("4");
    
    },1000)
    },1000)
    },1000)
},1000) */

/* setTimeout(()=>{
    console.log("5");
    setTimeout(()=>{
    console.log("4");
    setTimeout(()=>{
    console.log("3");
    setTimeout(()=>{
    console.log("2");
    setTimeout(()=>{
    console.log("1");
    setTimeout(()=>{
   
    
    
},1000)
    
},1000)
    
},1000)
    
},1000)
    
},1000)
    
},1000) */


//promise

/* const num= new Promise((resolve,reject)=>{
    let age=9;
    if(age>18){
        resolve("eligible");
        
    }
    else{
        reject("not eligible");
        
    }
})
num.then((ele)=>{console.log(ele);
}).catch((error)=>{console.log(error);
})
 */


//promise using function
 
/* function num(age){
    return new Promise((resolve,reject)=>{
       if(age>18){
        resolve("eligible");
        
    }
    else{
        reject("not eligible");
        
    } 
    })
}
num(15).then((ele)=>{console.log(ele);
}).catch((error)=>{console.log(error);
}) */

// session task

/* function add(num) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(num+2),2000)
    })
}
add(4).then((ele)=>{console.log(ele);
}).catch((error)=>{console.log(error);
})  */

// promise chaining

function add(num) {
    return new Promise((resolve,reject)=>{
        setTimeout(() =>resolve(num+2) ,2000);
    })
}
add(4).then((ele)=>{
    console.log(ele);
    return add(ele);
})
.then((data)=>{
    console.log(data);
    return add(data)
})
.then((a)=>{console.log(a);
}).catch((error)=>{console.log(error);
})


