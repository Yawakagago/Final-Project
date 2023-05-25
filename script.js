var counter = 1;
      setInterval(function()  {
        document.getElementById('radio'+ counter).checked = true;
        counter++; 

        if(counter>4){
          counter=1
        }

      }, 5000);

      function toggle() {
        const container1 = document.getElementById("All");
        const containerhome = document.getElementById("Home");
        document.getElementById("Currentbtn").innerHTML = "All"
          if(containerhome.style.display === "none"){
            container1.style.display = "none";
            containerhome.style.display = "block";
            document.getElementById('prof').style.display = 'none'
            document.getElementById('aboutnot').style.display = 'block'
            document.getElementById('cart').style.display = 'none'

          }
          else {
            container1.style.display = "none";
            document.getElementById('cart').style.display = 'none'
            containerhome.style.display = "block";
          }
      }

      function toggle1(){
        const container1 = document.getElementById("All");
        const containerhome = document.getElementById("Home");
        document.getElementById("Currentbtn").innerHTML = "All"
          if(container1.style.display === "none"){
            container1.style.display = "block";
            containerhome.style.display = "block"
          }
          else {
            container1.style.display = "block";
            containerhome.style.display = "block";
          }
        }

        function hide23() {
          document.getElementById('All').style.display = 'block'
            document.getElementById('Home').style.display = 'none'
            var hide = document.getElementsByClassName("category2");
            var hidee = document.getElementsByClassName("category3");
            var hideee = document.getElementsByClassName("category1");
            

            for (var i = 0; i < 5; i++) {
                hide[i].style.display = 'none';
                hidee[i].style.display = 'none';
            }
            for (var i = 0; i < 5; i++) {
                hideee[i].style.display = 'block';
            }

            document.getElementById('Currentbtn').textContent = "GPU";

        }
        function hide13() {
          document.getElementById('All').style.display = 'block'
            document.getElementById('Home').style.display = 'none'
            var hide = document.getElementsByClassName("category1");
            var hidee = document.getElementsByClassName("category3");
            var hideee = document.getElementsByClassName("category2");
            

            for (var i = 0; i < 5; i++) {
                hide[i].style.display = 'none';
                hidee[i].style.display = 'none';
            }
            for (var i = 0; i < 5; i++) {
                hideee[i].style.display = 'block';
            }
            document.getElementById('Currentbtn').textContent = "CPU";

        }
        function hide12() {
          document.getElementById('All').style.display = 'block'
            document.getElementById('Home').style.display = 'none'
            var hide = document.getElementsByClassName("category1");
            var hidee = document.getElementsByClassName("category2");
            var hideee = document.getElementsByClassName("category3");
            

            for (var i = 0; i < 5; i++) {
                hide[i].style.display = 'none';
                hidee[i].style.display = 'none';
            }
            for (var i = 0; i < 5; i++) {
                hideee[i].style.display = 'block';
            }
            document.getElementById('Currentbtn').textContent = "MotherBoard";

        }

        function showall() {

            const container1 = document.getElementById("All");
            const containerhome = document.getElementById("Home");
            document.getElementById("Currentbtn").innerHTML = "All"
              if(container1.style.display === "none"){
                container1.style.display = "block";
                containerhome.style.display = "none"
              }
              else {
                container1.style.display = "block";
                containerhome.style.display = "none";
              }

            var hide = document.getElementsByClassName("category1");
            var hidee = document.getElementsByClassName("category2");
            var hideee = document.getElementsByClassName("category3");
            

            for (var i = 0; i < 5; i++) {
                hide[i].style.display = 'block';
                hidee[i].style.display = 'block';
                hideee[i].style.display = 'block';
            }
        }
      

            const filterDivs = () => {
            let input = document.getElementById("searchInput").value.toLowerCase();
            let divs = document.getElementsByClassName("category1")

            let divs2 = document.getElementsByClassName("category2")

            let divs3 = document.getElementsByClassName("category3")



            for (let i = 0; i < divs.length; i++) {
              if(divs[i].textContent.toLowerCase().includes(input)){
                divs[i].style.display = "block";
              }
              else {
                divs[i].style.display = "none";
              }
              if(document.getElementById("searchInput").value == ""){
                divs[i].style.display ="none";
              }
            }
            for (let i = 0; i < divs2.length; i++) {
              if(divs2[i].textContent.toLowerCase().includes(input)){
                divs2[i].style.display = "block";
              }
              else{
                divs2[i].style.display = "none";
              }
              if(document.getElementById("searchInput").value == ""){
                divs2[i].style.display ="none";
              }
            }

            for (let i = 0; i < divs3.length; i++) {
              if(divs3[i].textContent.toLowerCase().includes(input)){
                divs3[i].style.display = "block";
              }
              else{
                divs3[i].style.display = "none";
              }
              if(document.getElementById("searchInput").value == ""){
                divs3[i].style.display ="none";
              }
            }
            }
          


