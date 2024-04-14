// Import React into the bundle
import React from 'react';
import { createRoot } from 'react-dom/client';

// Include your index.css file into the bundle
import "../styles/index.css";

// Import your own components
import Layout from './layout';

// Create a root container where the app will be rendered
const root = createRoot(document.querySelector("#app"));

// Render your React application
root.render(<Layout />);

