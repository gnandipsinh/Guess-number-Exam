# 🎯 Guess My Number Game

A simple and interactive **Number Guessing Game** built using **HTML, CSS, JavaScript, and Bootstrap**.

The player has to guess a secret number between **1 and 20**. Every wrong guess decreases the score, while the highest score is saved in the browser using `localStorage`.

## 🚀 Live Features

* 🎯 Random secret number between 1 and 20
* 🔢 Number input validation
* ⬆️ "Too High" message
* ⬇️ "Too Low" message
* ✅ Correct answer detection
* ❤️ Score system
* 🏆 Highscore system
* 💾 Highscore stored using `localStorage`
* 🔄 "Again!" button to restart the game
* 🚫 Prevents duplicate guesses
* ⚠️ Handles invalid input
* 📱 Responsive layout using Bootstrap

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* Browser LocalStorage

## 📁 Project Structure

```text
Guess-Number/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🎮 How to Play

1. Open `index.html` in your browser.
2. Enter a number between **1 and 20**.
3. Click the **Check!** button.
4. The game will tell you:

   * `Too High!`
   * `Too Low!`
   * `Correct Number!`
5. Each incorrect guess decreases your score.
6. Try to find the secret number with the highest possible score.
7. Click **Again!** to start a new game.

## 🧠 Game Logic

The secret number is generated randomly using:

```javascript
let secretNumber = Math.trunc(Math.random() * 20) + 1;
```

The initial score is:

```javascript
let score = 20;
```

When the user enters an incorrect number, the score decreases by 1.

When the correct number is guessed, the game ends and the score is compared with the saved highscore.

## 🏆 Highscore

The game uses browser `localStorage` to save the highest score.

```javascript
localStorage.setItem("highscore", highscore);
```

This means the highscore remains available even after refreshing the browser.

## 🔐 Input Validation

The game checks:

* Empty input
* Invalid number
* Number below 1
* Number above 20
* Duplicate guesses

Example:

```javascript
if (guess < 1 || guess > 20) {
    alert("Choose a number between 1 and 20");
    return;
}
```

## ▶️ Run the Project

No installation is required.

Simply open:

```text
index.html
```

in any modern web browser.

## 📸 Project Preview

The game contains:

* Green game area
* Guess input
* Check button
* Random number display
* Score
* Highscore
* Restart button

## 👨‍💻 Author

**GOHIL GNANDIPSINH**

### Technologies

`HTML` • `CSS` • `JavaScript` • `Bootstrap`

---

⭐ If you like this project, feel free to give it a star on GitHub!
