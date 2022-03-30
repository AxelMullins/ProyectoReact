
const Form = () => {

    function eventHandler(e) {
        // e.preventDefault();
        if (e.target.style.background === "blue") {e.target.style.background = "red"}
        else {e.target.style.background = "blue"}
    }

    function stopPropagation(e) {
        e.stopPropagation();
    }

  return (
    <form action="">
        <input type="text" name="user" id="user" />
        <input type="password" name="pass" id="pass" />

        <div onClick={eventHandler} style={ {height: "100px" }}>
            <div onClick={stopPropagation}>
                <input type="submit" name="Enviar" id="" />
            </div>
        </div>

    </form>
  )
}

export default Form