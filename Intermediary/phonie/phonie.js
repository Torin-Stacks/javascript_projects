
function add(){
    event.preventDefault()
    var number = document.getElementById("phonenumber").value
    console.log(number)
    var prefixs = number.slice(0, 4)
    if(prefixs == "0703" || prefixs == "0706"|| prefixs == "0803" || prefixs == "0806" || prefixs == "0810"  || prefixs == "0813"  || prefixs == "0814" || prefixs == "0816"  || prefixs == "0903"  || prefixs == "0906"  || prefixs == "0913"  || prefixs == "0916")
        {
            document.querySelector("img").src = "./img/New-mtn-logo.jpg"
            //console.log("yes")
         }  
         
    else if(prefixs == "0705" || prefixs == "0805" || prefixs == "0807" || prefixs == "0811" || prefixs == "0815"  || prefixs == "0905"  || prefixs == "0915"){
       document.querySelector("img").src = "./img/glo.png"
          }

    else if(prefixs == "0701" || prefixs == "0708" || prefixs == "0802" || prefixs == "0808" || prefixs == "0812"  || prefixs == "0901"  || prefixs == "0902" || prefixs == "0904" || prefixs == "0907" || prefixs == "0911" || prefixs == "0912"){
        document.querySelector("img").src = "./img/airtel.png"
           }     
    
}




















// if(
//          prefixs == "0703" || prefixs == "0706" || prefixs == "0803" || prefixs == "0806" || prefixs == "0810"  || prefixs == "0813"  
//          || prefixs == "0814"  || prefixs == "0816"  || prefixs == "0903"  || prefixs == "0906"  || prefixs == "0913"  || prefixs == "0916"){
//        document.getElem("img").src = "/home/user/Desktop/javascript/Intermediary/phonie/img/New-mtn-logo.jpg"
//      }  