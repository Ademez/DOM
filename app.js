    document.addEventListener("DOMContentLoaded", () => {
    const userContainer = document.getElementById("userContainer");
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) =>response.json())
    .then((data) => {
        data.forEach((user)=>{
            const card = createCard(user)
            userContainer.appendChild(card)
//  function to create card for each user
            function createCard(user) {
                const card = document.createElement("div")
                card.classList.add("card")
    
// id of the user
           const user_iden =document.createElement("p")
           user_iden.textContent = "Id:" + user.id            
           card.appendChild(user_iden) 
// title of the user
            const user_title = document.createElement("p")
            user_title.textContent = "Title: " + user.title
            card.appendChild(user_title)
// body of the user
            const user_body = document.createElement("p")
            user_body.textContent = "Body: " + user.body
            card.appendChild(user_body)
// user id of the user
            const user_id = document.createElement("p")
            user_id.textContent = "User Id: " + user.id
            card.appendChild(user_id)

            return card
        }
    })
})
})