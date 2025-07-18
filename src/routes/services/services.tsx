import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../logic/hooks";
import { useEffect } from "react";
import type { ServicesI } from "../../logic/interfaces";
import { getServices } from "../../logic/fetchTable";

import VectorIcon from "../../assets/Vector.svg";
import Vector2Icon from "../../assets/Vector (2).svg";
import UnionIcon from "../../assets/Union.svg";

export default function Services() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) getServices(dispatch, Number(id));
  }, [dispatch, id]);

  const data = useAppSelector((state) => state.table.data) as ServicesI[];

  return (
    <div className="h-full font-bold">
      <div className="flex gap-3 items-center px-[6%]">
        <div
          onClick={() => navigate("/categories")}
          className="bg-[#FFB200] hover:bg-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <img src={Vector2Icon} className="w-[20px] h-[12px] p-3" alt="Back" />
        </div>
        <h1 className="text-[22px] font-bold w-[360px] h-8">
          {data?.[0]?.title || "Loading..."}
        </h1>
      </div>

      <div className="h-[95%] overflow-y-auto mt-5">
        <div className="flex flex-col items-center gap-5">
          {data?.map((el, inx) => (
            <div
              key={inx}
              className="flex justify-between items-center w-[815px] h-[101px] rounded-[100px] border-5 border-[#5EB681] px-3 pr-7 cursor-pointer group hover:bg-[#5EB681] transition duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-[69px] h-[69px] border-5 border-[#E6EFEA] rounded-full p-3 bg-white">
                  <img src={UnionIcon} alt="Icon" />
                </div>
                <p className="group-hover:text-white w-[613px]">
                  {el.title_ru}
                </p>
              </div>
              <div className="w-8 h-8 flex justify-center items-center bg-[#FFB200] rounded-full cursor-pointer group-hover:bg-black">
                <img src={VectorIcon} alt="Arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
