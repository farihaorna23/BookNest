//DOM Elemnet
let addBookBtn = document.querySelector('.add-book-btn')
let bookName = document.getElementById("book-name")
let authorName = document.getElementById("author")
let genreName = document.getElementById("genre")

//This function will get the genre the user chose from the option
const getGenreHandler = (e) => {

}

//This function would store all the information from the form and store it in local storage
const addBookBtnHandler = () => {
  let bookInfo = {}
  if (bookName.value){

  }else{
    bookName.style.border = "0.2em solid red"
  }
}

//adding event listners
addBookBtn.addEventListener("click",addBookBtnHandler)
genreName.addEventListener("change",getGenreHandler)