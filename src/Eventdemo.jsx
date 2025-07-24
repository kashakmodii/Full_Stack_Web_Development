function EventDemo(){
    // function demo(){
    //         alert("Welcome")
    // }
    const demo = () => {
        alert("Welcome")
    }
    const printData = (event) =>{
        console.log("Type is "+ event.type)
        console.warn("Name is "+ event.target.name)
        console.error("Value is "+ event.target.value)
        console.log(event.target.value)

    }
    return(<>
    <input type="button" onClick={demo} value="ClickMe"/>
    <input type="button" onClick={()=> alert("Inline")} value="Inline"/>
    <input type="button" name="btn1" value="Btn1" onClick={printData}/>
    Text1<input type="text" name="txt1" onChange={printData}/>
    Text2<input type="text" name="txt2" onChange={printData}/>
    </>)
}
export default EventDemo