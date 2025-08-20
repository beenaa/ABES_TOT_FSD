// var a=10;
// console.log("hi"+a);
// console.log(typeof(a));
//let a=10;
//let b=30;
//console.log(a);
// if(a>=10)
// {
//     let a =30;
//     console.log("a inside if block"+a);

// }
// console.log("a out side"+a);
// let a=12;
// let b="12";
// if(a==b)
// {
//     console.log("check only value here*****");
// }
// function sum(a,b)
// {
//     let r=a+b;
//     console.log("sum is"+r);
// }
// let c=sum(10,20);
// console.log(c);
// arrow function
// const data=()=>{
//     return "hi how r u"
// }
// console.log(data());



// (()=>{
//     console.log("helooooooo");
// })();
function selectlang(lang)
{
    let data;
    if(lang=="java")
    {
        function javacompiler()
        {
            console.log( "java compiler selected");
        }
        data=javacompiler();

    }
    else if(lang=="c")
    {
        function ccompiler()
            {
                console.log("c compiler selected")
            }
            data=ccompiler();
    }
    else {
        console.log("selected language is not here");

    }
    return data
    
}
selectlang("java");