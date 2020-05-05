import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper'
import './OptionsWithTabs.css'
import './OptionsWithTabs.scss'
import './media.scss'

const OptionsWithTabs = ({ title, activeTabNumber, tabsHeadingsTexts, tabsContent}) => {
    const [tempActiveTabNumber, setTempActiveTabNumber] = useState(null)
    const [allTabs, setAllTabs] = useState(null)
    const [allContent, setAllContent] = useState(null)
    const [activeContent, setActiveContent] = useState(null)
    

    const tabHandler = (i) => {
        setTempActiveTabNumber(i)
        setActiveContent(allContent[i])
    }

    useEffect( () => {
        setAllTabs([...tabsHeadingsTexts].map((item, i) => {
            return(<div 
                    key={Math.random()*10}
                    onClick={tabHandler.bind(null, i)}
                    className={`${tempActiveTabNumber ? 
                        (i===tempActiveTabNumber ? "options-with-tabs-tab-active" : "options-with-tabs-tab") : 
                        (i===activeTabNumber ? "options-with-tabs-tab-active" : "options-with-tabs-tab" )
                        } `}>
                    {item}</div>)
        }))
    }, [activeContent])


    useEffect( () => {
        setActiveContent([...tabsContent][activeTabNumber])
        setAllContent([...tabsContent].map( (item, i) => {
            return( <div 
                        key={Math.random()*10}>
                        {item}</div>)
            })
        )
    }, [])

    return(
        <div className="options-with-tabs">
            <div className="container">
                <div className="options-with-tabs-wrapper">
                    <h2>{title}</h2>
                    <div className="options-with-tabs-distributor">
                        <div className="options-with-tabs-tabs">
                            {allTabs}
                        </div>
                        {activeContent}
                    </div>
                </div>
                <div className="options-with-tabs-background"></div>
            </div>
        </div>
    )
}

export default OptionsWithTabs;