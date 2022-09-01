import Form from './Form';
import './App.css';
import Board from './Board';
import { useState } from 'react';

function App() {
  const [result, setresult]=useState("")
  function flames(name1, name2){
   
    var count=0;
    var flameNum=0
    localStorage.setItem("names1",name1+"-"+name2)
     localStorage.setItem("names2",name2)
    let arr1=name1.toString().toLowerCase().split('');
    let arr2=name2.toString().toLowerCase().split('');
    arr1.forEach(element => {
        for(let i=arr2.length-1;i>=0;i--){
            if(element==arr2[i]){
                
                arr2.splice(i,1)
                arr1.splice(arr1.indexOf(element),1)
            }
        }
    });
    flameNum=arr1.concat(arr2).length
    console.log(arr1, arr2,name2,flameNum)
    setresult(findFlames(flameNum))
    
   console.log(result)
    return result;

}
function findFlames(num){
    var numCount=0;
    let result='';
    let key=['F','L','A','M','E','S'];
     while(key.length>=2){
        for(let j=0;j<key.length;j++){
            if(key.includes(key[j])){
                numCount+=1}
            
            if(numCount==num){
                key.splice(j,1)
               // console.log(numCount)
               // console.log(key);
                numCount=0
                j=j-1
                
            }
        }
       
    
        }
    switch(key[0]){
        case 'F':
            result='Friend'
        
            break;
        case 'L':
            result='Love'
               break;
        case 'A':
            result='Affection'
       
            break;
        case 'M' :
            result='Marriage'
       
            break;     
        case 'E' :
            result='Enemy'
           
            break;
        case 'S':
            result='Sister'
             break;            
    }
        return result;

 }
  return (
    <div className="App">
      <div className="container">
        <h1 className='heading'>FLAMES - <br /> Find your connection</h1>
        <main>
          <Board result={result}/>
          <Form result={result} flames={flames}/>
        </main>
      </div>
    </div>
  );
}

export default App;
