# WeatherWise 🌤️  
**A sleek and simple web app to fetch real-time weather information using the OpenWeatherMap API.**

---

## 📑 Table of Contents  
- [Overview](#overview)  
- [Features](#features)  
- [Demo](#demo)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Tech Stack](#tech-stack)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact and Support](#contact-and-support)  
- [Acknowledgments](#acknowledgments)  

---

## <a id="overview"></a> 📖 Overview  
WeatherWise is a lightweight, user-friendly web application that allows users to check current weather conditions for any city worldwide. By leveraging the OpenWeatherMap API, it provides real-time data on temperature, humidity, and wind speed, presented in a clean and visually appealing interface. Whether you're a traveler, a weather enthusiast, or just curious about the forecast, WeatherWise is designed to deliver quick and accurate weather updates with minimal effort.

### ✨ What Makes It Unique?  
- **Dynamic Weather Icons**: Visual representation of weather conditions.  
- **Minimalist Design**: A clean, gradient-based UI that's easy on the eyes.  
- **No Build Tools Required**: Runs directly in the browser with just HTML, CSS, and JavaScript.  

---

## <a id="features"></a> 🌟 Features  
- **Real-Time Weather Data**: Fetches current temperature, humidity, and wind speed for any city.  
- **Dynamic Weather Icons**: Displays icons based on weather conditions (e.g., clouds, rain, clear skies).  
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.  
- **User-Friendly Interface**: Simple input field and button for quick searches.  
- **Lightweight**: No complex dependencies—just pure HTML, CSS, and JavaScript.  

---

## <a id="demo"></a> 🎥 Demo  
Check out WeatherWise in action! Enter a city name to see real-time weather data displayed with a beautiful gradient background and dynamic weather icons.  

![WeatherWise Screenshot](preview.png)  
👉 [Live Demo](https://kkabilan07.github.io/Weather-Web-App-using-JavaScript/)  

**Note**: The live demo displays the UI only. To see real weather data, you'll need to add your own OpenWeatherMap API key in `script.js` (see [Installation](#installation) for details).  

---

## <a id="installation"></a> 🛠️ Installation  

Follow these steps to set up WeatherWise on your local machine. It's beginner-friendly and requires no build tools!  

### Prerequisites  
- A modern web browser (e.g., Chrome, Firefox, Edge).  
- An API key from [OpenWeatherMap](https://openweathermap.org/api).  

### Steps  
1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/kkabilan07/Weather-Web-App-using-JavaScript.git  
   cd Weather-Web-App-using-JavaScript  
   ```  
   Alternatively, download the ZIP file and extract it.  

2. **Get an OpenWeatherMap API Key**  
   - Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).  
   - After signing in, navigate to the **API keys** section.  
   - Copy your default key or generate a new one.  

3. **Configure the API Key**  
   Open `script.js` in a text editor and replace the placeholder API key with your own:  
   ```javascript  
   const apikey = "your_actual_api_key_here";  
   ```  

4. **Run the App**  
   Open `index.html` in your web browser. That's it! No build tools or servers required.  

---

## <a id="usage"></a> 📋 Usage  

Using WeatherWise is straightforward:  
1. Open the app in your browser.  
2. Enter a city name (e.g., "Bengaluru") in the search box.  
3. Click the search button (magnifying glass icon).  
4. View the current weather details, including:  
   - Temperature (e.g., 34°C)  
   - Humidity (e.g., 17%)  
   - Wind Speed (e.g., 5.72 km/h)  
   - A weather icon representing the current conditions.  

If the city name is left blank, you'll see an alert prompting you to enter a valid city.  

---

## <a id="tech-stack"></a> 🧰 Tech Stack  
WeatherWise is built with the following technologies:  
- **HTML5**: For the structure of the app.  
- **CSS3**: For styling, including a gradient background and responsive layout.  
- **JavaScript**: For fetching and displaying weather data dynamically.  
- **OpenWeatherMap API**: For real-time weather data.  

---

## <a id="contributing"></a> 🤝 Contributing  

Contributions are welcome! If you'd like to improve WeatherWise, here's how you can get started:  
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature/your-feature-name`).  
3. Make your changes and commit them (`git commit -m "Add your feature"`).  
4. Push to your branch (`git push origin feature/your-feature-name`).  
5. Open a pull request.  

For major changes, please open an issue first to discuss your ideas.  

---

## <a id="license"></a> 📜 License  

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the license terms.  

---

## <a id="contact-and-support"></a> 📬 Contact and Support  

Have questions or need help? Reach out to me:  
- **Email**: [kkabilan2024@gmail.com](mailto:kkabilan2024@gmail.com)  

You can also open an issue on the GitHub repository for bug reports or feature requests.  

---

## <a id="acknowledgments"></a> 🙏 Acknowledgments  

- **[OpenWeatherMap](https://openweathermap.org/)** for providing a free and reliable weather API.  
- The open-source community for inspiration and resources.  
- Icons used in the app are sourced from publicly available weather icon sets.  

Thank you for checking out WeatherWise! If you like the project, please give it a ⭐ on GitHub.
