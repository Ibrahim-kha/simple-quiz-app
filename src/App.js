import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const [serialno,setSerialno]=useState(1);
  const [marks,setMarks]=useState(0);
  const arr=[1,2,3,4,2,3,1,4,3,2];
  const [marks1,setMarks1]=useState(0);
  const [marks2,setMarks2]=useState(0);
  const [marks3,setMarks3]=useState(0);
  const [marks4,setMarks4]=useState(0);
  const [marks5,setMarks5]=useState(0);
  const [marks6,setMarks6]=useState(0);
  const [marks7,setMarks7]=useState(0);
  const [marks8,setMarks8]=useState(0);
  const [marks9,setMarks9]=useState(0);
  const [marks10,setMarks10]=useState(0);
  const [ans11,setAns11]=useState(false);
  const [ans12,setAns12]=useState(false);
  const [ans13,setAns13]=useState(false);
  const [ans14,setAns14]=useState(false);
  const [ans21,setAns21]=useState(false);
  const [ans22,setAns22]=useState(false);
  const [ans23,setAns23]=useState(false);
  const [ans24,setAns24]=useState(false);
  const [ans31,setAns31]=useState(false);
  const [ans32,setAns32]=useState(false);
  const [ans33,setAns33]=useState(false);
  const [ans34,setAns34]=useState(false);
  const [ans41,setAns41]=useState(false);
  const [ans42,setAns42]=useState(false);
  const [ans43,setAns43]=useState(false);
  const [ans44,setAns44]=useState(false);
  const [ans51,setAns51]=useState(false);
  const [ans52,setAns52]=useState(false);
  const [ans53,setAns53]=useState(false);
  const [ans54,setAns54]=useState(false);
  const [ans61,setAns61]=useState(false);
  const [ans62,setAns62]=useState(false);
  const [ans63,setAns63]=useState(false);
  const [ans64,setAns64]=useState(false);
  const [ans71,setAns71]=useState(false);
  const [ans72,setAns72]=useState(false);
  const [ans73,setAns73]=useState(false);
  const [ans74,setAns74]=useState(false);
  const [ans81,setAns81]=useState(false);
  const [ans82,setAns82]=useState(false);
  const [ans83,setAns83]=useState(false);
  const [ans84,setAns84]=useState(false);
  const [ans91,setAns91]=useState(false);
  const [ans92,setAns92]=useState(false);
  const [ans93,setAns93]=useState(false);
  const [ans94,setAns94]=useState(false);
  const [ans101,setAns101]=useState(false);
  const [ans102,setAns102]=useState(false);
  const [ans103,setAns103]=useState(false);
  const [ans104,setAns104]=useState(false);
  function handleButton(e){
    for(let i=1;i<=10;i++) {
      let m="o"+i;
      if(document.getElementById(m).value!=e.target.value&&document.getElementById(m).style.backgroundColor=="yellow") {
         document.getElementById(m).style.backgroundColor="pink";
      }
    }
    e.target.style.backgroundColor="yellow";
    setSerialno(e.target.value);
  }
  function handleClear(e){
    let st=document.getElementById("st");
    let nd=document.getElementById("nd");
    let rd=document.getElementById("rd");
    let th=document.getElementById("th");
    if(st.checked==true&&st.value==arr[serialno-1]){
      if(serialno==1){
      if(marks1) {
      setMarks(marks-1);
      setMarks1(0);
      }
    }
    else if(serialno==7){
      if(marks7) {
        setMarks(marks-1);
        setMarks7(0);
        }
    }
  }
  else 
    if(nd.checked==true&&nd.value==arr[serialno-1]){
      if(serialno==2){
        if(marks2) {
        setMarks(marks-1);
        setMarks2(0);
        }
      }
      else if(serialno==5){
        if(marks5) {
          setMarks(marks-1);
          setMarks5(0);
          }
      }
      else if(serialno==10){
        if(marks10) {
          setMarks(marks-1);
          setMarks10(0);
        }
      }
    }
    else
    if(rd.checked==true&&rd.value==arr[serialno-1]){
      if(serialno==3){
        if(marks3) {
        setMarks(marks-1);
        setMarks3(0);
        }
      }
      else if(serialno==6){
        if(marks6) {
          setMarks(marks-1);
          setMarks6(0);
          }
      }
      else if(serialno==9){
        if(marks9) {
          setMarks(marks-1);
          setMarks9(0);
        }
      }
    }
    else
    if(th.checked==true&&th.value==arr[serialno-1]){
      if(serialno==4){
        if(marks4) {
        setMarks(marks-1);
        setMarks4(0);
        }
      }
      else if(serialno==8){
        if(marks8) {
          setMarks(marks-1);
          setMarks8(0);
          }
      } 
    }
    if(serialno==1){
      setAns11(false);
      setAns12(false);
      setAns13(false);
      setAns14(false);
    }
    else
    if(serialno==2){
      setAns21(false);
      setAns22(false);
      setAns23(false);
      setAns24(false);
    }
    else
    if(serialno==3){
      setAns31(false);
      setAns32(false);
      setAns33(false);
      setAns34(false);
    }
    else
    if(serialno==4){
      setAns41(false);
      setAns42(false);
      setAns43(false);
      setAns44(false);
    }
    else
    if(serialno==5){
      setAns51(false);
      setAns52(false);
      setAns53(false);
      setAns54(false);
    }
    else
    if(serialno==6){
      setAns61(false);
      setAns62(false);
      setAns63(false);
      setAns64(false);
    }
    else
    if(serialno==7){
      setAns71(false);
      setAns72(false);
      setAns73(false);
      setAns74(false);
    }
    else
    if(serialno==8){
      setAns81(false);
      setAns82(false);
      setAns83(false);
      setAns84(false);
    }
    else
    if(serialno==9){
      setAns91(false);
      setAns92(false);
      setAns93(false);
      setAns94(false);
    }
    else
    if(serialno==10){
      setAns101(false);
      setAns102(false);
      setAns103(false);
      setAns104(false);
    }
      
  }
  function handleBack(e) {
    setSerialno(parseInt(serialno)-1);
    let st=document.getElementById("st");
    let nd=document.getElementById("nd");
    let rd=document.getElementById("rd");
    let th=document.getElementById("th");
    var n="o"+serialno;
    var m=document.getElementById(n);
    if(st.checked==true||nd.checked==true||rd.checked==true||th.checked==true){
      m.style.backgroundColor="green";
      }
      else {
      m.style.backgroundColor="pink";
      }
    var p=parseInt(serialno)-1;
    if(p>=1) {
    var n="o"+p;
    var m=document.getElementById(n);
    m.style.backgroundColor="yellow";
    }
  }
  function handleNext(e){
    setSerialno(parseInt(serialno)+1);
    let st=document.getElementById("st");
    let nd=document.getElementById("nd");
    let rd=document.getElementById("rd");
    let th=document.getElementById("th");
    if(st.checked==true&&st.value==arr[serialno-1]){
      if(serialno==1){
      if(!marks1) {
      setMarks(marks+1);
      setMarks1(1);
      }
    }
    else if(serialno==7){
      if(!marks7) {
        setMarks(marks+1);
        setMarks7(1);
        }
    }
  }
    else 
    if(nd.checked==true&&nd.value==arr[serialno-1]){
      if(serialno==2){
        if(!marks2) {
        setMarks(marks+1);
        setMarks2(1);
        }
      }
      else if(serialno==5){
        if(!marks5) {
          setMarks(marks+1);
          setMarks5(1);
          }
      }
      else if(serialno==10){
        if(!marks10) {
          setMarks(marks+1);
          setMarks10(1);
        }
      }
    }
    else
    if(rd.checked==true&&rd.value==arr[serialno-1]){
      if(serialno==3){
        if(!marks3) {
        setMarks(marks+1);
        setMarks3(1);
        }
      }
      else if(serialno==6){
        if(!marks6) {
          setMarks(marks+1);
          setMarks6(1);
          }
      }
      else if(serialno==9){
        if(!marks9) {
          setMarks(marks+1);
          setMarks9(1);
        }
      }
    }
    else
    if(th.checked==true&&th.value==arr[serialno-1]){
      if(serialno==4){
        if(!marks4) {
        setMarks(marks+1);
        setMarks4(1);
        }
      }
      else if(serialno==8){
        if(!marks8) {
          setMarks(marks+1);
          setMarks8(1);
          }
      } 
    }
    else 
    if(st.checked==true||nd.checked==true||rd.checked==true||th.checked==true){
      if(serialno==1){
        if(marks1){
          setMarks(marks-1);
          setMarks1(0);
        }  
      }
      else
      if(serialno==2){
        if(marks2){
          setMarks(marks-1);
          setMarks2(0);
        }
      }
      else
      if(serialno==3){
        if(marks3){
          setMarks(marks-1);
          setMarks3(0);
        }
      }
      else
      if(serialno==4){
        if(marks4){
          setMarks(marks-1);
          setMarks4(0);
        }
      }
      else
      if(serialno==5){
        if(marks5){
          setMarks(marks-1);
          setMarks5(0);
        }
      }
      else
      if(serialno==6){
        if(marks6){
          setMarks(marks-1);
          setMarks6(0);
        }
      }
      else
      if(serialno==7){
        if(marks7){
          setMarks(marks-1);
          setMarks7(0);
        }
      }
      else
      if(serialno==8){
        if(marks8){
          setMarks(marks-1);
          setMarks8(0);
        }
      }
      else
      if(serialno==9){
        if(marks9){
          setMarks(marks-1);
          setMarks9(0);
        }
      }
      else
      if(serialno==10){
        if(marks10){
          setMarks(marks-1);
          setMarks10(0);
        }
      }
      }
    var p=parseInt(serialno)+1;
    var n="o"+serialno;
    var m=document.getElementById(n);
    if(st.checked==true||nd.checked==true||rd.checked==true||th.checked==true){
    m.style.backgroundColor="green";
    }
    else
    {
    m.style.backgroundColor="pink";
    }
    console.log(p);
    if(p<=10) {
    n="o"+p;
    m=document.getElementById(n);
    m.style.backgroundColor="yellow";
    }
  }
  function handleChange(e){
  if(e.target.name=="q1")
  {
    if(e.target.id=="st") {
      setAns11(true);
      setAns12(false);
      setAns13(false);
      setAns14(false);
   }
    else
    if(e.target.id=="nd") {
      setAns11(false);
      setAns12(true);
      setAns13(false);
      setAns14(false);
   }
   else
   if(e.target.id=="rd") {
    setAns11(false);
    setAns12(false);
    setAns13(true);
    setAns14(false);
   }
    else
    if(e.target.id=="th") {
      setAns11(false);
      setAns12(false);
      setAns13(false);
      setAns14(true);
   }
  }
  else if(e.target.name=="q2")
  {
    if(e.target.id=="st") {
      setAns21(true);
      setAns22(false);
      setAns23(false);
      setAns24(false);
   }
    else
    if(e.target.id=="nd") {
      setAns21(false);
      setAns22(true);
      setAns23(false);
      setAns24(false);
   }
   else
   if(e.target.id=="rd") {
    setAns21(false);
    setAns22(false);
    setAns23(true);
    setAns24(false);
   }
    else
    if(e.target.id=="th") {
      setAns21(false);
      setAns22(false);
      setAns23(false);
      setAns24(true);
   }
  }
  else if(e.target.name=="q3")
  {
    if(e.target.id=="st") {
      setAns31(true);
      setAns32(false);
      setAns33(false);
      setAns34(false);
   }
    else
    if(e.target.id=="nd") {
      setAns31(false);
      setAns32(true);
      setAns33(false);
      setAns34(false);
   }
   else
   if(e.target.id=="rd") {
    setAns31(false);
    setAns32(false);
    setAns33(true);
    setAns34(false);
   }
    else
    if(e.target.id=="th") {
      setAns31(false);
      setAns32(false);
      setAns33(false);
      setAns34(true);
   }
  }
  else if(e.target.name=="q4")
  {
    if(e.target.id=="st") {
      setAns41(true);
      setAns42(false);
      setAns43(false);
      setAns44(false);
   }
    else
    if(e.target.id=="nd") {
      setAns41(false);
      setAns42(true);
      setAns43(false);
      setAns44(false);
   }
   else
   if(e.target.id=="rd") {
    setAns41(false);
    setAns42(false);
    setAns43(true);
    setAns44(false);
   }
    else
    if(e.target.id=="th") {
      setAns41(false);
      setAns42(false);
      setAns43(false);
      setAns44(true);
   }
  }
  else 
  if(e.target.name=="q5")
  {
    if(e.target.id=="st") {
      setAns51(true);
      setAns52(false);
      setAns53(false);
      setAns54(false);
   }
    else
    if(e.target.id=="nd") {
      setAns51(false);
      setAns52(true);
      setAns53(false);
      setAns54(false);
   }
   else
   if(e.target.id=="rd") {
    setAns51(false);
    setAns52(false);
    setAns53(true);
    setAns54(false);
   }
    else
    if(e.target.id=="th") {
      setAns51(false);
      setAns52(false);
      setAns53(false);
      setAns54(true);
   }
  }
  else if(e.target.name=="q6")
  {
    if(e.target.id=="st") {
      setAns61(true);
      setAns62(false);
      setAns63(false);
      setAns64(false);
   }
    else
    if(e.target.id=="nd") {
      setAns61(false);
      setAns62(true);
      setAns63(false);
      setAns64(false);
   }
    else
    if(e.target.id=="rd") {
    setAns61(false);
    setAns62(false);
    setAns63(true);
    setAns64(false);
   }
    else
    if(e.target.id=="th") {
      setAns61(false);
      setAns62(false);
      setAns63(false);
      setAns64(true);
   }
  }
  else if(e.target.name=="q7")
  {
    if(e.target.id=="st") {
      setAns71(true);
      setAns72(false);
      setAns73(false);
      setAns74(false);
   }
    else
    if(e.target.id=="nd") {
      setAns71(false);
      setAns72(true);
      setAns73(false);
      setAns74(false);
   }
   else
   if(e.target.id=="rd") {
    setAns71(false);
    setAns72(false);
    setAns73(true);
    setAns74(false);
   }
    else
    if(e.target.id=="th") {
      setAns71(false);
      setAns72(false);
      setAns73(false);
      setAns74(true);
   }
  }
  else if(e.target.name=="q8")
  {
    if(e.target.id=="st") {
      setAns81(true);
      setAns82(false);
      setAns83(false);
      setAns84(false);
   }
    else
    if(e.target.id=="nd") {
      setAns81(false);
      setAns82(true);
      setAns83(false);
      setAns84(false);
   }
   else
   if(e.target.id=="rd") {
    setAns81(false);
    setAns82(false);
    setAns83(true);
    setAns84(false);
   }
    else
    if(e.target.id=="th") {
      setAns81(false);
      setAns82(false);
      setAns83(false);
      setAns84(true);
   }
  }
  else if(e.target.name=="q9")
  {
    if(e.target.id=="st") {
      setAns91(true);
      setAns92(false);
      setAns93(false);
      setAns94(false);
   }
    else
    if(e.target.id=="nd") {
      setAns91(false);
      setAns92(true);
      setAns93(false);
      setAns94(false);
   }
   else
   if(e.target.id=="rd") {
    setAns91(false);
    setAns92(false);
    setAns93(true);
    setAns94(false);
   }
    else
    if(e.target.id=="th") {
      setAns91(false);
      setAns92(false);
      setAns93(false);
      setAns94(true);
   }
  }
  else if(e.target.name=="q10")
  {
    if(e.target.id=="st") {
      setAns101(true);
      setAns102(false);
      setAns103(false);
      setAns104(false);
   }
    else
    if(e.target.id=="nd") {
      setAns101(false);
      setAns102(true);
      setAns103(false);
      setAns104(false);
   }
   else
   if(e.target.id=="rd") {
    setAns101(false);
    setAns102(false);
    setAns103(true);
    setAns104(false);
   }
    else
    if(e.target.id=="th") {
      setAns101(false);
      setAns102(false);
      setAns103(false);
      setAns104(true);
   }
  }
  }
  function Question(props) {
    if(props.serial==1) {
      return (
        <div>
      <p>Question 1. What is three fifth of 100?</p>
      <form>
      <input type="radio" id="st" name="q1" value="1" checked={ans11} onChange={handleChange}></input><lable for="st" style={{color:"red"}}>60</lable><br></br>
      <input type="radio" id="nd" name="q1" value="2" checked={ans12} onChange={handleChange}></input><lable for="nd" style={{color:"blue"}}>20</lable><br></br>
      <input type="radio" id="rd" name="q1" value="3" checked={ans13} onChange={handleChange}></input><lable for="rd" style={{color:"orange"}}>3</lable><br></br>
      <input type="radio" id="th" name="q1" value="4" checked={ans14} onChange={handleChange}></input><lable for="th" style={{color:"rgb(110, 20, 39)"}}>5</lable><br></br>
      <button className="clear" onClick={handleClear}>clear options</button>
      </form>
      <button className="save" onClick={handleNext}>save and next</button>
      </div>
      )
    }
    else
    if(props.serial==2) {
      return (
        <div>
      <p>Question 2. If David’s age is 27 years old in 2011. What was his age in 2003?</p>
      <form >
      <input type="radio" id="st" name="q2" value="1" checked={ans21} onChange={handleChange}></input><lable for="st" style={{color:"blue"}}>17 years</lable><br></br>
      <input type="radio" id="nd" name="q2" value="2" checked={ans22} onChange={handleChange}></input><lable for="nd" style={{color:"orange"}}>19 years</lable><br></br>
      <input type="radio" id="rd" name="q2" value="3" checked={ans23} onChange={handleChange}></input><lable for="rd" style={{color:"rgb(110, 20, 39)"}}>20 years</lable><br></br>
      <input type="radio" id="th" name="q2" value="4" checked={ans24} onChange={handleChange}></input><lable for="th" style={{color:"red"}}>37 years</lable><br></br>
      <button className="clear" onClick={handleClear}>clear options</button>
      </form>
      <button className="back" onClick={handleBack}>back</button><button className="save" onClick={handleNext}>save and next</button>
      </div>
      )
    }
    else
    if(props.serial==3) {
      return (
        <div>
      <p>Question 3. What is the remainder of 21 divided by 7?</p>
      <form >
      <input type="radio" id="st" name="q3" value="1" checked={ans31} onChange={handleChange}></input><lable for="st" style={{color:"rgb(110, 20, 39)"}}>21</lable><br></br>
      <input type="radio" id="nd" name="q3" value="2" checked={ans32} onChange={handleChange}></input><lable for="nd" style={{color:"blue"}}>1</lable><br></br>
      <input type="radio" id="rd" name="q3" value="3" checked={ans33} onChange={handleChange}></input><lable for="rd" style={{color:"red"}}>None of these</lable><br></br>
      <input type="radio" id="th" name="q3" value="4" checked={ans34} onChange={handleChange}></input><lable for="th" style={{color:"orange"}}>7</lable><br></br>
      <button className="clear" onClick={handleClear}>clear options</button>
      </form>
      <button className="back" onClick={handleBack}>back</button><button className="save" onClick={handleNext}>save and next</button>
      </div>
      )
    }
    else
    if(props.serial==4) {
      return (
        <div>
      <p>What is 7% equal to?</p>
      <form >
      <input type="radio" id="st" name="q4" value="1" checked={ans41} onChange={handleChange}></input><lable for="st" style={{color:"orange"}}>0.007</lable><br></br>
      <input type="radio" id="nd" name="q4" value="2" checked={ans42} onChange={handleChange}></input><lable for="nd" style={{color:"blue"}}>0.7</lable><br></br>
      <input type="radio" id="rd" name="q4" value="3" checked={ans43} onChange={handleChange}></input><lable for="rd" style={{color:"rgb(110, 20, 39)"}}>7</lable><br></br>
      <input type="radio" id="th" name="q4" value="4" checked={ans44} onChange={handleChange}></input><lable for="th" style={{color:"red"}}>0.07</lable><br></br>
      <button className="clear" onClick={handleClear}>clear options</button>
      </form>
      <button className="back" onClick={handleBack}>back</button><button className="save" onClick={handleNext}>save and next</button>
      </div>
      )
    }
    else
    if(props.serial==5) {
      return (
        <div>
      <p>Question 5. I am a number. I have 7 in the ones place. I am less than 80 but greater than 70. What is my number?</p>
      <form>
      <input type="radio" id="st" name="q5" value="1" checked={ans51} onChange={handleChange}></input><lable for="st" style={{color:"blue"}}>75</lable><br></br>
      <input type="radio" id="nd" name="q5" value="2" checked={ans52} onChange={handleChange}></input><lable for="nd" style={{color:"red"}}>77</lable><br></br>
      <input type="radio" id="rd" name="q5" value="3" checked={ans53} onChange={handleChange}></input><lable for="rd" style={{color:"orange"}}>71</lable><br></br>
      <input type="radio" id="th" name="q5" value="4" checked={ans54} onChange={handleChange}></input><lable for="th" style={{color:"rgb(110, 20, 39)"}}>73</lable><br></br>
      <button className="clear" onClick={handleClear}>clear options</button>
      </form>
      <button className="back" onClick={handleBack}>back</button><button className="save" onClick={handleNext}>save and next</button>
      </div>
      )
    }
    else
    if(props.serial==6) {
      return (
        <div>
      <p>Question 6. How many years are there in a decade?</p>
      <form>
      <input type="radio" id="st" name="q6" value="1" checked={ans61} onChange={handleChange}></input><lable for="st" style={{color:"orange"}}>5</lable><br></br>
      <input type="radio" id="nd" name="q6" value="2" checked={ans62} onChange={handleChange}></input><lable for="nd" style={{color:"rgb(110, 20, 39)"}}>15</lable><br></br>
      <input type="radio" id="rd" name="q6" value="3" checked={ans63} onChange={handleChange}></input><lable for="rd" style={{color:"red"}}>10</lable><br></br>
      <input type="radio" id="th" name="q6" value="4" checked={ans64} onChange={handleChange}></input><lable for="th" style={{color:"blue"}}>20</lable><br></br>
      <button className="clear" onClick={handleClear}>clear options</button>
      </form>
      <button className="back" onClick={handleBack}>back</button><button className="save" onClick={handleNext}>save and next</button>
      </div>
      )
    }
    else
    if(props.serial==7) {
      return (
        <div>
      <p>Question 7. What is the square of 15?</p>
      <form >
      <input type="radio" id="st" name="q7" value="1" checked={ans71} onChange={handleChange}></input><lable for="st" style={{color:"red"}}>225</lable><br></br>
      <input type="radio" id="nd" name="q7" value="2" checked={ans72} onChange={handleChange}></input><lable for="nd" style={{color:"orange"}}>30</lable><br></br>
      <input type="radio" id="rd" name="q7" value="3" checked={ans73} onChange={handleChange}></input><lable for="rd" style={{color:"rgb(110, 20, 39)"}}>252</lable><br></br>
      <input type="radio" id="th" name="q7" value="4" checked={ans74} onChange={handleChange}></input><lable for="th" style={{color:"blue"}}>15</lable><br></br>
      <button className="clear" onClick={handleClear}>clear options</button>
      </form>
      <button className="back" onClick={handleBack}>back</button><button className="save" onClick={handleNext}>save and next</button>
      </div>
      )
    }
    else
    if(props.serial==8) {
      return (
        <div>
      <p>Question 8. What is the value of x if x2 = 169</p>
      <form >
      <input type="radio" id="st" name="q8" value="1" checked={ans81} onChange={handleChange}></input><lable for="st" style={{color:"rgb(110, 20, 39)"}}>169</lable><br></br>
      <input type="radio" id="nd" name="q8" value="2" checked={ans82} onChange={handleChange}></input><lable for="nd" style={{color:"orange"}}>1</lable><br></br>
      <input type="radio" id="rd" name="q8" value="3" checked={ans83} onChange={handleChange}></input><lable for="rd" style={{color:"red"}}>338</lable><br></br>
      <input type="radio" id="th" name="q8" value="4" checked={ans84} onChange={handleChange}></input><lable for="th" style={{color:"blue"}}>13</lable><br></br>
      <button className="clear" onClick={handleClear}>clear options</button>
      </form>
      <button className="back" onClick={handleBack}>back</button><button className="save" onClick={handleNext}>save and next</button>
      </div>
      )
    }
    else
    if(props.serial==9) {
      return (
        <div>
      <p>Question 9. What is the reciprocal of 17/15?</p>
      <form >
      <input type="radio" id="st" name="q9" value="1" checked={ans91} onChange={handleChange}></input><lable for="st" style={{color:"blue"}}>1.13</lable><br></br>
      <input type="radio" id="nd" name="q9" value="2" checked={ans92} onChange={handleChange}></input><lable for="nd" style={{color:"red"}}>17/15</lable><br></br>
      <input type="radio" id="rd" name="q9" value="3" checked={ans93} onChange={handleChange}></input><lable for="rd" style={{color:"rgb(110, 20, 39)"}}>15/17</lable><br></br>
      <input type="radio" id="th" name="q9" value="4" checked={ans94} onChange={handleChange}></input><lable for="th" style={{color:"orange"}}>30/34</lable><br></br>
      <button className="clear" onClick={handleClear}>clear options</button>
      </form>
      <button className="back" onClick={handleBack}>back</button><button className="save" onClick={handleNext}>save and next</button>
      </div>
      )
    }
    else
    if(props.serial==10) {
      return (
        <div>
      <p>Question 10. In a century how many months are there?</p>
      <form >
      <input type="radio" id="st" name="q10" value="1" checked={ans101} onChange={handleChange}></input><lable for="st" style={{color:"rgb(110, 20, 39)"}}>120</lable><br></br>
      <input type="radio" id="nd" name="q10" value="2" checked={ans102} onChange={handleChange}></input><lable for="nd" style={{color:"blue"}}>1200</lable><br></br>
      <input type="radio" id="rd" name="q10" value="3" checked={ans103} onChange={handleChange}></input><lable for="rd" style={{color:"orange"}}>12000</lable><br></br>
      <input type="radio" id="th" name="q10" value="4" checked={ans104} onChange={handleChange}></input><lable for="th" style={{color:"red"}}>12</lable><br></br>
      <button className="clear" onClick={handleClear}>clear options</button>
      </form>
      <button className="back" onClick={handleBack}>back</button><button className="save" onClick={handleNext}>save and submit</button>
      </div>
      )
    }
    else 
    if(props.serial==11) {
      return (
        <div className="ans">
        Score : {marks}
        </div>
      )
    }   
  }
  if(serialno!=11){
  return (
    <>
    <div className="App">
      Quiz App
    </div>
    <div className="serial1">
    <button className="ser" value="1" id="o1" onClick={handleButton} style={{backgroundColor:"yellow"}}>1</button> <button className="ser" value="2" id="o2" onClick={handleButton}>2</button> <button className="ser" value="3" id="o3" onClick={handleButton}>3</button>
    <br></br>
    <button className="ser" value="4" id="o4" onClick={handleButton}>4</button> <button className="ser" value="5" id="o5" onClick={handleButton}>5</button> <button className="ser" value="6" id="o6" onClick={handleButton}>6</button>
    <br></br>
    <button className="ser" value="7" id="o7" onClick={handleButton}>7</button> <button className="ser" value="8" id="o8" onClick={handleButton}>8</button> <button className="ser" value="9" id="o9" onClick={handleButton}>9</button>
    <br></br>
    <button className="ser" id="o10" value="10" onClick={handleButton}>10</button>
    <br></br><br></br><br></br>
    <div style={{textAlign:"left",marginLeft:"40px"}}>
    <button className="ser"  style={{backgroundColor:"yellow"}}></button> Selected
    <br></br>
    <button className="ser"  style={{backgroundColor:"green"}}></button> Saved
    <br></br>
    <button className="ser"  style={{backgroundColor:"pink"}}></button> Visted
    <br></br>
    <button className="ser" ></button> Not Visited
    </div>
    </div>
    <Question serial={serialno}/>
    </>
  );
  }
  else{
    return (
      <>
      <Question serial={serialno}/>
      </>
    )
  }
}
export default App;
