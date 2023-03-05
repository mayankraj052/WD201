const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    over = [];
    for (let i = 0; i < all.length; i++) {
      if (Object.values(all[i])[1] === yesterday) {
        over.push(all[i]);
      }
    }

    return over;
  };

  const dueToday = () => {
    duet = [];
    for (let i = 0; i < all.length; i++) {
      if (Object.values(all[i])[1] === today) {
        duet.push(all[i]);
      }
    }

    return duet;
  };

  const dueLater = () => {
    duel = [];
    for (let i = 0; i < all.length; i++) {
      if (Object.values(all[i])[1] === tomorrow) {
        duel.push(all[i]);
      }
    }

    return duel;
  };

  const toDisplayableList = (l) => {
    a = "";
    for (let i = 0; i < l.length; i++) {
      if (Object.values(l[i])[1] === today) {
        if (Object.values(l[i])[2] === true) {
          a += "[" + "x] " + Object.values(l[i])[0] + "\n";
        } else {
          a += "[ ] " + Object.values(l[i])[0] + " " + "\n";
        }
      } else {
        if (Object.values(l[i])[2] === true) {
          a +=
            "[" +
            "x] " +
            Object.values(l[i])[0] +
            " " +
            Object.values(l[i])[1] +
            "\n";
        } else {
          a +=
            "[ ] " +
            Object.values(l[i])[0] +
            " " +
            Object.values(l[i])[1] +
            "\n";
        }
      }
    }
    return a;
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
