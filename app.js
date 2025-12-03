// 首页只是简单弹窗提示，真正跳转等部署完再改成 window.location = '你的登录域名'

document.addEventListener("DOMContentLoaded", () => {
  const btnCreate = document.getElementById("btn-home-create");
  const btnMySpaces = document.getElementById("btn-home-myspaces");
  const btnLogin = document.getElementById("btn-home-login");
  const btnSignup = document.getElementById("btn-home-signup");

  function tip(msg) {
    alert(msg + "\n\n部署完后可以在 app.js 里改成真正跳转。");
  }

  btnCreate?.addEventListener("click", () => {
    tip("这里应该跳转到：登录 / 创建空间 的站点");
  });

  btnMySpaces?.addEventListener("click", () => {
    tip("这里应该跳转到：我的空间 站点");
  });

  btnLogin?.addEventListener("click", () => {
    tip("这里应该跳转到：登录页 站点");
  });

  btnSignup?.addEventListener("click", () => {
    tip("这里应该跳转到：注册 / 登录 站点");
  });
});
