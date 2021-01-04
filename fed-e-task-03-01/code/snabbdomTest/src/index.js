import { h } from "snabbdom/h";
import { init } from "snabbdom/init";
import { eventListenersModule } from "snabbdom/modules/eventlisteners";
let patch = init([eventListenersModule]);
let index = 0;

// 首次渲染
let set = new Map([
  [
    index++,
    h("li", { key: index }, [
      h("span", "1"),
      h(
        "span",
        {
          on: {
            click: (e) => dele(e),
          },
        },
        "删除"
      ),
    ]),
  ],
]);
let vnode = h("ul", [...set.values()]);
let app = document.querySelector("#app");
let oldVnode = patch(app, vnode);

// 点击增加
const add = document.getElementById("add");
add.addEventListener("click", () => {
  set.set(
    ++index,
    h("li", { key: index }, [
      h("span", `${index}`),
      h(
        "span",
        {
          on: {
            click: (e) => dele(e),
          },
        },
        "删除"
      ),
    ])
  );

  vnode = h("ul", [...set.values()]);
  oldVnode = patch(oldVnode, vnode);
});

// 点击正序
const sort1 = document.getElementById("sort1");
sort1.addEventListener("click", () => {
  let newSet = [...set.values()];
  newSet.sort((a, b) => {
    return a.key - b.key;
  });
  set = new Map();
  newSet.forEach((element) => {
    set.set(element.key, element);
  });
  vnode = h("ul", [...set.values()]);
  oldVnode = patch(oldVnode, vnode);
});

// 点击反序
const sort2 = document.getElementById("sort2");
sort2.addEventListener("click", () => {
  let newSet = [...set.values()];
  newSet.sort((a, b) => {
    return b.key - a.key;
  });
  set = new Map();
  newSet.forEach((element) => {
    set.set(element.key, element);
  });
  vnode = h("ul", [...set.values()]);
  oldVnode = patch(oldVnode, vnode);
});

// 点击删除
function dele(e) {
  set.delete(+e.target.previousElementSibling.innerText);
  vnode = h("ul", [...set.values()]);
  oldVnode = patch(oldVnode, vnode);
}
