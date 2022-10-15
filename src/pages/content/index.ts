import Logo from "@assets/img/logo.svg";

const dataLongLiveHmEnabled = "data-long-live-hm-enabled";

function main() {
  const body = document.getElementsByTagName("body")[0];

  if (body.getAttribute(dataLongLiveHmEnabled) === "true") {
    return;
  }

  body.setAttribute(dataLongLiveHmEnabled, "true");

  body.innerHTML += `
  <div style="position:absolute">
    <h1>Long Live HM</h1>
    <img src="${Logo}" />
  </div>
  `;
}

main();
