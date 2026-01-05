import "../App.css";
function Home() {
  return (
    <div className="home">
      <div className="home-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
          alt="CTF Icon"
          className="ctf-icon"
        />

        <h1>Welcome to Katana CTF Lab</h1>
        <p>
          Practice Enumeration, SQL Injection, File Upload Bypass and
          Privilege Escalation.
        </p>

       
      </div>
    </div>
  );
}

export default Home;
