import React, {useState, useEffect} from "react";
import "./App.css";
import dummyData from "./data";
import CardList from "./components/CardList";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from "./components/Themes"
import {GlobalStyles} from "./components/globalStyles";
import Toggle from "./components/Toggle";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [theme, setTheme] = useState('light');
    const themeToggle = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setVideos(dummyData);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
                <div className="App">
                <Toggle onSwitchTheme={themeToggle} theme={theme}/>
                    {
                        videos.map((list, index) => {
                            return (
                                <section key={index}>
                                    <h2 className="section-title">{list.section}</h2>
                                    <CardList list={list}/>
                                    <hr/>
                                </section>
                            );
                        })}
                </div>
            </>
        </ThemeProvider>

    );
};

export default App;
