# Star Wars Micro Frontend Application

## 📌 About
This is my first pet project to explore Micro Frontend architecture. It serves as an educational experiment and is not intended for production use.

## 🚀 Technologies Used
- Vue.js
- Vite
- vite-plugin-federation
- GraphQL
- skeleton-elements/vue

## 🛠 Installation & Usage
```sh
# Install dependencies
npm install

# Build everything
npm run build

# Serve everything
npm run serve
```

## 🏗 MFE Architecture Implementation
| Feature           | Description |
|------------------|-------------|
| **Routing**      | Each micro frontend application defines its own route configuration. The host application retrieves these route configurations, merges them into a single unified configuration, and provides access through `inject`. |
| **Data Fetching** | Each micro frontend configures its own GraphQL queries. The Apollo client is provided as a single instance for all micro frontend applications via `inject`. |

## ⚠️ Disclaimer
This project is created solely for educational purposes. The code is provided "as is" without any guarantees or warranties. Use it at your own risk. The author is not responsible for any potential issues, bugs, or damages caused by the use of this project.
