function App() {
  return (
    <div className="flex min-h-full flex-col justify-center items-center sm:w-full sm:max-w-sm sm:mx-auto mt-20">
      <div className="bg-[#FFFFFF] border border-[#DDDDDD] rounded-[2px] md:w-[400px]">
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2 justify-end mr-[10px] mt-[10px]">
            <div>
              <img src="../public/world.png" className="w-[25px]" />
            </div>
            <div className="text-[14px] text-[#6c757d] font-ciscosans">
              <p>US</p>
              <p>EN</p>
            </div>
          </div>
          <div className="px-[90px] py-[15px] flex justify-center border-[#DDDDDD] border-b">
            <img
              src="../public/fs0a411g73DFKaj7K5d7.png"
              className="w-[76px]"
            />
          </div>
        </div>
        <div className="py-[60px] px-[37px] mt-[20px]">
          <form className="font-ciscosans  flex justify-center flex-col items-center">
            <p className="text-[#5e5e5e] text-[24px] mt-[10px] mb-[15px]">Log in</p>
            <div className="flex flex-col w-full">
              <label className="font-bold text-[14px] text-[#5e5e5e]">
                Email
              </label>
              <input className="border border-[#DDDDDD] rounded-[2px] text-[14px] px-[8px] py-[6px] text-[#5e5e5e]" />
            </div>
            <button className="bg-[#0175A2] text-white w-full h-[50px] rounded-3xl mt-[50px]">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
