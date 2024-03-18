import iconBook from "/images/icon-bookmark.svg";
import iconCheck from "/images/icon-check.svg";
import closeModel from "/images/icon-close-modal.svg";
import logoMaster from "/images/logo-mastercraft.svg";
import Navbar from "./components/Navbar";
import Sucess from "./components/Sucess";

export default function App() {

  const boxinfors = [
    { name: "Bamboo Stand", price: "$25", number: 101, content: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list." },
    { name: "Black Edition Stand", price: "$75", number: 64, content: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included." },
    { name: "Mahogany Special Edition", price: "$200", number: 0, content: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included." },
  ]

  return (
    <main className="min-h-screen">
      <section className="flex flex-col">
        {/* header */}
        <div className="sm:bg-bgDesktop bg-bgMobile h-72">
          <Navbar />
        </div>
        {/* content */}
        <div className="flex flex-col -translate-y-10 justify-center items-center ">
          <div className="max-w-xl flex flex-col gap-4">
            {/* part 1 */}
            <div className=" flex flex-col bg-white border-2 rounded-lg p-4 shadow-md">
              <div className="flex flex-col justify-center items-center mb-4">
                <img src={logoMaster} alt="" className="w-12 h-12 absolute -translate-y-12" />
                <h1 className="font-semibold text-Black mt-4 text-xl">Mastercraft Bamboo Monitor Riser</h1>
                <p className="text-Darkgray"> A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                </p>
              </div>

              <span className="flex flex-row sm:justify-between justify-center items-center">
                <button className="px-4 py-2 bg-Moderatecyan text-white hover:bg-Darkcyan rounded-full font-semibold">Back this project</button>
                <button className="flex flex-row items-center gap-2 bg-gray-300 rounded-full">
                  <img src={iconBook} alt="" className="w-12  hover:text-Darkcyan" />
                  <p className="hidden sm:block pr-2 text-Darkgray font-semibold  hover:text-Darkcyan">Bookmark</p>
                </button>
              </span>
            </div>
            {/* part 2 */}
            <div className=" flex flex-col bg-white border-2 rounded-lg p-4 shadow-md">
              <div className="flex flex-col sm:flex-row text-center sm:text-justify p-2 gap-4 sm:divide-x-2 divide-x-0 divide-y-2 sm:divide-y-0">

                <span className="flex flex-col sm:w-1/3">
                  <h1 className="text-xl font-semibold text-Black">$89,914</h1>
                  <p className="text-Darkgray">of $100,000 backed</p>
                </span>
                <span className="flex flex-col sm:w-1/3">
                  <h1 className="text-xl font-semibold text-Black">5,007</h1>
                  <p className="text-Darkgray">total backers</p>
                </span>

                <span className="flex flex-col sm:w-1/3">
                  <h1 className="text-xl font-semibold text-Black">56</h1>
                  <p className="text-Darkgray">days left</p>
                </span>

              </div>
              <div className="border-2 rounded-full">
                <p className="py-2 bg-Moderatecyan rounded-full"></p>
              </div>

            </div>
            {/* part 3 */}
            <div className=" flex flex-col  bg-white border-2 rounded-lg p-4 shadow-md">
              {/* contenr */}
              <div className="flex flex-col gap-4">
                <h1 className="text-Black"> About this project</h1>
                <p className="text-Darkgray">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                  to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                  your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

                <p className="text-Darkgray"> Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                  to allow notepads, pens, and USB sticks to be stored under the stand.</p>
              </div>
              {/* boxs */}
              <div className="flex flex-col gap-4">
                {boxinfors.map((box, index) => (
                  <div key={index} className={`border-2 rounded-lg p-4 flex flex-col gap-2 ${box.number === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
                    <span className="flex flex-col sm:flex-row justify-between ">
                      <h1 className="font-semibold text-Black">{box.name}</h1>
                      <p className="text-Moderatecyan">Pledge {box.price} or more</p>
                    </span>
                    <p className="text-Darkgray">{box.content}</p>
                    <span className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <h1 className="text-Darkgray"><span className="text-Black font-semibold text-xl">{box.number} </span>left</h1>
                      <button className="text-white px-4 py-2 rounded-full bg-Moderatecyan w-1/2 sm:w-auto hover:bg-Darkcyan">{box.number === 0 ? "out of stock" : "Select Reward"}</button>
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
