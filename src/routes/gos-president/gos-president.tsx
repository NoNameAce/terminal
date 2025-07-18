import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getGosPresident } from "../../logic/fetchTable";
import { useAppDispatch, useAppSelector } from "../../logic/hooks";
import type { GosI } from "../../logic/interfaces";

export default function GosPresident() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getGosPresident(dispatch);
  }, []);


  const data = useAppSelector((state) => state.table.data);
  return (
    <>
      <div className="h-[100%] font-bold">
        <div className="flex gap-3 items-center px-[6%]">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="bg-[#FFB200] hover:bg-black rounded-[50%] w-[32px] h-[32px] flex items-center justify-center cursor-pointer"
          >
            <img
              src="src/assets/Vector (2).svg"
              className="w-[20px] h-[12px]"
              alt=""
            />
          </div>

          <h1 className="text-[22px] font-bold w-[360px] h-[32px]">
            ГОС.УЧЕРЕЖДЕНИЯ
          </h1>
        </div>

        <div className="h-[95%] overflow-y-auto mt-5">
          <div className="flex flex-col  items-center gap-5">
            {data.map((el: GosI, inx) => {
              return (
                <div
                  key={inx}
                  className="flex justify-between items-center w-[815px] h-[101px] rounded-[100px] border-5 border-[#5EB681] px-3 pr-7 cursor-pointer group hover:bg-[#5EB681] transition duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-[69px] h-[69px] border-5 border-[#E6EFEA] rounded-[50%] p-3 bg-white">
                        <img src="src/assets/Union.svg" className="w-[40px] h-[34px] " alt="" />
                    </div>
                    <p className="group-hover:text-white w-[613px]">{el.gos_title}</p>
                  </div>

                  <div className="w-[32px] h-[32px] flex justify-center items-center bg-[#FFB200] rounded-[50%] cursor-pointer group-hover:bg-[black] ">
                    <img src="src/assets/Vector.svg" alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
