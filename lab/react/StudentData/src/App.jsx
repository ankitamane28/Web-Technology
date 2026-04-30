import Student from "./Student";

function App(){

    const showMessage = () => {
        alert("Button Clicked");
    };
    return(
        <>
        <h1>Student Info</h1>
        <button onClick = {showMessage}>Click Me</button>
        <Student name = "ankita" age = "20" course = "AIML"/>

        </>
    );
}export default App;