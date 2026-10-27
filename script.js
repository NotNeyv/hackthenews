let displayLength = 30;
let i = 0;

// fetching the data

async function getNewData() {
  const url = "https://ships.hackclub.com/api/v1/ysws_entries";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    displayNewData(result);
  } catch (error) {
    console.error(error.message);
  }
}

function loadMore() {
  displayLength = displayLength + 30;
  getNewData();
}

function displayNewData(data) {
    let len = data.length;

    for (i; i < displayLength; i++) {
        let record = data[i];
        displayDiv = document.getElementById("newestHolder");

        //name
        const devName = record.github_username;
        const description = record.description;
        const heading = document.createElement("h3");
        const itemDiv = document.createElement("div");
        heading.className = "description"
        let numb = i + 1;

        heading.innerHTML = numb.toString() + ". " + description;

        itemDiv.appendChild(heading);
        displayDiv.appendChild(itemDiv);
    }
}