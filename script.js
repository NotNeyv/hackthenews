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
        let displayDiv = document.getElementById("newestHolder");

        //data
        const description = record.description;
        const code = record.code_url;
        const hours = record.hours;
        const ysws = record.ysws;
        let name = record.github_username;

        let numb = i + 1;

        //box for the text
        const itemDiv = document.createElement("tr");
        itemDiv.className = "itemDiv";

        //the rank
        const number = document.createElement("td");
        const rank = document.createElement("span");
        rank.innerHTML = numb + ".";
        number.appendChild(rank)


        const titleLine = document.createElement("span")
        const heading = document.createElement("a");
        heading.className = "description";
        heading.innerHTML = description
        titleLine.appendChild(heading)


        //sub-text
        const subBox = document.createElement("tr")
        const space = document.createElement("td");
        space.colSpan = 2;
        const subText = document.createElement("td");
        subText.className = "subText";
        subText.innerText = "By " + name + " | " + "For " + ysws + " | " + "Took: " + hours + "hrs";
        subBox.appendChild(space);
        subBox.appendChild(subText);

        itemDiv.appendChild(number);
        itemDiv.appendChild(titleLine);
        itemDiv.appendChild(subBox);
        displayDiv.appendChild(itemDiv);
    }
}