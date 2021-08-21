let promise1=new Promise((resolve,reject)=>{
    let isJavascriptGood=true;
    if(isJavascriptGood){
        resolve("yes , I Love Javascript");
    }
    else{
        reject("I Don't Like Javascript")
    }
});
let promise2=new Promise((resolve,reject)=>{
    let isJavascriptGood=false;
    if(isJavascriptGood){
        resolve("yes , I Love Javascript");
    }
    else{
        reject("I Don't Like Javascript");
    }
});
let promise3=new Promise((resolve,reject)=>{
    let isJavascriptGood="";
    if(isJavascriptGood){
        resolve("yes , I Love Javascript");
    }
    else{
        reject("I Don't Like Javascript")
    }
})
Promise.all([promise1,promise2,promise3]).then((data)=>console.log(data))
.catch((e)=>console.log(e))
Promise.any ([promise1,promise2,promise3]).then((data)=>console.log(data))
.catch((e)=>console.log(e))


let promise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("surekha won")
    },5000);
});
let promise5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("bindu won")
    },2000)
});
let promise6=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("priyanka won")
    },1000);
});
Promise.race([promise4,promise5,promise6]).then((data)=>console.log(data))
.catch((err)=>console.log(err));

Promise.allSettled([promise4,promise5,promise6]).then((data)=>console.log(data))
.catch((err)=>console.log(err));
