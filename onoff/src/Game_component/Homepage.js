import React, { useEffect, useState , useLayoutEffect} from "react";
import { Container,Container1 } from "../Component/styles/Container.styled";




const RepeatedComponent = ({ id, onClick, valuepassing }) => {
    console.log("value", valuepassing)
    console.log(onclick, valuepassing);

    return (
        <>
            {/* <div style={{padding:"2px"}}>
                <button onClick={onClick} style={valuepassing[id]==='X'? {backgroundColor:"darkkhaki", padding:"2px 2px 2px 2px"} :{backgroundColor:"pink"} }>{valuepassing[id]}</button>
            </div> */}

            <div >
                <button onClick={onClick} style={{backgroundColor:valuepassing[id]==='X'? "darkkhaki": "darkmagenta", padding:"10px 10px 10px 10px", fontSize:"", width:"50px", height:"50px", overflow:"hidden"} }>{valuepassing[id]}</button>
            </div>
        </>
    )
}

const Homepage = () => {

    const [set, setValue] = useState();
    const [chance, setChance] = useState(0);
    const [display, setDisplay] = useState(Array(9).fill(null))



    // console.log(chance);
    // console.log(set);
    // console.log(display);


  
    const onhandleclick = (index) => {
        const symbol= chance%2 === 0 ?'X' :'O';
        setValue(symbol)
        setChance(pre => pre + 1);

        const newDisplay = [...display];
        newDisplay[index] = symbol;
        setDisplay(newDisplay);

        // if (chance % 2 === 0) {
        //     setValue('X')
        //     setChance(pre => pre + 1);

        //     const newDisplay = [...display];
        //     newDisplay[index] = 'X';
        //     setDisplay(newDisplay);


        // } else {
        //     setValue('O')
        //     setChance(pre => pre + 1);

        //     const newDisplay = [...display];
        //     newDisplay[index] = 'O';
        //     setDisplay(newDisplay);

        // }
    };


    const WinLogic = () => {
        setTimeout(() => {
            console.log("winlogic", display);
            let flag=0;
    
            if (
                (display[0] === 'X' && display[1] === 'X' && display[2] === 'X') ||
                (display[3] === 'X' && display[4] === 'X' && display[5] === 'X') ||
                (display[6] === 'X' && display[7] === 'X' && display[8] === 'X') ||
                (display[6] === 'X' && display[4] === 'X' && display[2] === 'X') ||
                (display[0] === 'X' && display[4] === 'X' && display[8] === 'X') ||
                (display[1] === 'X' && display[4] === 'X' && display[7] === 'X') ||
                (display[0] === 'X' && display[3] === 'X' && display[6] === 'X') ||
                (display[2] === 'X' && display[5] === 'X' && display[8] === 'X')
            ) {
                console.log("Ajay");
                alert("Ajay Wins");
                setDisplay([null])
                setChance(0);
                flag=1;
            }
    
            if (
                (display[0] === 'O' && display[1] === 'O' && display[2] === 'O') ||
                (display[3] === 'O' && display[4] === 'O' && display[5] === 'O') ||
                (display[6] === 'O' && display[7] === 'O' && display[8] === 'O') ||
                (display[6] === 'O' && display[4] === 'O' && display[2] === 'O') ||
                (display[0] === 'O' && display[4] === 'O' && display[8] === 'O') ||
                (display[1] === 'O' && display[4] === 'O' && display[7] === 'O') ||
                (display[0] === 'O' && display[3] === 'O' && display[6] === 'O') ||
                (display[2] === 'O' && display[5] === 'O' && display[8] === 'O')
            ) {
                console.log("vinayak");
                alert("vinayak Wins");
                setDisplay([null])
                setChance(0);
                flag=1;
            }

            if(flag===0 && chance===9){
                alert("Match Draw.Let's play one more ");
                setDisplay([null])

            }
        }, 0);
    };
    


    useLayoutEffect(() => {
        WinLogic();
    }, [chance])

    const renderRepeatedComponent=()=>{
        let indexValue = 0;
        const component = [];
        for(let key=0; key < 3; key++){
            let insideComponet=[];
            for(let insideKey=0; insideKey <3; insideKey++)
            {
                console.log(indexValue);
                insideComponet.push(
                    <RepeatedComponent 
                        id={indexValue}
                         onClick={() => onhandleclick(indexValue)} 
                         valuepassing={display} />
                )
                indexValue++;
               
            }

            component.push(insideComponet)

           
        }
        return component;
    };

    return (
        <>
            {/* <div style={{ display: "flex"}}> */}

            
            <Container>
      {renderRepeatedComponent().map((value, index) => (
        <Container1 key={index}>
          {value.map((innerValue, innerIndex) => (
            <div key={innerIndex}>
              {innerValue}
            </div>
          ))}
        </Container1>
      ))}
    </Container>
            {/* <Container>
                    {
                        renderRepeatedComponent().map((value, index)=>{
                              <Container1>  {value.map((innerValue,innerIndex)=>{
                                   {innerValue}
                                })}
                               </Container1>
                        })
                    } */}

                {/* <Container1>
                    <RepeatedComponent id={0} onClick={() => onhandleclick(0)} valuepassing={display} />
                    <RepeatedComponent id={1} onClick={() => onhandleclick(1)} valuepassing={display} />
                    <RepeatedComponent id={2} onClick={() => onhandleclick(2)} valuepassing={display} />
                </Container1>
                <Container1>
                    <RepeatedComponent id={3} onClick={() => onhandleclick(3)} valuepassing={display} />
                    <RepeatedComponent id={4} onClick={() => onhandleclick(4)} valuepassing={display} />
                    <RepeatedComponent id={5} onClick={() => onhandleclick(5)} valuepassing={display} />
                </Container1>
                <Container1>
                    <RepeatedComponent id={6} onClick={() => onhandleclick(6)} valuepassing={display} />
                    <RepeatedComponent id={7} onClick={() => onhandleclick(7)} valuepassing={display} />
                    <RepeatedComponent id={8} onClick={() => onhandleclick(8)} valuepassing={display} />
                </Container1> */}
            {/* </Container> */}

                {/* {renderRepeatedComponent().map((component, index) => (
                        // <div key={index}><>{component}</></div>
                        <Container>{component}</Container>
                    ))} */}
            
          
            


        </>
    )
}

export default Homepage;