window.addEventListener("load", () => {

  // 対応ブラウザのチェック
  if ("localStorage" in window && window.localStorage !== null) {
    const emailSessionVal = localStorage.getItem("emailVal");
    const passSessionVal = localStorage.getItem("passVal");
    if (emailSessionVal && passSessionVal) {
      document.getElementById("emailForm").value = emailSessionVal;
      document.getElementById("passForm").value = passSessionVal;
    }
  }
});

document.getElementById("form-button").addEventListener("click", function () {
  const $email = document.getElementById("emailForm");
  const $pass = document.getElementById("passForm");
  if ($email.value !== "" && $pass.value !== "") {
    localStorage.setItem("emailVal", $email.value);
    localStorage.setItem("passVal", $pass.value);
    alert("ログインしました。");
    location.href="./anotherPage.html";
  } else {
    localStorage.removeItem("emailVal");
    localStorage.removeItem("passVal");
    localStorage.clear();
    alert("ログイン出来ませんでした。\nメールとパスワードはどちらも入力が必要です。");
  }

  
});
