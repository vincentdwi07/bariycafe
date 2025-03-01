import Navbar from "./Component/navbar";
import NoodleDivider from "./Component/NoodleDivider";

export default function Home() {
  const tasteDesc = ["FRESH", "BOLD", "STRONG", "PURE", "RICH", "DARK", "VIBRANT"]
  return (
    <>
      <Navbar/>
      <div className="cover">
          <div className="socmed-group mx-5">
            <div className="socmed-icon"><i className="bi bi-whatsapp"></i></div>
            <div className="socmed-icon"><i className="bi bi-instagram"></i></div>
            <div className="socmed-icon"><i className="bi bi-tiktok"></i></div>
          </div>
          <h1 className="tagline">NGOPI DULU <br />BARU PULANG</h1>
          <div className="coffee-beans">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="cover-content">
            <img className="coffee-img" src="/cover/coffee-cup-left.png"  alt="" />
            <div className="coffee-name">*Es Kopi Susu Citraland</div>
            <img className="cup-shadow" src="/cover/cup-shadow.png" alt="" />
            <img className="coffee-splash" src="/cover/coffee-splash.png" alt="" />
            <p className="text-light position-absolute working-hours mx-5">Working Hours: <br />9:00 AM - 9:00 PM</p>
            <p className="quotes position-absolute mx-5">Drinking coffee not only boosts your energy but also enhances focus, making it the perfect companion for productivity and moments of relaxation!</p>
          </div>

      </div>

      <div className="aesthetic-place px-3 px-sm-5">
        <h1 className="text-center title" >A Story in Every Sip at <span style={{ textTransform: "capitalize" }}><span style={{ color: "#917536" }}>Bariy</span><span style={{ color: "black" }}>Cafe</span></span></h1>
        <div className="gallery">
          <div className="div1"></div>
          <div className="div2"></div>
          <div className="div3"></div>
          <div className="div4"></div>
          <div className="div5"></div>
          <div className="div6"></div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="taste-perfection px-3 px-sm-5 overflow-hidden">
        <div className="row h-100 taste-wrap">
          <div className="col-md-7 col-12 taste-perfection-left-side">
          {tasteDesc.map((taste, index) => (
            <h1 
              className={`taste-desc ${index % 2 == 0 ? "taste-desc-hollow" : ""}`} 
              key={index}
            >
              {taste}.
            </h1>
          ))}
          </div>
          <div className="col-md-4 col-12  taste-perfection-right-side">
            <img className="coffee-cup-taste" src="/cover/coffee-cup-left.png" alt="" />
            <img className="cup-shadow-taste" src="/cover/cup-shadow.png" alt="" />
            <img className="coffee-splash-taste" src="/cover/coffee-splash-2.png" alt="" />
            <h1 className="title-solid">TASTE PERFECTION</h1>
            <h1 className="title-hollow">TASTE PERFECTION</h1>
          </div>
        </div>
      </div>

      <div className="secret-behind px-3 px-sm-5">
        <h1 className="title">THE <span style={{ color: "#492b17" }}>SECRET</span> BEHIND EVERY CUP</h1>
        <div className="beans-group mt-3">
          <div className="beans-content">
            <div className="position-relative">
              <div className="beans-title">ARABICA</div>
              <div className="beans-title">ARABICA</div>
              <div className="beans-title">ARABICA</div>
              <img src="/beans/arabica-bean.png" alt="" />
            </div>
            <p className="text-center bean-desc">smooth, complex, low caffeine</p>
          </div>
          <div className="beans-content">
            <div className="position-relative">
              <div className="beans-title">ROBUSTA</div>
              <div className="beans-title">ROBUSTA</div>
              <div className="beans-title">ROBUSTA</div>
              <img src="/beans/robusta-bean.png" alt="" />
            </div>
            <p className="text-center bean-desc">strong, bitter, high caffeine</p>
          </div>
          <div className="beans-content">
            <div className="position-relative">
              <div className="beans-title">EXCELSA</div>
              <div className="beans-title">EXCELSA</div>
              <div className="beans-title">EXCELSA</div>
              <img src="/beans/excelsa-bean.png" alt="" />
            </div>
            <p className="text-center bean-desc">smooth, fruity, low caffeine</p>
          </div>
        </div>
        <div className="btn-beverages text-center mt-5">
          <a href="" className="beverage-link">
            TAKE A SIP 
          </a>
        </div>
      </div>


      {/* NOODLE */}
      <NoodleDivider/>

      <div className="noodle-section px-3 px-sm-5">
        <div className="noodle-cover">
          <h1 className="tagline">Noodle Up Your Best Day!</h1>
          <div className="noodles-decoration">
            <img className="noodle-decoration" src="/noodle/noodle-decoration.png" alt="" />
            <img className="noodle-decoration" src="/noodle/noodle-decoration.png" alt="" />
            <img className="noodle-decoration" src="/noodle/noodle-decoration.png" alt="" />
          </div>
          <img className="noodle-scratch" src="/noodle/noodle-scratch.png" alt="" />
          <div className="noodle-name">*Mie Jelata</div>
        </div>
      </div>
      <div className="noodle-description gap-5 d-flex text-center align-items-center justify-content-center position-relative">
        <div className=" position-relative noodle-desc-img">
          <img className="noodle-decoration-desc" src="/noodle/noodle-decoration.png" alt="" />
        </div>
        <div className="noodle-desc-main">
          <h1 className="text-center tagline">MIE JURAGAN, <br /> MIE JELATA</h1>
          <p>When our springy noodles meet bold spices, every bite becomes an irresistible craving. Our spicy, chewy noodles are the perfect match for your coffee and the ultimate companion for powering through your tasks.</p>
          <a href="" className="noodle-btn">Check it Out</a>
        </div>
        <div className=" position-relative  noodle-desc-img">
          <img className="noodle-decoration-desc" src="/noodle/noodle-decoration.png" alt="" />
        </div>
      </div>

      {/* WORKING SPACE */}
      <div className="working-space">
        <div className="overlay"></div>
        <h1 className="tagline">GET YOUR TASK <br /> DONE AT <span style={{ textTransform: "capitalize" }}><span style={{ color: "#917536" }}>Bariy</span><span style={{ color: "black" }}>Cafe</span></span></h1>
        <img src="/working/working-space.png" alt="" />
      </div>
      <div className="working-space-desc px-3 px-sm-5">
          <h1>Rent our working space, <br />get things done.</h1>
          <div className="working-space-grid">
            <div className="working-space-grid-content1">
              <div className="overlay"></div>
              <h2>Working Area</h2>
            </div>
            <div className="working-space-grid-content2">
              <div className="overlay"></div>
              <h2 className="text-center">Standing <br /> AC</h2>
            </div>
            <div className="working-space-grid-content3">
              <div className="overlay"></div>
              <h2>Screen Projector</h2>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <a className="working-space-btn" href="">EXPLORE NOW</a>
          </div>
      </div>

      <div className="kayuputih px-3 px-sm-5">
        <div className="overlay"></div>
        <div className="overlay2"></div>
        <img src="/logo-kayuputih.png" alt="" />
        <h1>CHECK OUR PARTNER</h1>
        <a href="" className="kayuputih-btn">VISIT NOW</a>
      </div>
    </>
  );
}
