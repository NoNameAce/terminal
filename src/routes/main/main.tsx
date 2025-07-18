import { Outlet } from "react-router-dom";

import logoImage from "../../assets/Group 15.svg"
export default function Main() {

  return (
    <div className="h-screen flex items-center justify-center bg-[#5DB680] bg-gradient-to-b from-[#5DB680] from-22% to-white">
      <div>
        <div className="flex justify-between  w-[960px]">
          <div className="flex gap-4 text-white items-center">
            <img src={logoImage} alt="" className="w-[159px] " />
            <p className="w-[366px] h-[38px] text-[16px] font-bold mt-3">
              ЦЕНТР ОБСЛУЖИВАНИЯ НАСЕЛЕНИЯ
            </p>
          </div>

          <div>
            <select defaultValue={"ru"} className="w-[157px] h-[32] text-center font-sans font-bold text-[16px] cursor-pointer bg-white p-2 rounded appearance-none">
              <option  value="en" className="text-sm">
                ENGLISH
              </option>
              <option className="text-sm" value="ru">
                РУССКИЙ
              </option>
              <option className="text-sm" value="tj">
                ТОЧИКИ
              </option>
            </select>
          </div>
        </div>

        <div className="bg-white w-[960px] h-[640px] py-8 px-[2%] rounded-[8px] mt-5 overflow-hidden">
            <Outlet />
        </div>
      </div>
    </div>
  );
}
