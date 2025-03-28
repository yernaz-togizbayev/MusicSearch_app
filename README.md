# 🎵 Music Search App – Human-Computer Interface Project

This is a mobile application developed using **React Native** and **Expo**, created for the **Human-Computer Interface (HCI)** course. The app allows users to search for musicians or bands, view their metadata (albums, type, country, release year), and manage a personal list of favorite artists.

---

## 📚 Course Context

**Course**: Human-Computer Interface  
**Main Goals**:
- Designing user-friendly mobile interfaces
- Navigating between screens
- Managing UI state with React hooks
- Making asynchronous API requests (MusicBrainz)
- Building interactive components (buttons, search, lists)

---

## 🚀 Features

- 🔎 **Search Functionality**:
  - Search for a musician or band using the MusicBrainz API
  - View album data and artist metadata

- ⭐ **Favorites**:
  - Save musicians to a personal favorites list
  - Access and view your favorites on a separate screen

- 🧭 **Screen Navigation**:
  - Seamless navigation using React Navigation stack

- 📱 **Clean UI**:
  - Styled with `StyleSheet` and icons via `react-native-vector-icons`

---

## 🗂️ File Overview

| File               | Description |
|--------------------|-------------|
| `App.js`           | Main navigation container for the app |
| `HomeScreen.js`    | Entry screen with search input and action buttons |
| `MusicianScreen.js`| Fetches and displays musician & album data |
| `FavoritesScreen.js`| Shows list of user’s favorite musicians |
| `MusicianSearchBar.js`| Input component for entering musician/band name |
| `FavoritesButton.js` | Navigates to Favorites screen |
| `SearchButton.js`  | Triggers navigation to MusicianScreen |
| `app.json`         | Expo app configuration |
| `package.json`     | Project dependencies and scripts |

---

## 🖼️ Screenshots

- 🎧 **Home Screen** – Search bar + navigation buttons  
- 📀 **Musician Screen** – Artist metadata + albums  
- 🌟 **Favorites Screen** – List of saved musicians  

---

## 📦 Getting Started

Make sure you have [Expo CLI](https://docs.expo.dev/get-started/installation/) installed:

```bash
npm install -g expo-cli
```

Then run:
```bash
npm install
expo start
```

To launch on a mobile device:
- Use the Expo Go app on iOS/Android
- Or use an emulator from Android Studio

---

## 🔧 Tech Stack
- React Native with Expo
- React Navigation
- MusicBrainz API
- Vector icons via react-native-vector-icons
- Android Toast messages for feedback
