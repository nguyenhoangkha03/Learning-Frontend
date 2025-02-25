import { useState, useRef } from 'react'
import './HeaderMain.css'
import bell from '../../assets/imgs/bell.png'
import chat from '../../assets/imgs/chat.png'
import kingdom from '../../assets/imgs/united-kingdom.png'
import vietnam from '../../assets/imgs/vietnam.png'

function HeaderMain(){  

    const [searchState, setSearchState] = useState('hide')
    const [lightState, setLightState] = useState('dark')
    const searchRef = useRef(null)
    const inputRef = useRef(null)
    const closeIconRef = useRef(null)
    const lightRef = useRef(null)

    const handleClick = () => {
        if(searchState === 'hide'){
            searchRef.current.classList.toggle('search-zoom-out')
            inputRef.current.classList.toggle('hide')
            inputRef.current.focus()
            closeIconRef.current.classList.toggle('hide')
            setSearchState('show')
        }
    }

    const handleClickCloseSearch = () => {
        setSearchState('hide')
        searchRef.current.classList.toggle('search-zoom-out')
        inputRef.current.classList.toggle('hide')
        closeIconRef.current.classList.toggle('hide')
    }

    const handleClickTheme = () => {
        if(lightState === 'dark'){
            lightRef.current.classList.add('light')
            setLightState('light')
        }
        else{
            lightRef.current.classList.remove('light')
            setLightState('dark')
        }
    }

    return (
        <div className="header">
            <section className="section-header">
                <div 
                    className="header-search search-zoom-out"
                    onClick={handleClick}
                    ref={searchRef}
                >
                    <i className="fa-solid fa-magnifying-glass search"></i>
                    <input 
                        className="hide"
                        type="text" 
                        placeholder="Search..." 
                        ref={inputRef}   
                    />
                    <i 
                        className="fa-solid fa-xmark close hide"
                        onClick={handleClickCloseSearch}  
                        ref={closeIconRef}  
                    ></i>
                </div>
            </section>
            <h1>Learning Management</h1>
            <section className="header-tools">
                <div className="message">
                    <span>5</span>
                    <img src={chat} alt="" />
                </div>
                <div className="notification">
                    <span>4</span>
                    <img src={bell} alt="" />
                </div>
                <div className="language">
                <img src={vietnam} alt="" />
                </div>
                <div 
                    className="theme"
                    onClick={handleClickTheme}
                >
                    <i 
                        class="fa-solid fa-lightbulb"
                        ref={lightRef}
                    ></i>
                </div>
            </section>
        </div>
    )
}

export default HeaderMain