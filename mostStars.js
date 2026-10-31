async function getNewData() {
  const url = "https://ships.hackclub.com/api/v1/stats";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    displayStarsData(result);
  } catch (error) {
    console.error(error.message);
  }
}

function displayStarsData(data) {
    for (let i = 0; i < 10; i++) {

        let record = data.top_starred[i];
        console.log(record)
        let displayDiv = document.getElementById("newestHolder");
        //data
        const name = record.name;
        const ysws = record.ysws;
        const code = record.code_url;
        const stars = record.stars;
        
        let numb = i + 1

        const itemDiv = document.createElement("tr");
        itemDiv.className = "itemDiv";

        const number = document.createElement("td");
        const rank = document.createElement("span");
        number.align = "right"
        number.vAlign = "top"
        rank.innerHTML = numb + ".";
        number.style.width = "20px";
        number.appendChild(rank)


        const titleLine = document.createElement("span")
        const heading = document.createElement("a");
        heading.className = "description";
        heading.innerHTML = name;
        heading.href = code;
        titleLine.appendChild(heading);


        //sub-text
        const subBox = document.createElement("tr")
        const space = document.createElement("td");
        space.colSpan = 2;
        subBox.appendChild(space);

        const subText = document.createElement("td");
        subText.className = "subText";
        subText.innerText = "Stars: " + stars.toString() + " | " + "For " + ysws;
        subBox.appendChild(subText);

        const spacing = document.createElement("tr");
        spacing.style.height = "10px"

        
        itemDiv.appendChild(number);
        itemDiv.appendChild(titleLine);
        itemDiv.appendChild(subBox);
        itemDiv.appendChild(spacing);
        displayDiv.appendChild(itemDiv);
    }
}


//Z code - thats it lol
getNewData()