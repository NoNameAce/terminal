import type { Rootstate } from "../../store/store";
import type { categoriesI } from "../../logic/interfaces";
import { useEffect } from "react";
import { allFaces, getCategories, individualFaces, legalFaces } from "../../logic/fetchTable";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../logic/hooks";

export default function Categories() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getCategories(dispatch);
  }, []);

  const data = useAppSelector((state: Rootstate) => state.table.data);
  const selected = useAppSelector((state: Rootstate) => state.table.selected);


  return (
    <>
      <div className="h-[100%]">
        <div className="flex items-center justify-between text-[16px] px-[5%]">
          <div className="flex gap-3 items-center">
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
              УСЛУГИ ПО КАТЕГОРИЯМ
            </h1>
          </div>

          <div className="flex gap-5 font-bold">
            <button
              onClick={() => {
                allFaces(dispatch);
              }}
              className={`w-[62px] h-[38px]  rounded-[8px] cursor-pointer ${
                selected === "ВСЕ" ? "bg-[#5EB681] text-white" : "bg-[#F2F2F2]"
              }`}
            >
              ВСЕ
            </button>
            <button
              onClick={() => {
                legalFaces(dispatch);
              }}
              className={`w-[157px] h-[38px] rounded-[8px] cursor-pointer ${
                selected === "ЮР.ЛИЦА"
                  ? "bg-[#5EB681] text-white"
                  : "bg-[#F2F2F2]"
              } `}
            >
              ЮР.ЛИЦА
            </button>
            <button
              onClick={() => individualFaces(dispatch)}
              className={`w-[157px] h-[38px] rounded-[8px] cursor-pointer ${
                selected === "ФИЗ.ЛИЦА"
                  ? "bg-[#5EB681] text-white"
                  : "bg-[#F2F2F2]"
              }`}
            >
              ФИЗ.ЛИЦА
            </button>
          </div>
        </div>

        <div className="h-[95%] overflow-y-auto">
          <div className="grid grid-cols-2 gap-8 mt-8 mr-[2%] ml-[5%]">
            {data.map((el: categoriesI, inx) => {
              return (
                <div
                  key={inx}
                  className="w-[366px] h-[101px] group flex justify-between items-center border-5  p-4 border-[#5DB680] hover:bg-[#5DB680] transition duration-300 cursor-pointer rounded-l-[100px] rounded-r-[100px]"
                  onClick={() => {navigate(`/services/${el.category_id}`)}}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-[69px] h-[69px] p-3 flex items-center justify-center border-5 border-gray-200 rounded-[50%] bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-10 text-[#5DB680]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                        />
                      </svg>
                    </div>

                    <p className="text-[16px] font-bold group-hover:text-white">{el.title_ru}</p>
                  </div>

                  <div className="w-[32px] h-[32px] flex justify-center items-center bg-[#FFB200] rounded-[50%] cursor-pointer group-hover:bg-black ">
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
