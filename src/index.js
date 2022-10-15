import _ from "lodash";
import "./style.css";

import addedTask from "./modules/class.js";
import {
  addToLocalStorage,
  getFromLocalStorage,
} from "./modules/localstorage.js";
import displayList from "./modules/displaylist.js";
import checkBox from "./modules/checkbox.js";

const filledTask = document.getElementById("addButton");
filledTask.addEventListener("click", () => {
  const myTask = document.getElementById("inputTask");
  if (myTask.value) {
    addedTask.taskObject(myTask.value);
    addedTask.reAssignIndex();
    displayList();
    myTask.value = "";
    checkBox();
  } else {
    alert("fill the task to add");
  }
});

const handleInputChange = (id) => {
  const theid = document.getElementById(`edible${id}`);
  for (let p of addedTask.taskArray) {
    if (p.index === id) {
      p.description = theid.value;
    }
  }
  addToLocalStorage();
  displayList();
};

if (localStorage.getItem("storedTask") == null) {
  addToLocalStorage();
} else {
  getFromLocalStorage();
}

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  let task = addedTask.getTasks();
  let newArr = task.filter((each) => each.completed === false);
  addedTask.taskArray = newArr;
  addToLocalStorage();
  addedTask.reAssignIndex();
  window.location.reload();
});

window.handleInputChange = handleInputChange;
checkBox();
