const dataLongLiveHmEnabled = "data-long-live-hm-enabled";

const outerStyles = `position: fixed;
margin: 0;
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
z-index: 1112;
background-color: rgb(196 196 196 / 0.8);
backdrop-filter: blur(4px);
`;

const innerStyles = `position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
`;

const buttonStyles = `cursor: pointer;
border-radius: 0.75rem;
background-color: yellow;
padding: 0;
`;

const textStyles = `padding: 0.5rem 1rem;
margin: 0;
font-size: 1.125rem;
line-height: 1.75rem;
font-weight: 700;
color: black;
`;

function main() {
  const target = document.getElementsByTagName("html")[0];

  if (target.getAttribute(dataLongLiveHmEnabled) === "true") {
    return;
  }

  target.setAttribute(dataLongLiveHmEnabled, "true");

  target.innerHTML += `
  <div class="long-live-hm-popup" style="${outerStyles}">
    <div style="${innerStyles}">
      <img src="https://www4.fisheries.go.th/local/pic_activities/202107091603511_pic.png" />
      <button
        class="long-live-hm-close-button"
        style="${buttonStyles}"
      >
        <p style="${textStyles}">ปิดหน้าต่างนี้</p>
      </button>
    </div>
  </div>
  `;

  document
    .querySelector(".long-live-hm-close-button")
    ?.addEventListener("click", () => {
      document.querySelector(".long-live-hm-popup")?.remove();
    });
}

main();
