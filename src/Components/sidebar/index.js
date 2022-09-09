Sidebar();
function Sidebar() {
  let sidebar =
    document.querySelector("#navbar4");
  let btncollapse =
    document.querySelector(
      "#btn-collapse"
    );

  btncollapse.addEventListener(
    "click",
    () => {
      sidebar.classList.toggle(
        "collapse"
      );
    }
  );
}

export default Sidebar;
