import React, {useEffect, useState } from 'react';
import "./index.css";


const Tab = ({children, active = 0}) => {
    const[activeTab, setActiveTab] = useState(active);
    const[tabsData, setTabsData] = useState([]);


    useEffect(() => {
        let data = [];

        React.Children.forEach(children, element => {
            if(!React.isValidElement(element)) return;

            const {clinical_laboratory: {tab, children}} = element;
            data.push({tab, children});
        })


        setTabsData(data);

    }, [children]);




    return (
        <div className="w-100 custom-tab">
            <ul className='nav nav-tabs'>
                {
                    tabsData.map(({tab}, idx) => (
                        <li className='nav-item'>
                            <a className={`nav-link ${idx === activeTab ? 'active' : ""}`}
                            href="#"
                            onClick={() => setActiveTab(idx)}
                             >
                                {tab}
                            </a>
                        </li>
                    ))
                }
            </ul>

                <div className="tab-content p-3">
                    {tabsData[activeTab] && tabsData[activeTab].children}
                </div>

        </div>

    );
};

const TabPanel = ({children}) => {
    return {children}
}

Tab.TabPanel = TabPanel;



export default Tab;
