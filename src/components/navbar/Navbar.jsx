import "./NavBar.css";

export function NavBar({ progress, text }) {
  return (
    <>
      <section className="nav-bar">
        <h2>{text}</h2>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
