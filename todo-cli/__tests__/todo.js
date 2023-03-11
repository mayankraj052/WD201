const todoList = require("../todo");
const {
  all,
  markAsComplete,
  add,
  overdue,
  dueToday,
  dueLater,
  // toDisplayableList,
} = todoList();
describe("TodoList Text Suite", () => {
  beforeAll(() => {
    add({
      title: "Submit assignment1",
      dueDate: new Date().toISOString().slice(0, 10),
      completed: false,
    });
  });
  test("should have empty todo list initially", () => {
    expect(all.length).toBe(1);
    add({
      title: "Submit assignment",
      dueDate: new Date().toISOString().slice(0, 10),
      completed: false,
    });
    expect(all.length).toBe(2);
  });
  test("should have markAsComplete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("should have overdue list", () => {
    let todaydate = new Date();
    add({
      title: "overdue check",
      dueDate: new Date(new Date().setDate(todaydate.getDate() - 1))
        .toISOString()
        .split("T")[0],
      completed: false,
    });
    let a = overdue();
    expect(a.length).toBe(1);
  });
  test("should doLater", () => {
    let todaydate = new Date();
    add({
      title: "due later check",
      dueDate: new Date(new Date().setDate(todaydate.getDate() + 1))
        .toISOString()
        .split("T")[0],
      completed: false,
    });
    let a = dueLater();
    expect(a.length).toBe(1);
  });
  test("should be done today", () => {
    // here we test toDisplayableList function
    let todaydate = new Date();
    add({
      title: "due today check",
      dueDate: todaydate.toISOString().split("T")[0],
      completed: false,
    });
    let a = dueToday();
    // here we test the dueToday function
    expect(a.length).toBe(3);
    // console.log(toDisplayableList(a));
    // expect(toDisplayableList(a)).toBe(
    //   "[x] Submit assignment1\n[ ] Submit assignment"
    // );
  });
});
