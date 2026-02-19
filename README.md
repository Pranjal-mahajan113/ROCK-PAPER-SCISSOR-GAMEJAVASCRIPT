# ✊ Rock Paper Scissors Game

A fully responsive Rock Paper Scissors game built using **HTML, CSS, and JavaScript**.

This project simulates the classic game where the user competes against the computer.  
It includes dynamic UI updates, score tracking, animated winner effects, and persistent data storage using LocalStorage.

---

## 🚀 Live Demo

🔗 https://rock-paper-scissor-gamejavascript.vercel.app

---

## 🎮 Features

- ✅ Interactive Rock, Paper, Scissors gameplay  
- ✅ User vs Computer logic  
- ✅ Random computer choice generation  
- ✅ Dynamic result display screen  
- ✅ Winner highlight animation with rings effect  
- ✅ Persistent score using LocalStorage  
- ✅ Rules popup modal  
- ✅ Play Again functionality  
- ✅ Responsive design (Mobile + Desktop)  

---

## 🛠️ Tech Stack

- **HTML5** – Structure  
- **CSS3** – Styling & Layout (Flexbox, Positioning)  
- **JavaScript (Vanilla JS)** – Game Logic & DOM Manipulation  
- **LocalStorage API** – Score persistence  

---

## 🧠 Game Logic

- Rock beats Scissors  
- Scissors beats Paper  
- Paper beats Rock  
- Same choice results in a Draw  

### 🎲 Computer Choice Generation

```javascript
Math.floor(Math.random() * 3)

##📂 Project Structure
STONEPAPERSCISSOR/
│
├── index.html
├── css/
│   └── style.css
├── Js/
│   └── app.js
└── assets/
    ├── rock.png
    ├── paper.png
    ├── scissor.png
    ├── X.png
    ├── Bigstar.png
    ├── Smallstar.png
    └── win.png
