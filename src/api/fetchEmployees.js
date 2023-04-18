import { store } from "../redux/store";
import { setEmployeeDatas } from "../redux/homepageSlice";

export default async function fetchEmployees() {
  await fetch(
    "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
  ).then((response) => {
    response.json().then((data) => {
      data.map((ele) => (ele["votes"] = 0));

      store.dispatch(setEmployeeDatas(data));
    });
  });
}
