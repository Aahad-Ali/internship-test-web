import "./App.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBdbX2P4j86OW9KPKQ75hMh9xj-No5l-Dg",
  authDomain: "intern-web123.firebaseapp.com",
  projectId: "intern-web123",
  storageBucket: "intern-web123.appspot.com",
  messagingSenderId: "858891071444",
  appId: "1:858891071444:web:06836b3ff6fd9202403041",
  measurementId: "G-CYTCV8FNMS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");


  const savePost = async (e) => {
    e.preventDefault();

    console.log("userName: ", userName);

    try {

      const docRef = await addDoc(collection(db, "posts"), {
        text: userName,
        // createdOn: new Date().getTime(),
        createdOn: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div className="container">
      <header className="container-head">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://logobam.com/wp-content/uploads/2015/08/designcrawl-logo-main.jpg"
                alt=""
                height={"60px"}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active mx-4 my-3"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active mx-4 my-3" href="#">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active mx-4 my-3">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active mx-4 my-3">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* ====================================================================================== */}
      <div className="container">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://soliloquywp.com/wp-content/uploads/2018/03/slider-placement-featured.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                {/* <p>
                  Some representative placeholder content for the first slide.
                </p> */}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://soliloquywp.com/wp-content/uploads/2018/03/slider-placement-featured.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://soliloquywp.com/wp-content/uploads/2018/03/slider-placement-featured.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* ======================================================================================= */}

      <div className="container my-5">
        <form onSubmit={savePost} className="contact" action="#" >
          <h1>Let`s have a chat</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control my-2"
              placeholder="Username"
              aria-label="Full Name"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setUserName(e.target.value)
              }}
            />
          </div>

          <div className="input-group ">
            <input
              type="email"
              className="form-control  my-3"
              placeholder="Email"
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            />
            {/* <span className="input-group-text">@</span> */}
            <input
              type="number"
              className="form-control mx-3 my-3"
              placeholder="Phone"
            // onChange={(e) => {
            //   setPhone(e.target.value);
            // }}
            />
          </div>

          <div className="input-group">
            {/* <span className="input-group-text">With textarea</span> */}
            <textarea
              className="form-control my-3"
              aria-label="With textarea"
              placeholder="Message"
            // onChange={(e) => {
            //   setMessage(e.target.value);
            // }}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="btn my-3"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Send Message
            </button>
          </div>
          {/* <div className="side-img">
            <img src="https://media.istockphoto.com/id/1131893484/vector/short-message-service-bubbles-with-place-for-text-chat-text-boxes-empty-messaging-bubles.jpg?s=170667a&w=0&k=20&c=jljE6sVHlHzf_Ui8AtY3Kn0KcbO4ErUwBqVOvDirR54=" alt="" className="d-block w-50" />
          </div> */}
        </form>
      </div>
      <div className="container footer">
        <div className="row">
          <div className="col md-5">
            <div className="card">
              <img
                src="https://logobam.com/wp-content/uploads/2015/08/designcrawl-logo-main.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Cloud Nine Web Design,LLC.©2022</p>
                <a href="#">Privacy Policy | Terms & Conditions</a>
              </div>
            </div>
          </div>
          <div className="col md-12 list">
            <ul className="list-group list-group-flush">
              <h3 className="card-title">Services</h3>
              <li className="list-group-item">Web Design</li>
              <li className="list-group-item">Care Plans</li>
              <li className="list-group-item">Hosting</li>
              <li className="list-group-item">Uptime Status</li>
            </ul>
          </div>
          <div className="col md-12">
            <ul className="list-group list-group-flush">
              <h3 className="card-title">Contact</h3>
              <p className="list-group-item">
                249 E.US. Rout 6,Unit #213 Morris, IL 60450
              </p>
              <p className="list-group-item">
                390 S.main St. Roseville, IL 60450
              </p>
              <li className="list-group-item">(851) 585-4800</li>
            </ul>
          </div>
          <div className="col md-5">
            <div className="text-center">
              <img src="./Capture.PNG" className="rounded" alt="..." />
            </div>
          </div>
          <div className="btn-footer">
            <button className="btn footer-btn">Get Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