function exit(value){
  var id = document.getElementById(value);
  const home = document.getElementById("Home");
  id.style.display = "none";
  home.style.display = "none";
}

let total = 0
let cntt = 0

let d1 = 0;
let d2 = 0;
let d3 = 0;
let d4 = 0;
let d5 = 0;
let d6 = 0;
let d7 = 0;
let d8 = 0;
let d9 = 0;
let d10 = 0;
let d11 = 0;
let d12 = 0;
let d13 = 0;
let d14 = 0;
let d15 = 0;

let cn1 = 0;
let cn2 = 0;
let cn3 = 0;
let cn4 = 0;
let cn5 = 0;
let cn6 = 0;
let cn7 = 0;
let cn8 = 0;
let cn9 = 0;
let cn10 = 0;
let cn11 = 0;
let cn12 = 0;
let cn13 = 0;
let cn14 = 0;
let cn15 = 0;

let rlist = [];

function addtocart(value){
  let x = document.getElementById(value);

  if(document.getElementById('bprof').style.backgroundColor !== 'green'){
    alert('Log in/Register to proceed!')
    document.getElementById('All').style.display='none'
    document.getElementById('Home').style.display='none'
    document.getElementById('p1').style.display='none'
    document.getElementById('p2').style.display='none'
    document.getElementById('p3').style.display='none'
    document.getElementById('p4').style.display='none'
    document.getElementById('p5').style.display='none'
    document.getElementById('p6').style.display='none'
    document.getElementById('p7').style.display='none'
    document.getElementById('p8').style.display='none'
    document.getElementById('p9').style.display='none'
    document.getElementById('p10').style.display='none'
    document.getElementById('p11').style.display='none'
    document.getElementById('p12').style.display='none'
    document.getElementById('p13').style.display='none'
    document.getElementById('p14').style.display='none'
    document.getElementById('p15').style.display='none'
    document.getElementById('prof').style.display='block'


    return
  }


  if(x.textContent == document.getElementById('div1').textContent){
    
    if(document.getElementById('div1').style.display === ''){
      document.getElementById('div1').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p1').style.display = 'none'
      document.getElementById('r1').style.display = 'block'
      cn1 = 1;
      d1 = 93965.73;
      // rlist.push('Gigabyte GeForce RTX 4090 Gaming OC 24G --- ₱ 93,965.73')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div2').textContent){
    
    if(document.getElementById('div2').style.display === ''){
      document.getElementById('div2').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p2').style.display = 'none'
      document.getElementById('r2').style.display = 'block'
      cn2 = 1;
      d2 = 44565.41;
      // rlist.push('XFX Speedster MERC310 AMD Radeon RX 7900XTX --- ₱ 44,565.41')
      // console.log(rlist)
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div3').textContent){
    
    if(document.getElementById('div3').style.display === ''){
      document.getElementById('div3').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p3').style.display = 'none'
      document.getElementById('r3').style.display = 'block'
      cn3 = 1;
      d3 = 57000.00;
      // rlist.push('Powercolor Hellhound AMD Radeon RX 7900 XT --- ₱ 57,000.00')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div4').textContent){
    
    if(document.getElementById('div4').style.display === ''){
      document.getElementById('div4').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p4').style.display = 'none'
      document.getElementById('r4').style.display = 'block'
      cn4 = 1;
      d4 = 50162.00;
      // rlist.push('ASUS TUF Gaming NVIDIA GeForce RTX™ 4070 Ti --- ₱ 50,162.000')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div5').textContent){
    
    if(document.getElementById('div5').style.display === ''){
      document.getElementById('div5').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p5').style.display = 'none'
      document.getElementById('r5').style.display = 'block'
      cn5 = 1;
      d5 = 49073.53;
      rlist.push('MSI Gaming GeForce RTX 4070 12GB GDRR6X --- ₱ 49,073.53')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div6').textContent){
    
    if(document.getElementById('div6').style.display === ''){
      document.getElementById('div6').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p6').style.display = 'none'
      document.getElementById('r6').style.display = 'block'
      cn6 = 1;
      d6 = 13850.00;
      rlist.push('Intel Core i5-13400 --- ₱ 13,850.00')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div7').textContent){
    
    if(document.getElementById('div7').style.display === ''){
      document.getElementById('div7').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p7').style.display = 'none'
      document.getElementById('r7').style.display = 'block'
      cn7 = 1;
      d7 = 26995.00;
      rlist.push('AMD Ryzen 7 7800X3D --- ₱ 26,995.00')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div8').textContent){
    
    if(document.getElementById('div8').style.display === ''){
      document.getElementById('div8').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p8').style.display = 'none'
      document.getElementById('r8').style.display = 'block'
      cn8 = 1;
      d8 = 34399.00;
      rlist.push('AMD Ryzen 9 7950X3D --- ₱ 34,399.00')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div9').textContent){
    
    if(document.getElementById('div9').style.display === ''){
      document.getElementById('div9').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p9').style.display = 'none'
      document.getElementById('r9').style.display = 'block'
      cn9 = 1;
      d9 = 21502.87;
      rlist.push('Intel Core i5-13600K --- ₱ 21,502.87')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div10').textContent){
    
    if(document.getElementById('div10').style.display === ''){
      document.getElementById('div10').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p10').style.display = 'none'
      document.getElementById('r10').style.display = 'block'
      cn10 = 1;
      d10 = 5899.00;
      rlist.push('INTEL CORE I3-12100F --- ₱ 5,899.00')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div11').textContent){
    
    if(document.getElementById('div11').style.display === ''){
      document.getElementById('div11').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p11').style.display = 'none'
      document.getElementById('r11').style.display = 'block'
      cn11 = 1;
      d11 = 23470;
      rlist.push('GIGABYTE Z790 AERO --- ₱ 23,470')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div12').textContent){
    
    if(document.getElementById('div12').style.display === ''){
      document.getElementById('div12').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p12').style.display = 'none'
      document.getElementById('r12').style.display = 'block'
      cn12 = 1;
      d12 = 15250.00;
      rlist.push('Gigabyte Z690 AORUS ELITE AX --- ₱ 15,250.00')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div13').textContent){
    
    if(document.getElementById('div13').style.display === ''){
      document.getElementById('div13').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p13').style.display = 'none'
      document.getElementById('r13').style.display = 'block'
      cn13 = 1;
      d13 = 19500;
      rlist.push('ASRock Z690 EXTREME --- ₱19,500')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div14').textContent){
    
    if(document.getElementById('div14').style.display === ''){
      document.getElementById('div14').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p14').style.display = 'none'
      document.getElementById('r14').style.display = 'block'
      cn14 = 1;
      d14 = 17944.63;
      rlist.push('GIGABYTE Z690I --- ₱ 17,944.63')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }
  if(x.textContent == document.getElementById('div15').textContent){
    
    if(document.getElementById('div15').style.display === ''){
      document.getElementById('div15').style.display = 'block'
      alert("Succesfully added item")
      document.getElementById('p15').style.display = 'none'
      document.getElementById('r15').style.display = 'block'
      cn15 = 1;
      d15 = 26237.99;
      rlist.push('Z690 AORUS TACHYON --- ₱ 26,237.99')
    }
     else{
      alert("You Already Have this item in your cart!")
    }
  }

  total = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 +d9 + d10 + d11 + d12 + d13 + d14 + d15;
  document.getElementById('price').textContent = "Price: ₱" + total.toFixed(2);
  document.getElementById('price1').textContent = "Price: ₱" + total.toFixed(2);
  cntt = cn1 + cn2 + cn3 + cn4 + cn5 + cn6 + cn7 + cn8 +cn9 +cn10 + cn11 + cn12 + cn13  +cn14  + cn15;
  document.getElementById('cartnumber').textContent = cntt.toString();
}


function cart() {

  if(document.getElementById('cart').style.display === '' || document.getElementById('cart').style.display === 'none'){
    document.getElementById('cart').style.display='block';
    document.getElementById('All').style.display = 'none';
    document.getElementById('Home').style.display = 'none';
    document.getElementById('prof').style.display = 'none'
    document.getElementById('aboutnot').style.display = 'none';

  }else{
    document.getElementById('cart').style.display='none';
    document.getElementById('prof').style.display = 'none'
    document.getElementById('Home').style.display = 'block';
    document.getElementById('aboutnot').style.display = 'block';
  }
}

function removetocart(value){
  let x = document.getElementById(value);
  if(x.textContent == document.getElementById('div1').textContent){
    
    if(document.getElementById('div1').style.display === 'block'){
      document.getElementById('div1').style.display = 'none'
      alert("Succesfully Removed item")
      document.getElementById('r1').style.display = 'none'

      cn1 = 0;
      d1 = 0;
    }
  }
  if(x.textContent == document.getElementById('div2').textContent){
    
    if(document.getElementById('div2').style.display === 'block'){
      document.getElementById('div2').style.display = 'none'
      document.getElementById('r2').style.display = 'none'
      alert("Succesfully Removed item")
      cn2 = 0;
      d2 = 0;
    }
  }
  if(x.textContent == document.getElementById('div3').textContent){
    
    if(document.getElementById('div3').style.display === 'block'){
      document.getElementById('div3').style.display = 'none'
      document.getElementById('r3').style.display = 'none'
      alert("Succesfully Removed item")
      cn3 = 0;
      d3 = 0;
    }
  }
  if(x.textContent == document.getElementById('div4').textContent){
    
    if(document.getElementById('div4').style.display === 'block'){
      document.getElementById('div4').style.display = 'none'
      document.getElementById('r4').style.display = 'none'
      alert("Succesfully Removed item")
      cn4 = 0;
      d4 = 0;
    }
  }
  if(x.textContent == document.getElementById('div5').textContent){
    
    if(document.getElementById('div5').style.display === 'block'){
      document.getElementById('div5').style.display = 'none'
      document.getElementById('r5').style.display = 'none'
      alert("Succesfully Removed item")
      cn5 = 0;
      d5 = 0;
    }
  }
  if(x.textContent == document.getElementById('div6').textContent){
    
    if(document.getElementById('div6').style.display === 'block'){
      document.getElementById('div6').style.display = 'none'
      document.getElementById('r6').style.display = 'none'
      alert("Succesfully Removed item")
      cn6 = 0;
      d6 = 0;
    }
  }
  if(x.textContent == document.getElementById('div7').textContent){
    
    if(document.getElementById('div7').style.display === 'block'){
      document.getElementById('div7').style.display = 'none'
      document.getElementById('r7').style.display = 'none'
      alert("Succesfully Removed item")
      cn7 = 0;
      d7 = 0;
    }
  }
  if(x.textContent == document.getElementById('div8').textContent){
    
    if(document.getElementById('div8').style.display === 'block'){
      document.getElementById('div8').style.display = 'none'
      document.getElementById('r8').style.display = 'none'
      alert("Succesfully Removed item")
      cn8 = 0;
      d8 = 0;
    }
  }
  if(x.textContent == document.getElementById('div9').textContent){
    
    if(document.getElementById('div9').style.display === 'block'){
      document.getElementById('div9').style.display = 'none'
      document.getElementById('r9').style.display = 'none'
      alert("Succesfully Removed item")
      cn9 = 0;
      d9 = 0;
    }
  }
  if(x.textContent == document.getElementById('div10').textContent){
    
    if(document.getElementById('div10').style.display === 'block'){
      document.getElementById('div10').style.display = 'none'
      document.getElementById('r10').style.display = 'none'
      alert("Succesfully Removed item")
      cn10 = 0;
      d10 = 0;
    }
  }
  if(x.textContent == document.getElementById('div11').textContent){
    
    if(document.getElementById('div11').style.display === 'block'){
      document.getElementById('div11').style.display = 'none'
      document.getElementById('r11').style.display = 'none'
      alert("Succesfully Removed item")
      cn11 = 0;
      d11 = 0;
    }
  }
  if(x.textContent == document.getElementById('div12').textContent){
    
    if(document.getElementById('div12').style.display === 'block'){
      document.getElementById('div12').style.display = 'none'
      document.getElementById('r12').style.display = 'none'
      alert("Succesfully Removed item")
      cn12 = 0;
      d12 = 0;
    }
  }
  if(x.textContent == document.getElementById('div13').textContent){
    
    if(document.getElementById('div13').style.display === 'block'){
      document.getElementById('div13').style.display = 'none'
      document.getElementById('r13').style.display = 'none'
      alert("Succesfully Removed item")
      cn13 = 0;
      d13 = 0;
    }
  }
  if(x.textContent == document.getElementById('div14').textContent){
    
    if(document.getElementById('div14').style.display === 'block'){
      document.getElementById('div14').style.display = 'none'
      document.getElementById('r14').style.display = 'none'
      alert("Succesfully Removed item")
      cn14 = 0;
      d14 = 0;
    }
  }
  if(x.textContent == document.getElementById('div15').textContent){
    
    if(document.getElementById('div15').style.display === 'block'){
      document.getElementById('div15').style.display = 'none'
      document.getElementById('r15').style.display = 'none'
      alert("Succesfully Removed item")
      cn15 = 0;
      d15 = 0;
    }
  }
  total = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 +d9 + d10 + d11 + d12 + d13 + d14 + d15;
  document.getElementById('price').textContent = "Price: ₱" + total.toFixed(2);
  document.getElementById('price1').textContent = "Price: ₱" + total.toFixed(2);
  cntt = cn1 + cn2 + cn3 + cn4 + cn5 + cn6 + cn7 + cn8 +cn9 +cn10 + cn11 + cn12 + cn13  +cn14  + cn15;
  document.getElementById('cartnumber').textContent = cntt.toString();
}

function prof(){
  if(document.getElementById('prof').style.display === '' || document.getElementById('prof').style.display === 'none'){
    document.getElementById('prof').style.display = 'block';
    document.getElementById('aboutnot').style.display = 'none';
    document.getElementById('Home').style.display = 'none';
  }else{
    document.getElementById('prof').style.display = 'none'
    document.getElementById('aboutnot').style.display = 'block';
    document.getElementById('Home').style.display = 'block';
  }
}

let arraydata = [];
let first = 0;

function insertdata(){
  let input1 =  document.getElementById('email').value
  let input2 = document.getElementById('pass').value
  let input3 =  document.getElementById('address').value
  let input4 =  document.getElementById('number').value
  let counter = 0;
  
  if(first <= 0){
    let arrayin = [input1, input2, input3, input4];
    arraydata.push(arrayin)
    first++
    document.getElementById('email').value = ''
    document.getElementById('pass').value = ''
    document.getElementById('address').value = ''
    document.getElementById('number').value = ''
    document.getElementById('p17').style.display = 'none'
    alert("You have Successfully Registered!")
    return
  }

  let tmail = ''
  let tpass= ''
  let tadd = ''
  let tnum = ''

  
  

  for(let i = 0; i < arraydata.length; i++){
    if(arraydata[i][0].includes(input1) ){
      counter++
      tmail= "Email. "
    }
    if(arraydata[i][1].includes(input2)){
      counter++
      tpass= "Password. "
    }
    if(arraydata[i][2].includes(input3)){
      counter++
      tadd = "Address. "
    }
    if(arraydata[i][3].includes(input4)){
      counter++
      tnum = "Number."
    }
  }


  
  if(counter < 1 && first > 0){
    let arrayin = [input1, input2, input3, input4];
    arraydata.push(arrayin)
    alert("You have Successfully Registered!")
    document.getElementById('email').value = ''
    document.getElementById('pass').value = ''
    document.getElementById('address').value = ''
    document.getElementById('number').value = ''
    document.getElementById('p17').style.display = 'none'
  }else{
    document.getElementById('email').value = ''
    document.getElementById('pass').value = ''
    document.getElementById('address').value = ''
    document.getElementById('number').value = ''
    alert("These Categories are taken: "+ tmail +tpass + tadd + tnum)
  }
  
}

// function logout1() {
//    document.getElementById('bprof').style.backgroundColor = 'red'
//    document.getElementById('logout').style.display = 'none'
//    alert("You have succesfully logged out")
// }


function checkdata(){
  let input1 = document.getElementById('logmail').value
  let input2 = document.getElementById('logpass').value

  let tmail = 'Wrong Email. '
  let tpass = 'Wrong Password. '
  let n = 0
  
  if(document.getElementById('bprof').style.backgroundColor === "green"){
    document.getElementById('logmail').value =''
    document.getElementById('logpass').value =''
    document.getElementById('logout').style.display = 'block'
    alert('You are already logged in.')
    return
  }

  if(first == 0 ){
    alert('Please Register First!')
    document.getElementById('logmail').value =''
    document.getElementById('logpass').value =''
    document.getElementById('p16').style.display = 'none'
    document.getElementById('p17').style.display = 'block'
    return
  }

  for(let i=0; i < arraydata.length; i++){

    if(arraydata[i][0].includes(input1) ){
      n++
      tmail= ""
  
    }
    if(arraydata[i][1].includes(input2)){
      n++
      tpass = ""
  
    }
  }

  if(n >= 2){
    document.getElementById('logmail').value =''
    document.getElementById('logpass').value =''
    document.getElementById('bprof').style.backgroundColor = "green"
    document.getElementById('prof').style.display = 'none'
    document.getElementById('All').style.display = 'block'
    document.getElementById('p16').style.display = 'none'
    alert('You have successfully logged in')
  }else{
    document.getElementById('logmail').value =''
    document.getElementById('logpass').value =''
    alert(tmail+tpass)
  }
}

function purchase(){
  alert('Purchase successful! Please expect delivery within (3 to 7) working days.')
  
  document.getElementById('div1').style.display = 'none'
  document.getElementById('div2').style.display = 'none'
  document.getElementById('div3').style.display = 'none'
  document.getElementById('div4').style.display = 'none'
  document.getElementById('div5').style.display = 'none'
  document.getElementById('div6').style.display = 'none'
  document.getElementById('div7').style.display = 'none'
  document.getElementById('div8').style.display = 'none'
  document.getElementById('div9').style.display = 'none'
  document.getElementById('div10').style.display = 'none'
  document.getElementById('div11').style.display = 'none'
  document.getElementById('div12').style.display = 'none'
  document.getElementById('div13').style.display = 'none'
  document.getElementById('div14').style.display = 'none'
  document.getElementById('div15').style.display = 'none' 

  document.getElementById('r1').style.display = 'none'
  document.getElementById('r2').style.display = 'none'
  document.getElementById('r3').style.display = 'none'
  document.getElementById('r4').style.display = 'none'
  document.getElementById('r5').style.display = 'none'
  document.getElementById('r6').style.display = 'none'
  document.getElementById('r7').style.display = 'none'
  document.getElementById('r8').style.display = 'none'
  document.getElementById('r9').style.display = 'none'
  document.getElementById('r10').style.display = 'none'
  document.getElementById('r11').style.display = 'none'
  document.getElementById('r12').style.display = 'none'
  document.getElementById('r13').style.display = 'none'
  document.getElementById('r14').style.display = 'none'
  document.getElementById('r15').style.display = 'none'

  document.getElementById('p18').style.display = 'none'
  document.getElementById('price').textContent = "Price: 00"
  document.getElementById('price1').textContent = "Price: 00"
  document.getElementById('cartnumber').textContent = '0'
}

function checkout(){
   document.getElementById('p18').style.display = 'block'
  //  let rrlist =document.getElementById('receiptlist')

  // rlist.forEach((item)=>{
  //   let listitem = document.createElement('div');
  //   listitem.textContent = item;
  //   rrlist.appendChild(listitem)
  // });
}




