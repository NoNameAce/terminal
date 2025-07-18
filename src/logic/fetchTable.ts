import axios from "axios";
import type { AppDispatch } from "../store/store";
import { setData, setSelected } from "../store/table-slice/tableSlice";

export const apiUrl = "http://localhost:3000/data";

export async function getCategories(dispatch: AppDispatch) {
  try {
    const { data } = await axios.get(`${apiUrl}/categories`);
    dispatch(setData(data));
  } catch (error) {
    console.log(error);
  }
}

export async function getGosPresident(dispatch:AppDispatch) {
    try {
        const {data} = await axios.get(`${apiUrl}/gos`)
        console.log(data);
        dispatch(setData(data))
    } catch (error) {
      console.log(error);
    }
}

export async function getServices(dispatch:AppDispatch, id: number) {
    try {
       const {data} = await axios.get(`${apiUrl}/services/${id}`)
       dispatch(setData(data))
    } catch (error) {
      console.log(error);
    }
}

///Service faces

export async function allFaces(dispatch: AppDispatch) {
  dispatch(setSelected("ВСЕ"));
  try {
    const { data } = await axios.get(`${apiUrl}/categories`);
    dispatch(setData(data));
  } catch (error) {
    console.log(error);
  }
}

export async function legalFaces(dispatch: AppDispatch) {
  dispatch(setSelected("ЮР.ЛИЦА"));
  try {
    const { data } = await axios.get(`${apiUrl}/applicant/legal`);
    console.log(data);
    dispatch(setData(data));
  } catch (error) {
    console.log(error);
  }
}

export async function individualFaces(dispatch: AppDispatch) {
  dispatch(setSelected("ФИЗ.ЛИЦА"));
  try {
    const { data } = await axios.get(`${apiUrl}/applicant/individual`);
    console.log(data);
    dispatch(setData(data));
  } catch (error) {
    console.log(error);
  }
}
