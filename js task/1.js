let data = [
    {
       "state":"telangana",
       "districts":[
          {
             "name":"adilabad",
             "population":{
                "male":20000000,
                "female":545455
             }
          },
          {
             "name":"karimnagar",
             "population":{
                "male":50000000,
                "female":645455
             }
          },
          {
             "name":"warangal",
             "population":{
                "male":70000000,
                "female":800000
             }
          }
       ]
    },
    {
       "state":"andhra pradesh",
       "districts":[
          {
             "name":"prakasam",
             "population":{
                "male":50000000,
                "female":87999
             }
          },
          {
             "name":"guntur",
             "population":{
                "male":20000000,
                "female":9000000
             }
          },
          {
             "name":"krishna",
             "population":{
                "male":20000000,
                "female":300000
             }
          }
       ]
    }
 ]

 
 let main = document.querySelector("#select1")

for(let v of data){
    let option = document.createElement("option")
    option.textContent=`${v.state}`
    option.setAttribute('value',`${v.state}`)
     main.appendChild(option)
      
}



let select2 =document.querySelector('#select2')
addSelect=(x)=>{
   let n=[]
   
   while(select2.options.length>0){
      select2.options.remove(0)
   }
  

      for(let v of data){
         if(v.state==x){
            n=v.districts

            n.forEach(x => {
               let option = document.createElement("option")
               option.setAttribute("value",`${x.name}`)
               option.innerHTML=`${x.name}`
               select2.appendChild(option)
            });
         }
   }
};


let last = document.querySelector(".data")
displayData=(x)=>{
   for(let v of data){
      for(let u of v.districts){
         if(u.name==x){
            last.innerHTML=`
            <h1>${u.population.male}</h1>
            <h1>${u.population.female}</h1>
            `
         }
      }
   }
}
   
