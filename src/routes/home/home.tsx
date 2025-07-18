import { useNavigate } from "react-router-dom";
import type { categoriesI } from "../../logic/interfaces";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../logic/hooks";
import { getCategories } from "../../logic/fetchTable";


export default function Home() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
     
    getCategories(dispatch);

  }, []);
  const data = useAppSelector((state) => state.table.data);
  return (
    <>
      <div className="flex h-[100%]">
        <div className="w-[50%] pt-1 px-10">
          <div>
            <h1 className="w-[449px] h-[52px] font-bold text-[22px] leading-7">
              <span className="text-[#5DB680]">ДОБРО ПОЖАЛОВАТЬ,</span> <br />
              ВЫБЕРИТЕ ЖЕЛАЕМУЮ УСЛУГУ
            </h1>
          </div>

          <div className="bg-[#5DB680] text-white w-[366px] h-[228px] mt-9 p-6 rounded-[8px] ">
            <div className="flex gap-5 items-center">
              <div className="bg-white w-[100px] h-[100px] rounded-[50%] mt-2">
                <img
                  src="src/assets/Star 7.svg"
                  className="w-[60px] h-[60px] m-auto mt-4"
                  alt=""
                />
              </div>
              <h1 className="w-[183px] h-[96px] text-[22px] pt-[25px]">
                УСЛУГИ ПО КАТЕГОРИЯМ
              </h1>
            </div>

            <div className="mt-8">
              <button
                onClick={() => navigate("/categories")}
                className="flex items-center justify-between w-[202px] h-[36px] text-[16px] bg-black cursor-pointer hover:bg-black/70 px-[4%] py-[2%] rounded-xl"
              >
                ПЕРЕЙТИ
                <img
                  src="src/assets/Arrow 6.svg"
                  className="w-[31px]  "
                  alt=""
                />
              </button>
            </div>
          </div>

          <div className="flex gap-5 justify-center items-center px-5 bg-[#5DB680] w-[366px] h-[100px] mt-8 rounded-[8px] text-white">
            <p className="text-[22px]">ГОС.УЧЕРЕЖДЕНИЯ</p>
            <button onClick={() => {navigate('/gos-president')}} className="bg-black p-1 rounded-xl mt-1 hover:bg-black/70 cursor-pointer w-[36px] h-[36px] ">
              <img
                src="src/assets/Arrow 7.svg"
                className="w-[18px] ml-1"
                alt=""
              />
            </button>
          </div>

          <div className="text-white mt-8 flex gap-[30px]">
            <div className="bg-[#5DB680] w-[167px] h-[100px]  rounded-xl p-[2%] text-center">
              <button className="w-[36px] h-[36px] bg-black px-2 rounded-xl mt-3 hover:bg-black/70 cursor-pointer">
                <img src="src/assets/Arrow 7.svg" width={"18px"} alt="" />
              </button>

              <p className="text-[16px] mt-2 ">ЮР.ЛИЦА</p>
            </div>

            <div className="bg-[#5DB680] w-[167px] h-[100px]  rounded-xl p-[2%] text-center">
              <button className="w-[36px] h-[36px] bg-black px-2 rounded-xl mt-3 hover:bg-black/70 cursor-pointer">
                <img src="src/assets/Arrow 7.svg" width={"18px"} alt="" />
              </button>

              <p className="text-[16px] mt-2 ">ФИЗ.ЛИЦА</p>
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <label htmlFor="search-input" onClick={() => navigate("/search")}>
            <div className="flex justify-center items-center  ml-[10%] p-5 w-[377px] h-[55px] bg-gray-200 rounded-l-[60px] rounded-r-[60px] cursor-pointer">
              <input
                id="search-input"
                type="search"
                placeholder="ПОИСК УСЛУГ"
                className="text-2xl w-[167px] h-[35px] text-[16px] text-[#939393] font-bold border-none focus:outline-none"
                // onInput={(e: HTMLElement<>) => searchFunc(e.target.value)}
              />

              <img
                src="src/assets/Vector (1).svg"
                className="w-[18px] h-[18px]"
                alt=""
              />
            </div>
          </label>

          <div className="mt-10 border-l-[12px] border-gray-200 pl-[10%] h-[89%] overflow-y-auto">
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center bg-[#FFB200] w-[32px] h-[32px] rounded-[50%]">
                <img
                  src="src/assets/Star 8.svg"
                  className="w-[22px] h-[22px] "
                  alt=""
                />
              </div>

              <p className="text-[16px] font-bold w-[366px] h-[33px] pt-1 ">
                ПОПУЛЯРНЫЕ УСЛУГИ
              </p>
            </div>

            <div className="flex flex-col gap-7 font-bold pr-4 pt-6">
              {data.slice(0, 10).map((el: categoriesI, inx) => {
                return (
                  <div
                    key={inx}
                    className="w-[366px] h-[101px] group flex justify-between items-center border-5  p-4 border-[#5DB680] hover:bg-[#5DB680] cursor-pointer transition duration-300 rounded-l-[100px] rounded-r-[100px]"
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

                    <div className="w-[32px] h-[32px] flex justify-center items-center bg-[#FFB200] group-hover:bg-[black] cursor-pointer rounded-[50%] ">
                      <img src="src/assets/Vector.svg" alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
