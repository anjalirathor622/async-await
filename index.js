
console.log("Starting");
//function defination
async function myfunc(){         //async function always return po 
    let po = new Promise((resolve, reject)=>{
        let name = 'anjali'
        
        let surname = 'rathor'
        // producing code
        setTimeout(()=>{
            resolve(`hello my name is ${name} ${surname}`);
        },10000)
        
    }) 
    let x = await po;          //await always wait for po

    console.log(x);
}

myfunc();