const BTN_EDIT = document.querySelector(".btn-warning");
const BTN_STYLE = document.querySelector(".btn-info");
const BTN_ADD = document.querySelector(".btn-danger");
const BTN_SAVE = document.querySelector(".save");
const BTN_COLORTEXT = document.querySelector(".btn-color-text");
const BTN_COLOBACKGROUND = document.querySelector(".btn-color-background");
const BTN_CREATETABLE = document.querySelector(".cerate-table");
const BTN_CREATELIST = document.querySelector(".cerate-list");
const BOX_EDIT = document.querySelector(".edit-text");
const BOX_STYLE = document.querySelector(".edit-style");
const BOX_MAINTEXT = document.querySelector(".containet-text");
const BOX_COLOR = document.querySelector(".wrapper_color");
const BOX_ALL = document.querySelector(".all-conteiner");
const BOX_LIST_TABLET = document.querySelector(".wrapper-add_table_or_list");
const BOX_TABLE = document.querySelector(".add_table");
const BOX_LIST = document.querySelector(".add_list");
const TEXT_AREA = document.querySelector(".text_area");
const FORM = document.forms[0];
const FORM_TABLE_LIST = document.forms[1];
const FORM_TABLE = document.forms[2];
const FORM_LIST = document.forms[3];

BTN_EDIT.addEventListener("click", (event) => {
  TEXT_AREA.value = BOX_MAINTEXT.innerHTML;
  BOX_EDIT.style.display = "block";
  BOX_STYLE.style.display = "none";
});

BTN_STYLE.addEventListener("click", (event) => {
  BOX_EDIT.style.display = "none";
  BOX_STYLE.style.display = "flex";
});

BTN_SAVE.addEventListener("click", (event) => {
  BOX_MAINTEXT.innerHTML = TEXT_AREA.value;
});
BTN_COLORTEXT.addEventListener("click", (event) => {
  event.preventDefault();
  BOX_COLOR.style.display = "flex";
  BTN_COLOBACKGROUND.disabled = true;
});
BTN_COLOBACKGROUND.addEventListener("click", (event) => {
  event.preventDefault();
  BOX_COLOR.style.display = "flex";
  BTN_COLORTEXT.disabled = true;
});

BOX_COLOR.addEventListener("click", (event) => {
  if (BTN_COLOBACKGROUND.disabled == true) {
    BOX_MAINTEXT.style.color = event.target.classList[1];
  }
  if (BTN_COLORTEXT.disabled == true) {
    BOX_MAINTEXT.style.backgroundColor = event.target.classList[1];
  }
  BOX_COLOR.style.display = "none";
  BTN_COLOBACKGROUND.disabled = false;
  BTN_COLORTEXT.disabled = false;
});

FORM.addEventListener("click", (event) => {
  BOX_MAINTEXT.style.fontSize = FORM.size.value;
  BOX_MAINTEXT.style.fontFamily = FORM.font.value;
  if (FORM.stylee[0].checked == true) {
    BOX_MAINTEXT.style.fontWeight = "bold";
  } else {
    BOX_MAINTEXT.style.fontWeight = "normal";
  }
  if (FORM.stylee[1].checked == true) {
    BOX_MAINTEXT.style.fontStyle = "italic";
  } else {
    BOX_MAINTEXT.style.fontStyle = "normal";
  }
});

BTN_ADD.addEventListener("click", (event) => {
  BOX_ALL.style.display = "none";
  BOX_LIST_TABLET.style.display = "block";
});

FORM_TABLE_LIST.addEventListener("click", (event) => {
  console.log(event.target.value);

  if (event.target.value == "table") {
    BOX_TABLE.style.display = "block";
    BOX_LIST.style.display = "none";
  }

  if (event.target.value == "list") {
    BOX_LIST.style.display = "block";
    BOX_TABLE.style.display = "none";
  }
});

BTN_CREATETABLE.addEventListener("click", (event) => {
  event.preventDefault();
  let newTable = document.createElement("table");

  for (let i = 0; i < Number(FORM_TABLE["table-tr"].value); ++i) {
    let newTr = document.createElement("tr");
    for (let j = 0; j < Number(FORM_TABLE["table-td"].value); ++j) {
      let newTd = document.createElement("td");
      newTd.textContent = "TD";
      newTd.style.width = FORM_TABLE["width-td"].value;
      newTd.style.height = FORM_TABLE["height-td"].value;
      newTr.append(newTd);
    }
    newTable.append(newTr);
  }

  for (let i = 0; i < newTable.querySelectorAll("td").length; ++i)
    newTable.querySelectorAll("td")[i].style.border =
      FORM_TABLE["width-border"].value +
      " " +
      FORM_TABLE["type-border"].value +
      " " +
      FORM_TABLE["color-border"].value;

  TEXT_AREA.value = BOX_MAINTEXT.innerHTML + "\n" + newTable.outerHTML;

  BOX_MAINTEXT.style.overflow = "scroll";
  BOX_ALL.style.display = "block";
  BOX_LIST_TABLET.style.display = "none";
  FORM_TABLE["width-td"].value = "";
  FORM_TABLE["height-td"].value = "";
  FORM_TABLE["table-tr"].value = "";
  FORM_TABLE["table-td"].value = "";
  FORM_TABLE["width-border"].value = "";
});

BTN_CREATELIST.addEventListener("click", (event) => {
  event.preventDefault();
  let newList = document.createElement("ul");
  let n = Number(FORM_LIST["count-li"].value);

  newList.style.listStyleType = FORM_LIST["type-li"].value;

  for (let i = 0; i < n; ++i) {
    let newLi = document.createElement("li");
    newLi.textContent = "LI";
    newList.append(newLi);
  }

  TEXT_AREA.value = BOX_MAINTEXT.innerHTML + "\n" + newList.outerHTML;

  BOX_MAINTEXT.style.overflow = "scroll";
  BOX_ALL.style.display = "block";
  BOX_LIST_TABLET.style.display = "none";
  FORM_LIST["count-li"].value = "";
});
