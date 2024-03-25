import toast from "react-hot-toast";

export const getData = () => {
  let data = [];
  const storedData = localStorage.getItem("data");
  if (storedData) {
    data = JSON.parse(storedData);
  }
  return data;
};

export const saveData = (item) => {
  let allData = getData();
  const isExist = allData.find((singleIte) => singleIte.id === item.id);
  if (isExist) {
    return toast.error("Already Added!");
  }
  allData.push(item);
  localStorage.setItem("data", JSON.stringify(allData));
  toast.success("Added Successfully!");
};

export const deleteData = (id) => {
  let allData = getData();
  const remaining = allData.filter((item) => item.id !== id);
  localStorage.setItem("data", JSON.stringify(remaining));
  toast.success("Removed Successfully!");
};
