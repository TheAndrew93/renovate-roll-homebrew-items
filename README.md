This project was created as part of a personal initiative to experiment with interactive web applications and AI for a Homebrew Tabletop Roleplaying Game I created. Development was assisted by ChatGPT, providing support in coding, logic structuring, and interface design.

# 💼 Item Card Generator

Generate stylish, printable 3.5" x 2" tabletop item cards from a CSV file — great for equipment, loot, consumables, or custom magic items.

---

## 🚀 What It Does

- Upload a CSV file with item data.
- Instantly generate elegant, print-ready item cards.
- Layout optimized for physical printouts and real-life gameplay use.

---

## 💻 How to Use

1. Download or clone this repo.
2. Open `item-cards.html` in your browser.
3. Upload your `.csv` file using the file input.
4. Click “Print Cards” to create a print view of your item cards.

---

## 📁 Files in This Repo

| File | Description |
|------|-------------|
| `item-cards.html` | Main HTML page for interacting with the generator |
| `item-card-styles.css` | Card styles with fantasy-inspired layout and print tweaks |
| `item-card-generator.js` | JS script to load CSV and render item cards |
| `item-import.csv` | Sample CSV to test card layout and structure |

---

## 🧾 CSV Format

The CSV file should follow this structure, with **each column in this exact order**:

Item Name,Type,Rarity,Properties,Description

Example row:

Slickstone Ring,Accessory,Rare,"+2 DEX, slippery","A faintly shimmering ring that improves balance and grants resistance to being grappled."

---

## 🎨 Design Notes

- Two-card-per-row layout for efficient printing
- Textured parchment background
- Flexbox layout for responsive alignment
- Soft hover and drop shadow effect (ignored in print)

---

## 🛠 Built With

- HTML + CSS (with variables & Flexbox)
- JavaScript (Vanilla, modern syntax)

---

## 📜 License

Permission is granted to use, modify, and share this code for any purpose.  
This software is provided "as is", without warranty of any kind. No support is offered.
