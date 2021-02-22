import Head from "next/head";
import { setuid } from "process";
import { func } from "prop-types";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  let storage = [];
  if (process.browser && localStorage.getItem("lists")) {
    storage = JSON.parse(localStorage.getItem("lists"));
  }

  const [lists, setLists] = useState(storage);

  const [showDialog, setShowDialog] = useState(false);
  function showDialogFn() {
    setShowDialog(true);
  }

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function remove(e, index) {
    e.preventDefault();
    let newlist = [...lists];
    newlist.splice(index, 1);
    localStorage.setItem("lists", JSON.stringify(newlist));
    setLists(newlist);
    return false;
  }
  function clear() {
    setShowDialog(false);
    setName("");
    setUrl("");
  }
  function save() {
    if (!name || !url) {
      alert("请输入名称和网址");
      return;
    }
    let newurl;
    if (url.indexOf("http") >= 0) {
      let domain = url.split("/");
      newurl = domain[2] ? domain[2] : null;
    }
    let newLists = [
      ...lists,
      { name, url, img: newurl ? "https://" + newurl + "/favicon.ico" : null },
    ];
    setLists(newLists);
    localStorage.setItem("lists", JSON.stringify(newLists));
    clear();
  }
  return (
    <div className={styles.container}>
      {showDialog ? (
        <div className={styles.dialog}>
          <h3>添加快捷方式</h3>

          <div>名称</div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <div>网址</div>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
          <div className={styles.btns}>
            <span className={styles.btn} onClick={clear}>
              删除
            </span>
            <div>
              <span className={styles.btn} onClick={clear}>
                取消
              </span>
              <span className={styles.btn} onClick={save}>
                完成
              </span>
            </div>
          </div>
        </div>
      ) : null}

      <Head>
        <title>Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.icons} src="/google_logo.svg" alt="" />

        <div className={styles.search}>
          <img className={styles.icons} src="/search.png" alt="" />
          <input
            className={styles.input}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <img className={styles.icons} src="/audio.png" alt="" />
        </div>

        <div className={styles.ul}>
          {lists.map((item, index) => {
            return (
              <a href={item.url} target="_blank" key={index} className={styles.li}>
                {item.img ? (
                  <img className={styles.pic} src={item.img} alt="" />
                ) : (
                  <img className={styles.pic} src="/failedLogo.png" alt="" />
                )}
                {item.name}
                <img
                  className={styles.remove}
                  src="/removeLogo.png"
                  alt=""
                  onClick={(e) => remove(e, index)}
                />
              </a>
            );
          })}

          <li className={styles.li} onClick={() => setShowDialog(true)}>
            <img className={styles.pic} src="/addLogo.png" alt="" />
            添加快捷方式
          </li>
        </div>
      </main>
    </div>
  );
}
