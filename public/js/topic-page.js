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
    "Topic 2":
      "The two podcasts are about the same topic: the 2023 Turkish general election. Both podcasts discuss the background of the election, the candidates, and the results. The main difference between the two podcasts is the perspective from which they are written. The UK podcast is written from a more neutral perspective, while the US podcast is written from a more critical perspective.",
    "Topic 3":
      "The UK podcast is more left-leaning than the US podcast. The UK podcast is more critical of Erdogan and his policies, while the US podcast is more neutral. The UK podcast also mentions Erdogan's crackdown on dissent and his restrictions on freedom of speech and the press, while the US podcast does not mention these issues.",
    "Topic 4":
      "Both podcasts report that Erdogan has been in power for 20 years and is one of the longest-serving leaders in Turkish history. He has been re-elected twice, most recently in 2018. However, his popularity has been declining in recent years due to high inflation and an economic crisis. The UK podcast says that Erdogan has been using his time in power to consolidate his power. He has cracked down on dissent, restricted freedom of speech and the press, and increased his control over the media. He has also been accused of corruption. The USA podcast says that Erdogan came to power in 2003 and quickly became a popular figure. He oversaw a period of rapid economic growth and development, and he was seen as a champion of the poor and working class. However, his popularity began to decline in 2016 after a failed coup attempt. He used the coup attempt as an excuse to consolidate his power and crack down on dissent. He also pursued an economic policy that led to high inflation and a currency crisis.",
    "Topic 5":
      "The earthquake that occurred in Turkey on March 31, 2023, was not mentioned in either of the podcasts. This is likely because the earthquake was not a major event and did not have a significant impact on the election.",
    "Topic 6":
      "Erdogan used his power to boost his chances of winning. He raised the minimum wage, gave civil servants pay raises, and changed the regulations on pensions. He also appeared on the campaign trail more often than Kilicdaroglu. Kilicdaroglu ran a strong campaign. He appeared on the campaign trail less often than Erdogan, but he was able to connect with voters on a personal level. He also focused on the economy, arguing that Erdogan's policies had led to high inflation and a currency crisis.",
    "Topic 7": "The economy was discussed in both podcasts. In the UK podcast, it was mentioned that Erdogan has been successful in improving the economy. In the USA podcast, it was mentioned that Erdogan's economic policies have led to high inflation and a currency crisis.",
  };

  // const buttons = document.getElementsByClassName("topic-button");
  // for (let i = 0; i < buttons.length; i++) {
  //   if (buttons[i].innerHTML === topic) {
  //     buttons[i].style.backgroundColor = "#000000"; // Change to your desired color
  //     buttons[i].style.color = "#ffffff";
  //   } else {
  //     buttons[i].style.backgroundColor = "#ccc"; // Change to your default button color
  //     buttons[i].style.color = "#000000";
  //   }
  // }

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
