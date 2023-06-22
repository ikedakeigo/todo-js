// import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";


  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    // const addTarget = completeButton.parentNode;
    // document.getElementById("incompleteList").removeChild(addTarget);

    // document.getElementById("completeList").appendChild(addTarget);
  });

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      // 押された削除ボタンの親たぐ(div)を未完了リストから削除
      deleteFromIncompleteList(deleteButton.parentNode);
      // const deleteTarget = deleteButton.parentNode;
      // document.getElementById("incompleteList").removeChild(deleteTarget);
    });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incompleteList").appendChild(div);


  // 未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incompleteList").removeChild(target);
  }

};

document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd());
