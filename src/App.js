import bg from "./images/pattern-bg-desktop.png";
import arrow from "./images/icon-arrow.svg";

function App() {
  return (
    <div>
      <header className="flex flex-col justify-center  ">
        <div>
          <img
            className="w-full py-4 h-72 md:h-80 object-cover absolute  "
            src={bg}
            alt="header background"
          />
        </div>
        <div className="py-8 relative w-full  ">
          <h2 className="text-white font-Rubik text-[14px] mb-4 md:text-xl text-center lg:text-4xl  font-bold">
            IP Address Tracker
          </h2>
          <form className=" flex justify-center sm:max-w-[50%] md:max-w-xl mx-auto ">
            <input
              type="text"
              placeholder="search for any IP address or domains"
              className="py-2 px-3 text-[] rounded-l-lg outline-none md:w-full "
            />
            <button className="bg-black p-4 rounded-r-lg " type="submit">
              <img src={arrow} alt=" icon-arrow" />
            </button>
          </form>
        </div>
        <div className="p-4 relative w-full">
          <div className="bg-white  rounded-lg p-8 sm:mx-4 md:mx-12 gap-3 text-center grid sm:grid-cols-1  md:grid-cols-2 md:text-left lg:grid-cols-4  ">
            <div className=" md:border-r-4">
              <h2 className="text-custom_dark_gray mb-4  font-bold text-[14px] uppercase tracking-wider ">
                Ip Address
              </h2>
              <p className="text-custom_v_dark_gray font-semibold sm:text-[18px] md:text-xl tracking-wider">
                192.345.3330.9
              </p>
            </div>
            <div className="  md:border-r-4  ">
              <h2 className="text-custom_dark_gray font-bold mb-4 text-[14px] uppercase tracking-wider ">
                Location
              </h2>
              <p className="text-custom_v_dark_gray   tracking-wider  font-bold sm:text-[18px]   md:text-xl ">
                Brooklyn, NY 10001
              </p>
            </div>
            <div className=" md:border-r-4">
              <h2 className="text-custom_dark_gray mb-4 font-semibold text-[14px] uppercase tracking-wider ">
                Timezone
              </h2>
              <p className="text-custom_v_dark_gray tracking-wider  font-bold sm:text-[18px]   md:text-xl   ">
                UTC-05:00
              </p>
            </div>
            <div className=" ">
              <h2 className="text-custom_dark_gray mb-4 font-semibold text-[14px] uppercase tracking-wider ">
                ISP
              </h2>
              <p className="text-custom_v_dark_gray tracking-wider  font-bold sm:text-[18px]   md:text-xl   ">
                SpaceX Starlink
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
