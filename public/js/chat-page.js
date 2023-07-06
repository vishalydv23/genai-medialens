function goToHome() {
  window.location.href = "index.html";
}

function goToTopic() {
  window.location.href = "topic.html";
}

// // Function to send the user's question to the GCP API and get the response
// async function sendQuestionToGCPAPI(question) {
//   const apiUrl = "YOUR_GCP_API_ENDPOINT"; // Replace with your GCP API endpoint URL

//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ question }),
//     });

//     const data = await response.json();
//     const answer = data.answer; // Assuming the API response contains an 'answer' field

//     return answer;
//   } catch (error) {
//     console.error("Error:", error);
//     return "Oops! An error occurred while retrieving the answer.";
//   }
// }

// Function to add a new message to the chat container
function addMessageToChatContainer(message, isUserMessage) {
  const messageContainer = document.getElementById("messageContainer");
  const newMessageElement = document.createElement("div");
  newMessageElement.classList.add("message");

  if (isUserMessage) {
    newMessageElement.classList.add("user-message");
  } else {
    newMessageElement.classList.add("bot-message");
  }

  newMessageElement.innerText = message;
  messageContainer.appendChild(newMessageElement);

  // Scroll to the bottom of the message container
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Function to handle the user's input question
// async function handleQuestionSubmission() {
//   const inputElement = document.getElementById("userInput");
//   const question = inputElement.value.trim();

//   if (question !== "") {
//     addMessageToChatContainer(question, true);
//     inputElement.value = "";

//     const answer = await sendQuestionToGCPAPI(question);
//     addMessageToChatContainer(answer, false);
//   }
// }

// Event listener for the form submission
// document
//   .getElementById("userInputForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     handleQuestionSubmission();
//   });
