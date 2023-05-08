import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import Branch from './Branch';
import Brand from './Brand';
import Category from './Category';
import Department from './Department';
import DeviceStatus from './DeviceStatus';

const links = [
    { label: 'Branch', icon: 'pi pi-building', component: <Branch /> },
    { label: 'Brand', icon: '', component: <Brand /> },
    { label: 'Category', component: <Category /> },
    { label: 'Department', icon: 'pi pi-briefcase', component: <Department /> },
    { label: 'Device Status', component: <DeviceStatus /> },
];



function Menu() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <TabMenu
                model={links}
                activeIndex={activeTab}
                onTabChange={(e) => setActiveTab(e.index)}
                className="w-full bg-gray-300"
            />
            <div>{links[activeTab].component}</div>
        </div>
    );
}

export default Menu;
