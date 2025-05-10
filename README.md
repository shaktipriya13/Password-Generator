# 🔐 React Password Generator

This is a simple and interactive **Password Generator** built using **React.js** and styled with **Tailwind CSS** . The app allows users to generate random passwords of desired length and character types, including numbers and special characters. The password can also be copied to clipboard with a single click.

---

## 🛠️ Features

- ✅ Choose desired **password length** (8 to 100 characters)
- 🔢 Include **numbers** in the password
- 🔣 Include **special characters**
- 📋 **Copy to clipboard** button with hover effect
- 💡 Automatically generates a new password when options change
- ⚛️ Built using **React Hooks** (`useState`, `useEffect`, `useCallback`, `useRef`)
- 🎨 Beautiful UI using **Tailwind CSS**

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/password-generator.git
cd password-generator
npm install
```

### Running the App

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000/) in your browser.

---

## 🧠 How It Works

- `useState` is used for managing password length, toggle options, and the generated password.
- `useCallback` optimizes `passwordGenerator` and `copyToClipboard` functions.
- `useEffect` triggers password generation whenever options change.
- `useRef` is used to reference the password input for clipboard functionality.

---

## 📂 Folder Structure

```
src/
├── App.js        # Main React component
├── index.js      # ReactDOM rendering
└── index.css     # Tailwind CSS styles
```

---

## 💡 Future Improvements

- Add option to **exclude similar characters** (like `0` and `O`)
- Add **password strength indicator**
- Add **dark/light theme toggle**

---
