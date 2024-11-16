//DOM Elemnet
let addBookBtn = document.querySelector('.add-book-btn')
let bookName = document.getElementById("book-name")
let authorName = document.getElementById("author")
let genreName = document.getElementById("genre")
let  addedBooksArray = []

//variable
let userBookGenre = "Fantasy"

//This function will get the genre the user chose from the option
const getGenreHandler = (e) => {
  userBookGenre = e.target.value
}

//This function would store all the information from the form and store it in local storage
const addBookBtnHandler = () => {
  let bookInfo = {}
  if (bookName.value){
    bookInfo["book"] = bookName.value

  }else{
    bookName.style.border = "0.2em solid red"
  }

  if(authorName.value){
    bookInfo["author"] = authorName.value
  }else{
    authorName.style.border = "0.2em solid red"
  }

  bookInfo["genre"] = userBookGenre;

  //add new book to local storage
  if(bookName.value && authorName.value){
    addedBooksArray.push(bookInfo)
    localStorage.setItem("addBooks",JSON.stringify(addedBooksArray))
  }

  //clearing out the input fields back to default
  bookName.value = ""
  authorName.value = ""
  
}

//adding event listners
addBookBtn.addEventListener("click",addBookBtnHandler)
genreName.addEventListener("change",getGenreHandler)