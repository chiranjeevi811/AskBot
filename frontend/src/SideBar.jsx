import "./SideBar.css"

export default function SideBar() {
    return (
        <section className="sidebar">
            <button >
                <img src="src/assets/blacklogo.png" alt="gpt logo" className="logo"></img>
                <span><i className="fa-solid fa-pen-to-square"></i></span>
            </button>
            <ul className="history">

            </ul>

            <div className="sign">
                <p>By ApnaCollege &hearts;</p>
            </div>
        </section>
    )
}
