This is a Library Management website.In these website user can borrow and return books across different categories. Users can also add or update books.
Here is 4 types of pages.That is Home, Add-Books,All-Books,Borrowed-Books.Also here is the option of authentication.And also here is CRUD - Create, Read, Update, Delete operation.After update,delete,and read and creat show toast or sweet alert.

Home:

.Here is a banner.And most important category is here.Here is 4 types of book category.

.When user click any specific category then go to the another dynamic page where all data is stay categorywise.Every data have to its own information.And a relevent details button.If user want to know details about any data they can click the details buttont then go to another dynamic page where relevent data will be stay.

.And their also 2 button for user.If user want to borrow these books/data they can.

.Clicking the borrow button, a modal will pop up. The modal will have a form requiring a return date and a Submit button. Email and Name fields will be filled by the currently logged-in user’s email and displayName.

.By clicking the Submit button, the quantity of that specific book will be reduced by 1. Also, the book will be added to the Borrowed Books.

.If the quantity reduces to 0, disable the Borrow button. The quantity can't be negative.

.And also two extra sections to the home page in addition to the sections mentioned above.

And there also a read button if user want to know more about data they can go another dynamic page by clicking read button.

.Add-Books:

.Add Book page where there will be a form for the user to add a book.They can make their best choice.

The form will have:

1. Image
2. Name
3. Quantity of the book
4. Author Name
5. Category (for example - Novel, Thriller, History, Drama, Sci-Fi, etc.)
6. Short description
7. Rating [must make it dynamic]
8. Add button

.And then click the add product button.Product will be added in the related specific categories.

.All-Books:

.In the All Books route, all the books will be shown with the required information.

1. Image
2. Name
3. Author Name
4. Category
5. Rating [use React Rating package or any relevant package]
6. Update button

.There will also be a Filter button. By clicking this button, only available books (Quantity > 0) will be shown.Each book will have an Update Button. Clicking on the Update button will redirect the user
to a form page where the form will have the following fields:

1. Image
2. Name
3. Author Name
4. Category (must use dropdown menu)
5. Rating
6. Submit button

.Borrowed-Books

.User's borrowed books will be deposited here.
.On the Borrowed Books page a user will only see the books that he/she has borrowed(filter
borrowed books based on the email of the logged-in user), each book card will have -

1. Image
2. Name
3. Category
4. Borrowed Date
5. Return Date
6. Return Button

Clicking the "Return button" will increase that specific book quantity by 1, and remove the book card from the "Borrowed Books" page.
