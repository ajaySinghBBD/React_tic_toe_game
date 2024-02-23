import React, { useEffect, useState , useLayoutEffect} from "react";




const RepeatedComponent = ({ id, onClick, valuepassing }) => {
    console.log("value", valuepassing)
    console.log(onclick, valuepassing);

    return (
        <>
            <div>
                <button onClick={onClick} style={valuepassing[id]==='X'? {backgroundColor:"violet", border:"none", padding:"3px 8px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"10px"} :{backgroundColor:"pink"} }>{valuepassing[id]}</button>
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
        const symbol= chance%2 === 0 ?'X' :'o';
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
        //     setValue('o')
        //     setChance(pre => pre + 1);

        //     const newDisplay = [...display];
        //     newDisplay[index] = 'o';
        //     setDisplay(newDisplay);

        // }
    };


    const WinLogic = () => {
        setTimeout(() => {
            console.log("winlogic", display);
    
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
            }
    
            if (
                (display[0] === 'o' && display[1] === 'o' && display[2] === 'o') ||
                (display[3] === 'o' && display[4] === 'o' && display[5] === 'o') ||
                (display[6] === 'o' && display[7] === 'o' && display[8] === 'o') ||
                (display[6] === 'o' && display[4] === 'o' && display[2] === 'o') ||
                (display[0] === 'o' && display[4] === 'o' && display[8] === 'o') ||
                (display[1] === 'o' && display[4] === 'o' && display[7] === 'o') ||
                (display[0] === 'o' && display[3] === 'o' && display[6] === 'o') ||
                (display[2] === 'o' && display[5] === 'o' && display[8] === 'o')
            ) {
                console.log("vinayak");
                alert("vinayak Wins");
                setDisplay([null])
            }
        }, 0);
    };
    


    useLayoutEffect(() => {
        WinLogic();
    }, [chance])


    return (
        <>
            <div style={{ display: "flex" }}>


                <div>
                    <RepeatedComponent id={0} onClick={() => onhandleclick(0)} valuepassing={display} />
                    <RepeatedComponent id={1} onClick={() => onhandleclick(1)} valuepassing={display} />
                    <RepeatedComponent id={2} onClick={() => onhandleclick(2)} valuepassing={display} />
                </div>
                <div>
                    <RepeatedComponent id={3} onClick={() => onhandleclick(3)} valuepassing={display} />
                    <RepeatedComponent id={4} onClick={() => onhandleclick(4)} valuepassing={display} />
                    <RepeatedComponent id={5} onClick={() => onhandleclick(5)} valuepassing={display} />
                </div>
                <div>
                    <RepeatedComponent id={6} onClick={() => onhandleclick(6)} valuepassing={display} />
                    <RepeatedComponent id={7} onClick={() => onhandleclick(7)} valuepassing={display} />
                    <RepeatedComponent id={8} onClick={() => onhandleclick(8)} valuepassing={display} />
                </div>
            </div>




        </>
    )
}

export default Homepage;