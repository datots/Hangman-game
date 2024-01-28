const gallows = document.createElement("div");

document.body.appendChild(gallows);

gallows.style.width = "353px";
gallows.style.height = "581px";
gallows.style.marginLeft = "150px";
gallows.style.marginTop = "70px";
const newDiv1 = document.createElement("div");

newDiv1.style.width = "42px";
newDiv1.style.height = "353px";
newDiv1.style.transform = "rotate(90deg)";
newDiv1.style.flexShrink = "0";
newDiv1.style.borderradius = "5px";
newDiv1.style.border = "3px solid #FFFEFE";
newDiv1.style.background = "#000";
newDiv1.style.position = "absolute";
newDiv1.style.zIndex = "10";
newDiv1.style.marginLeft = "100px";
newDiv1.style.marginTop = "-120px";

gallows.appendChild(newDiv1);

const newDiv = document.createElement("div");

gallows.appendChild(newDiv);

newDiv.style.width = "42px";
newDiv.style.height = "581px";
newDiv.style.flexShrink = "0";
newDiv.style.borderradius = "5px";
newDiv.style.border = "3px solid #FFFEFE";
newDiv.style.background = "#000";
newDiv.style.position = "absolute";
newDiv.style.zIndex = "10";

const newDiv2 = document.createElement("div");

gallows.appendChild(newDiv2);

newDiv2.style.width = "42px";
newDiv2.style.height = "202.598px";
newDiv2.style.transform = "rotate(45deg)";
newDiv2.style.flexShrink = "0";
newDiv2.style.border = "3px solid #FFFEFE";
newDiv2.style.background = "#000";
newDiv2.style.zIndex = "2";
newDiv2.style.marginLeft = "80px";
newDiv2.style.position = "absolute";
newDiv2.style.marginTop = "30px";

gallows.appendChild(newDiv2);

const newDiv3 = document.createElement("div");

newDiv3.style.width = "10px";
newDiv3.style.height = "74px";
newDiv3.style.flexShrink = "0";
newDiv3.style.background = "#000";
newDiv3.style.position = "absolute";
newDiv3.style.marginTop = "80px    ";
newDiv3.style.marginLeft = "250px";
gallows.appendChild(newDiv3);

const newDiv4 = document.createElement("div");

newDiv4.style.width = "380px";
newDiv4.style.height = "42px";
newDiv4.style.borderradius = "5px";
newDiv4.style.border = "3px solid #FFFEFE";
newDiv4.style.background = "#000";
newDiv4.style.position = "absolute";
newDiv4.style.transform = "rotate:(180deg)";
newDiv4.style.marginTop = "540px";
gallows.appendChild(newDiv4);

// Function to create and initialize the virtual keyboard
function initializeKeyboard() {
  const body = document.body;

  // Create the keyboard container div
  const keyboardContainer = document.createElement("div");
  keyboardContainer.id = "keyboard";
  body.appendChild(keyboardContainer);

  // Create the style element
  const keyboardStyles = document.createElement("style");
  keyboardStyles.id = "keyboardStyles";
  body.appendChild(keyboardStyles);

  // Define the keyboard layout
  const keyboardLayout = ["ABCDEFGHIJ", "KLMNOPQRST", "UVWXYZ"];

  // Create and append keys to the keyboard
  keyboardLayout.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.classList.add("keyboard-row");

    row.split("").forEach((key) => {
      const keyElement = document.createElement("div");
      keyElement.classList.add("keyboard-key");
      keyElement.textContent = key;

      keyElement.addEventListener("click", () => handleKeyClick(key));

      rowElement.appendChild(keyElement);
    });

    keyboardContainer.appendChild(rowElement);
  });

  // Apply styles to the keyboard
  const styles = `
      #keyboard {
        display: grid;
        gap: 5px;
        
      }

      .keyboard-row {
        display: flex;
        gap: 5px;
        
      }

      .keyboard-key {
        padding: 20px;
        border: 1px solid #ccc;
        cursor: pointer;
        user-select: none;
        text-align: center;
        background-color:#5E63BA;

      }
    `;

  keyboardStyles.textContent = styles;
}

// Function to handle key clicks
function handleKeyClick(key) {
  // You can perform any action based on the clicked key
  if (key === "backspace") {
    // Implement backspace functionality
    console.log("Backspace clicked");
  } else {
    // Implement key press functionality
    console.log(`Key ${key} clicked`);
  }
}

// Initialize the virtual keyboard
initializeKeyboard();
