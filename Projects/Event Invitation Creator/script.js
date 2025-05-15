// document.addEventListener("DOMContentLoaded", () => {

// const errorText = document.getElementById("error-text");
// const errorMessage = document.getElementById("error-message");
// const inviteCard = document.getElementById("invite-card");
// const form = document.getElementById("event-form");
// const closeError = document.getElementById("close-error");

// const validateForm = () => {
//     const eventName = document.getElementById("event-name").value.trim();
//     const eventDate = document.getElementById("event-date").value;
//     const startTime = document.getElementById("start-time").value;
//     const endTime = document.getElementById("end-time").value;
//     const description = document.getElementById("event-description").value.trim();
//     const location = document.getElementById("location").value.trim();

//     return eventName && eventDate && startTime && endTime && description && location
//      ? {eventName, eventDate, startTime, endTime, description, location} 
//      : null; 
// }

// const showError = (message) => {
//     errorText.textContent = message;
//     errorMessage.classList.remove("hidden");
// }

// const hideError = () => {
//     errorMessage.classList.add("hidden");
// }

// const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     console.log(date);
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
//     return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
// };

// const updateInvitecard = ({eventName, eventDate, startTime, endTime, description, location}) => {
//     const inviteTitle = document.getElementById("invite-title").textContent = eventName;
//     const inviteDate = document.getElementById("invite-date").textContent = formatDate(eventDate);
//     const inviteTime = document.getElementById("invite-time").textContent = `${startTime} - ${endTime}`;
//     const inviteLocation = document.getElementById("invite-location").textContent = location;
//     const inviteDescription = document.getElementById("invite-description").textContent = description;

//     inviteCard.classList.remove("hidden");
// }

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const eventData = validateForm();
//     if(!eventData) {
//         showError("Please fill in all fields.");
//         return ;
//     } 

//     hideError();
//     updateInvitecard(eventData);
// })


// closeError.addEventListener("click", hideError);

// })


document.addEventListener("DOMContentLoaded", () => {
    const inviteCard = document.getElementById("invite-card");
    const form = document.getElementById("event-form");
  
    const validateForm = () => {
      const eventName = document.getElementById("event-name").value.trim();
      const eventDate = document.getElementById("event-date").value;
      const startTime = document.getElementById("start-time").value;
      const endTime = document.getElementById("end-time").value;
      const description = document.getElementById("event-description").value.trim();
      const location = document.getElementById("location").value.trim();
  
      return eventName && eventDate && startTime && endTime && description && location
        ? { eventName, eventDate, startTime, endTime, description, location }
        : null;
    };
  
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
  
      return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    };
  
    const updateInvitecard = ({ eventName, eventDate, startTime, endTime, description, location }) => {
      document.getElementById("invite-title").textContent = eventName;
      document.getElementById("invite-date").textContent = formatDate(eventDate);
      document.getElementById("invite-time").textContent = `${startTime} - ${endTime}`;
      document.getElementById("invite-location").textContent = location;
      document.getElementById("invite-description").textContent = description;
  
      inviteCard.classList.remove("hidden");
    };
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const eventData = validateForm();
      if (!eventData) return; // Just skip if any field is missing
  
      updateInvitecard(eventData);
    });
  });
  