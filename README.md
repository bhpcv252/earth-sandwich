## 🌍 Earth Sandwich - Find the Antipode of Any Location

A fun and interactive web app that lets users click on a map to find the exact opposite location (antipode) on Earth.

---

### 🚀 Features

- **Interactive Map**: Click anywhere on the map to select a location.
- **Antipode Calculation**: Displays the exact opposite location (antipode) on the map.
- **Synchronized Panes**: Two maps are displayed side-by-side: one for the selected location and one for the antipode.
- **Zoom & Centering**: Maps automatically center on the clicked location with zoom level control.

---

### 🛠 Technologies Used

- **React** (with TypeScript)
- **Leaflet.js** (for maps)
- **Vite** (for fast builds and development)
- **CSS Flexbox** (for layout)

---

### ⚙️ Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bhpcv252/earth-sandwich.git
   cd earth-sandwich
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser.

---

### 🧩 How to Use

- **Left Map**: Click on any location to select it.
- **Right Map**: The opposite of the selected location will appear.
- Use the **zoom** feature to explore different areas of the map.

---

### 🌟 Customization

- If you'd like to change the **zoom level** or adjust other map settings, you can modify the `zoom` prop in `App.tsx`.
- You can also update the **map tiles** (e.g., using Mapbox or Google Maps) by changing the `TileLayer` URL in `MapPane.tsx`.

---

### 🔧 Development

#### Scripts:

- **`npm run dev`**: Starts the development server at `localhost:5173`.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build locally.

---

### 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

### 🙏 Acknowledgments

- [Leaflet.js](https://leafletjs.com/) for the amazing interactive map library.
- [Vite](https://vitejs.dev/) for fast builds and excellent development experience.
- [OpenStreetMap](https://www.openstreetmap.org/) for providing free map data.

---
