// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input type="password" onChange={Change}/>
        </div>
    )
}

export default Keypad;

function Change(){
    console.log("Entering password...")
}