import _ from "lodash";
import "./style.css";

const taskArray = [
  {
    index: 0,
    descriptions: "I  will code",
    completed: true,
  },
  {
    index: 1,
    descriptions: "i love code",
    completed: false,
  },
  {
    index: 2,
    descriptions: "i like webpack",
    completed: true,
  },
  {
    index: 3,
    description: "I love microverse",
    completed: false,
  },
];

const list = document.getElementById("order");

const createList = () => {
  const sortedArray = taskArray.sort((a, b) => a.index - b.index);
  sortedArray.forEach((task) => {
    const eachTask = document.createElement("li");
    eachTask.innerHTML = `<div id="eachTask">
        <div><input type="checkbox" name=" " class="task">
        <label for="">${task.descriptions}</label></div>
        <i class="fa fa-ellipsis-v"></i>
        </div><hr>`;
    list.appendChild(eachTask);
  });
};

document.addEventListener("DOMContentLoaded", createList);