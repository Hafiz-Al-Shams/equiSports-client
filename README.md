# SportsSphere - Elite Sports Shop

![SportsSphere Screenshot](https://i.ibb.co.com/FShZVNs/Screenshot-6647.png)  

## Live Project  
🔗 [SportsSphere Live](https://equisports-project.web.app/)  

## Overview  
SportsSphere is the ultimate destination for premium sports equipment. This e-commerce platform allows users to browse, manage, and purchase sports gear efficiently. The system includes secure authentication, dynamic equipment listings, and seamless user interaction.

## Technologies Used  
- **Frontend:** React, React Router, React Helmet, React Helmet Async, React Awesome Slider, Swiper.js  
- **Backend & Database:** Express.js, MongoDB  
- **State Management & Utilities:** LocalForage, Match Sorter  
- **Authentication:** Firebase  
- **UI Enhancements:** SweetAlert2, React Tooltip, Lottie React, React Dark Mode Toggle  

## Key Features  
✅ **Firebase Authentication System:** Supports Email-Password login and Google authentication.  

✅ **Equipment Management System:** Users can add equipment, which is stored in the database.  

✅ **Real-time Equipment Listings:** Displays equipment dynamically from the database via the server API.  

✅ **User-Specific Data Filtering:** Shows only the equipment added by the logged-in user using email-based queries.  

✅ **Sorted Equipment Display:** Sorts all equipment items by price in ascending order.  

## Dependencies  
The following dependencies are used in the project:  

```json
{
  "firebase": "^11.0.2",
  "localforage": "^1.10.0",
  "lottie-react": "^2.4.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-awesome-slider": "^4.1.0",
  "react-dark-mode-toggle": "^0.2.0",
  "react-dom": "^18.3.1",
  "react-helmet": "^6.1.0",
  "react-helmet-async": "^2.0.5",
  "react-router-dom": "^7.0.2",
  "react-tooltip": "^5.28.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.14.5",
  "swiper": "^11.1.15"
}
```

## Installation & Running Locally  
Follow these steps to run the project locally:

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/your-username/sportssphere.git
   cd sportssphere
   ```

2. **Install dependencies:**  
   ```sh
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env.local` file in the root directory and add the following variables:

   ```sh
   VITE_apiKey=YOUR_FIREBASE_API_KEY
   VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
   VITE_projectId=YOUR_FIREBASE_PROJECT_ID
   VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
   VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
   VITE_appId=YOUR_FIREBASE_APP_ID
   ```

4. **Start the development server:**  
   ```sh
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to see the app in action.

## Additional Resources  
- [MongoDB Documentation](https://www.mongodb.com/docs/)  
- [Express.js Documentation](https://expressjs.com/)  
- [Firebase Documentation](https://firebase.google.com/docs)  

---

🚀 **Developed by Hafiz Al Shams**