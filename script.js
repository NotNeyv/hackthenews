

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

function displayNewData(data) {
    let len = data.length;
    for (let i = 0; i < len; i++) {
        let record = data[i];
        displayDiv = document.getElementById("newestHolder");

        //name
        const devName = record.github_username;
        const heading = document.createElement("h3");
        heading.innerHTML = i.toString() + ". " + devName;
        displayDiv.appendChild(heading);
    }

}