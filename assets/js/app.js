
const cl=console.log
const spraelemnt=document.getElementById("spread")
// let text=spraelemnt.innerText
// let arr=[...text]
// cl(arr)
// let newarr=arr.map(ele=>{
//     cl(ele)
//     return `<span> ${ele} </span>`
// }).join(" ")
//   spraelemnt.innerHTML=newarr
spraelemnt.innerHTML=[...spraelemnt.innerText].map((ele)=>`<span> ${ele} </span>`).join('')