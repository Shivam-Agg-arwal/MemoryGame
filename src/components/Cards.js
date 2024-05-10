import React, { useEffect, useState } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';
import Reset from './Reset';
import toast from 'react-hot-toast';

const Cards = ({ colours,greycolour }) => {
  const [colourArr, setColourArr] = useState(colours);//original colour array 
  const [currcolor,setcurrcolor]=useState(greycolour);
  const [fixed,setfixed]=useState([]);
  const [prev,setprev]=useState(-1);
  const [score,setscore]=useState(50);


  function GameInstructions(){
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://developer.android.com/static/images/cluster-illustrations/controllers.svg"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Shivam Aggarwal
              </p>
              <p className="mt-1 text-sm text-gray-500">
                <pre>Hello! Here are some rules<br/>
                +10 : For A Match <br/>
                -5  : For A Mismatch<br/>
                -4  : For Checking Out</pre>

              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ))
  }



  useEffect(()=>{
    console.log("page updated");
  },[colourArr,currcolor,fixed,prev]);


  function resetgame(){
    randomize();
    setfixed([]);
    setcurrcolor(greycolour);
    setscore(50);
    setprev(-1);
    console.log("game reset");
    GameInstructions();
  }

  function randomize() {
    const newArr = [...colourArr];
    let value = Math.random() * 100 + 10;
    console.log(value);
    for (let i = 0; i < value; i++) {
      let randomIndex1 = Math.floor(Math.random() * colours.length);
      let randomIndex2 = Math.floor(Math.random() * colours.length);
      let temp = newArr[randomIndex1];
      newArr[randomIndex1] = newArr[randomIndex2];
      newArr[randomIndex2] = temp;
    }
    console.log(newArr);
    setColourArr(newArr);
  }

  function handleclick(index){
    console.log("click hua");
    if(fixed.includes(index)){
      console.log("ye mene fixed m dal idya h ");
      return ;
    }


    if(currcolor[index]==="#C8E571"){
      let newArr=[...currcolor];
      newArr[index]=colourArr[index];
      setcurrcolor(newArr);
      console.log("grey s asli colour dikhao");
      console.log("timeout m jao ");
      if(prev===-1){
        console.log("isse previous bana do ");
        setprev(index);
      }
      else if(colourArr[prev]===colourArr[index]){
        const newArr=[...fixed];
        newArr.push(prev);
        newArr.push(index);
        setfixed(newArr);
        console.log("prev s match hogya ab dono fix ");
        setscore(score+10);
        setprev(-1);
        console.log(fixed);
        console.log(colours);
        if(fixed.length+2>=colours.length){
          // alert(`Game completed . You scored ${score} `);
          toast(`Game Completed . Score: ${score}!`, {
            icon: '👏',
          });
          resetgame();
        }
      }
      else{
        setTimeout(()=>{
          console.log("timeout m agya");
        //match nhi hua 
          //flip both 
          const newArr=[...currcolor];
          newArr[prev]="#C8E571";
          newArr[index]="#C8E571";
          setcurrcolor(newArr);
          console.log("previous s match ni hua wapas grey hoja");
          setscore(score-5);
          setprev(-1);
        }
      ,400);
      }
    }
    else{
      let newArr=[...currcolor];
      newArr[index]="#C8E571";
      setcurrcolor(newArr);
      setprev(-1);
      console.log("grey krdo wapas ");
      console.log("prev bhi hta do");
      setscore(score-4);
    }
  }

  return (
    <div className='w-full h-full'>
      <div className='flex flex-wrap w-full h-[8/10]'>
        {currcolor.map((colour, i) => (
          <Card key={i} colour={colour} index={i} clicked={handleclick} ></Card>
        ))}
      </div>
      <div className='flex justify-center space-around gap-16 mt-4 w-full h-[2/10]'>
        <Scoreboard score={score} GameInstructions={GameInstructions}></Scoreboard>
        <Reset resetgame={resetgame}></Reset>
      
      </div>
    </div>
  );
};

export default Cards;
