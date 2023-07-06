function goToHome() {
  window.location.href = "index.html";
}

function goToChat() {
  window.location.href = "chat.html";
}

function showNewsSummary(topic) {
  const newsSummaries = {
    "Topic 1":
      "The USA podcast is more focused on the economic crisis in Turkey and how it has affected the people. The UK podcast is more focused on Erdogan's personality and how he has been able to consolidate power.",
    "Topic 2": "News summary for Topic 2 goes here...",
    "Topic 3":
      "The UK podcast is more left-leaning, while the USA podcast is more right-leaning.",
    "Topic 4": "News summary for Longer Topic 4 goes here...",
    "Topic 5": "News summary for Very Long Topic 5 goes here...",
    "Topic 6": "News summary for Very Long Topic 6 goes here...",
    "Topic 7": "News summary for Very Long Topic 7 goes here...",
  };

  const buttons = document.getElementsByClassName("topic-button");
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === topic) {
      buttons[i].style.backgroundColor = "#000000"; // Change to your desired color
      buttons[i].style.color = "#ffffff";
    } else {
      buttons[i].style.backgroundColor = "#ccc"; // Change to your default button color
      buttons[i].style.color = "#000000";
    }
  }

  const newsSummaryElement = document.getElementById("newsSummary");
  newsSummaryElement.innerHTML =
    newsSummaries[topic] || "No news summary available for this topic.";
  const placeholderTextElement = document.getElementById("placeholderText");

  if (newsSummaries.hasOwnProperty(topic)) {
    placeholderTextElement.style.display = "none";
  } else {
    placeholderTextElement.style.display = "block";
  }
}
