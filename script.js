  // Check the source code for the questions
  const wordList = [
    {
      word: "guitar",
      hint: "A musical instrument with strings.",
    },
    {
      word: "oxygen",
      hint: "A colorless, odorless gas essential for life.",
    },

    {
      word: "football",
      hint: "A popular sport played with a spherical ball.",
    },

    {
      word: "history",
      hint: "The study of past events and human civilization.",
    },
    {
      word: "pizza",
      hint: "A savory dish consisting of a round, flattened base with toppings.",
    },
    {
      word: "jazz",
      hint: "A genre of music characterized by improvisation and syncopation.",
    },
    {
      word: "camera",
      hint: "A device used to capture and record images or videos.",
    },
    {
      word: "diamond",
      hint: "A precious gemstone known for its brilliance and hardness.",
    },

    {
      word: "science",
      hint: "The systematic study of the structure and behavior of the physical and natural world.",
    },
    {
      word: "bicycle",
      hint: "A human-powered vehicle with two wheels.",
    },
    {
      word: "sunset",
      hint: "The daily disappearance of the sun below the horizon.",
    },
    {
      word: "coffee",
      hint: "A popular caffeinated beverage made from roasted coffee beans.",
    },
    {
      word: "dance",
      hint: "A rhythmic movement of the body often performed to music.",
    },
    {
      word: "galaxy",
      hint: "A vast system of stars, gas, and dust held together by gravity.",
    },

    {
      word: "volcano",
      hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
    },
    {
      word: "novel",
      hint: "A long work of fiction, typically with a complex plot and characters.",
    },

    {
      word: "ballet",
      hint: "A classical dance form characterized by precise and graceful movements.",
    },
    {
      word: "astronaut",
      hint: "A person trained to travel and work in space.",
    },
    {
      word: "waterfall",
      hint: "A cascade of water falling from a height.",
    },

    {
      word: "rainbow",
      hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
    },
    {
      word: "universe",
      hint: "All existing matter, space, and time as a whole.",
    },
    {
      word: "piano",
      hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
    },
    {
      word: "vacation",
      hint: "A period of time devoted to pleasure, rest, or relaxation.",
    },

    {
      word: "theater",
      hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
    },

    {
      word: "desert",
      hint: "A barren or arid land with little or no precipitation.",
    },
    {
      word: "sunflower",
      hint: "A tall plant with a large yellow flower head.",
    },
    {
      word: "fantasy",
      hint: "A genre of imaginative fiction involving magic and supernatural elements.",
    },

    {
      word: "breeze",
      hint: "A gentle wind.",
    },
    {
      word: "oasis",
      hint: "A fertile spot in a desert where water is found.",
    },

    {
      word: "safari",
      hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
    },
    {
      word: "planet",
      hint: "A celestial body that orbits a star and does not produce light of its own.",
    },
    {
      word: "river",
      hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
    },

    {
      word: "mysterious",
      hint: "Difficult or impossible to understand, explain, or identify.",
    },
    {
      word: "enigma",
      hint: "Something that is mysterious, puzzling, or difficult to understand.",
    },
    {
      word: "paradox",
      hint: "A statement or situation that contradicts itself or defies intuition.",
    },
    {
      word: "puzzle",
      hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
    },
    {
      word: "whisper",
      hint: "To speak very softly or quietly, often in a secretive manner.",
    },
    {
      word: "shadow",
      hint: "A dark area or shape produced by an object blocking the light.",
    },
    {
      word: "secret",
      hint: "Something kept hidden or unknown to others.",
    },

    {
      word: "unveil",
      hint: "To make known or reveal something previously secret or unknown.",
    },
    {
      word: "illusion",
      hint: "A false perception or belief; a deceptive appearance or impression.",
    },

    {
      word: "vibrant",
      hint: "Full of energy, brightness, and life.",
    },
  ];

  ("use strict");

  // =============== Start Gallows Dom Part ===============

  // Create div element for modal
  let modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");
  document.body.appendChild(modalDiv);

  // Create div for modal content
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  modalDiv.appendChild(contentDiv);

  // Create h4 and p element for modal text
  let gameOverH4 = document.createElement("h4");
  let modalTextP = document.createElement("p");
  let modalButton = document.createElement("button");

  modalButton.classList.add("play-again");

  gameOverH4.textContent = "Game Over!";
  modalButton.textContent = "Play Again";

  contentDiv.appendChild(gameOverH4);
  contentDiv.appendChild(modalTextP);
  contentDiv.appendChild(modalButton);

  // Create main div element
  let mainDiv = document.createElement("div");
  mainDiv.classList.add("container");
  document.body.appendChild(mainDiv);

  // Create gallows section
  let gallowsSection = document.createElement("section");
  gallowsSection.classList.add("gallows");
  mainDiv.appendChild(gallowsSection);

  // Create gallows box
  let gallowsBoxDiv = document.createElement("div");
  gallowsBoxDiv.classList.add("gallows-box");
  gallowsSection.appendChild(gallowsBoxDiv);

  // create five div element for gallows rectangles
  let rectDiv1 = document.createElement("div");
  let rectDiv2 = document.createElement("div");
  let rectDiv3 = document.createElement("div");
  let rectDiv4 = document.createElement("div");
  let rectDiv5 = document.createElement("div");

  rectDiv1.classList.add("rect-1");
  rectDiv2.classList.add("rect-2");
  rectDiv3.classList.add("rect-3");
  rectDiv4.classList.add("rect-4");
  rectDiv5.classList.add("rect-5");

  gallowsBoxDiv.appendChild(rectDiv1);
  gallowsBoxDiv.appendChild(rectDiv2);
  gallowsBoxDiv.appendChild(rectDiv3);
  gallowsBoxDiv.appendChild(rectDiv4);
  gallowsBoxDiv.appendChild(rectDiv5);

  // Create div element for person
  let personDiv = document.createElement("div");
  personDiv.classList.add("person");
  gallowsBoxDiv.appendChild(personDiv);

  // Create body parts
  let headDiv = document.createElement("div");
  let bodyDiv = document.createElement("div");
  let leftHandDiv = document.createElement("div");
  let rightHandDiv = document.createElement("div");
  let leftLegDiv = document.createElement("div");
  let rightLegDiv = document.createElement("div");

  headDiv.classList.add("head");
  bodyDiv.classList.add("body");
  leftHandDiv.classList.add("left-hand");
  rightHandDiv.classList.add("right-hand");
  leftLegDiv.classList.add("left-leg");
  rightLegDiv.classList.add("right-leg");

  headDiv.classList.add("display-none");
  bodyDiv.classList.add("display-none");
  leftHandDiv.classList.add("display-none");
  rightHandDiv.classList.add("display-none");
  leftLegDiv.classList.add("display-none");
  rightLegDiv.classList.add("display-none");

  headDiv.classList.add("body-part");
  bodyDiv.classList.add("body-part");
  leftHandDiv.classList.add("body-part");
  rightHandDiv.classList.add("body-part");
  leftLegDiv.classList.add("body-part");
  rightLegDiv.classList.add("body-part");

  personDiv.appendChild(headDiv);
  personDiv.appendChild(bodyDiv);
  personDiv.appendChild(leftHandDiv);
  personDiv.appendChild(rightHandDiv);
  personDiv.appendChild(leftLegDiv);
  personDiv.appendChild(rightLegDiv);

  // =============== End Gallows Dom Part ===============

  // =============== Start GamePlay Dom Part ===============

  // Create section element for gameplay
  let gameplaySection = document.createElement("section");
  gameplaySection.classList.add("gameplay");
  mainDiv.appendChild(gameplaySection);

  // Create gameplay-box div
  let gameplayBoxDiv = document.createElement("div");
  gameplayBoxDiv.classList.add("gameplay-box");
  gameplaySection.appendChild(gameplayBoxDiv);

  // Create ul element for answer letters
  let answerUl = document.createElement("ul");
  answerUl.classList.add("answer");
  gameplayBoxDiv.appendChild(answerUl);

  // Create li elements for answer letters
  let letter1Li = document.createElement("li");
  let letter2Li = document.createElement("li");
  let letter3Li = document.createElement("li");
  let letter4Li = document.createElement("li");
  let letter5Li = document.createElement("li");
  let letter6Li = document.createElement("li");

  // Create p element for hint
  let hintP = document.createElement("p");
  hintP.classList.add("hint");
  hintP.textContent = "Hint: ipsum dolor sit amet consectetur.";
  gameplayBoxDiv.appendChild(hintP);

  // Create p element for counter
  let guessesTxt = document.createElement("p");
  guessesTxt.classList.add("guesses-txt");
  guessesTxt.textContent = "Incorrect guesses: ";
  gameplayBoxDiv.appendChild(guessesTxt);

  // Add span elements in p element
  let wrongGuessCounterSpan = document.createElement("span");

  wrongGuessCounterSpan.classList.add("red-txt");

  wrongGuessCounterSpan.textContent = "0 / 6";

  guessesTxt.appendChild(wrongGuessCounterSpan);

  // Create div element for keyboard
  let keyboardDiv = document.createElement("div");
  keyboardDiv.classList.add("keyboard");
  gameplayBoxDiv.appendChild(keyboardDiv);

  // Add keyboard buttons
  for (let i = 97; i <= 122; i++) {
    let letterButton = document.createElement("button");
    letterButton.innerText = String.fromCharCode(i);
    letterButton.classList.add("key");
    keyboardDiv.appendChild(letterButton);

    letterButton.addEventListener("click", (e) =>
      initGame(
        e.target,
        String.fromCharCode(i),
        letterButton.classList.add("pressed-key")
      )
    );
  }
  // =============== End GamePlay Dom Part ===============

  // =============== GamePlay Part ===============

  let currentWord = 0;
  let wrongGuessCount;
  let correctLetters;
  const maxGuesses = 6;

  const keyboardButtons = document.querySelectorAll("button");

  // Add event listener for keypress events
  document.addEventListener("keypress", (e) => {
    // Check if the pressed key is a letter (a-z)
    const keyCode = e.keyCode || e.which;
    if ((keyCode >= 97 && keyCode <= 122) || (keyCode >= 65 && keyCode <= 90)) {
      const pressedLetter = String.fromCharCode(keyCode).toLowerCase();

      // Find the corresponding button and trigger the click event
      const letterButtons = document.querySelectorAll(".key");
      for (const button of letterButtons) {
        if (button.innerText.toLowerCase() === pressedLetter) {
          button.click();
          break; // Stop searching after finding the first matching button
        }
      }
    }
  });

  const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    answerUl.innerHTML = currentWord
      .split("")
      .map(() => `<li class='letter'></li>`)
      .join("");
    keyboardButtons.forEach((btn) => (btn.disabled = false));
    keyboardButtons.forEach((btn) => btn.classList.remove("pressed-key"));

    modalDiv.classList.remove("show");
    wrongGuessCounterSpan.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    headDiv.classList.add("display-none");
    bodyDiv.classList.add("display-none");
    leftHandDiv.classList.add("display-none");
    rightHandDiv.classList.add("display-none");
    leftLegDiv.classList.add("display-none");
    rightLegDiv.classList.add("display-none");
  };

  const getRandomWord = () => {
    // selecting random word and hint
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    hintP.innerText = `Hint: ${hint}`;
    resetGame();
  };

  // GameOver Function
  const gameOver = (isVictory) => {
    setTimeout(() => {
      const modalText = isVictory
        ? `You found the word:`
        : `The correct word was:`;
      gameOverH4.innerText = `${isVictory ? "Congrats!" : "Game Over!"}`;
      modalTextP.innerHTML = `${modalText} <span>${currentWord}</span>`;

      modalDiv.classList.add("show");
    }, 300);
  };

  const initGame = (button, clickedLetter) => {
    // Checking if clickedLetter is exist on the current word
    if (currentWord.includes(clickedLetter)) {
      // Showing all correct letter
      [...currentWord].forEach((letter, index) => {
        if (letter === clickedLetter) {
          correctLetters.push(letter);
          answerUl.querySelectorAll("li")[index].innerText = letter;
          answerUl.querySelectorAll("li")[index].classList.add("guessed");
        }
      });
    } else {
      wrongGuessCount++;
      if (headDiv.classList.contains("display-none")) {
        headDiv.classList.remove("display-none");
      } else if (bodyDiv.classList.contains("display-none")) {
        bodyDiv.classList.remove("display-none");
      } else if (leftHandDiv.classList.contains("display-none")) {
        leftHandDiv.classList.remove("display-none");
      } else if (rightHandDiv.classList.contains("display-none")) {
        rightHandDiv.classList.remove("display-none");
      } else if (leftLegDiv.classList.contains("display-none")) {
        leftLegDiv.classList.remove("display-none");
      } else if (rightLegDiv.classList.contains("display-none")) {
        rightLegDiv.classList.remove("display-none");
      }
    }

    button.disabled = true;
    wrongGuessCounterSpan.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Calling gameOver function
    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
  };

  getRandomWord();
  modalButton.addEventListener("click", getRandomWord);
