import React from 'react';
import "./Tabs.scss";
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Content for each tab
export const TabsItem = ({
  children,
  className,
  label,
  activeTab,
  ...attrs
}) => {

  const classes = clsx(
    "tabs-item",
    { className },
    { "tabs-item-active": label === activeTab }
  )

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  )
}

//Tab navigation (headings)
export const TabsNav = ({
  className,
  label,
  activeTab,
  onChangeActiveTab,
  ...attrs
}) => {

  const classes = clsx(
    "tabs-nav",
    { className },
    { "tabs-nav-active": label === activeTab }
  );

  const handleClick = (e) => {
    onChangeActiveTab(label);
  }

  return (
    <div className={classes} onClick={handleClick} {...attrs}>
      {label}
    </div>
  )
}

//Most parent component
export const Tabs = ({
  children,
  onChangeTabAction
}) => {

  const [activeTab, setActiveTab] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setActiveTab(getTabsLabels(children)[0])
    dispatch(onChangeTabAction(getTabsLabels(children)[0]));
  }, []);

  const getTabsLabels = (children) => {
    return children.map(({ props }) => props.label)
  }

  const handleChangeTab = (label) => {
    setActiveTab(label);
    dispatch(onChangeTabAction(label));
  }

  const renderTabsNav = () => {
    return (
      getTabsLabels(children).map((label, i) => {
        return (
          <TabsNav
            label={label}
            key={i}
            activeTab={activeTab}
            onChangeActiveTab={handleChangeTab}
          />
        )
      })
    )
  }

  return (
    <div>
      <div className="tabs-nav-wrapper" style={{maxWidth: "1280px", margin: "0 auto"}}>
        {renderTabsNav()}
      </div>

      {children.map((child, i) =>
        <div key={i}>
          {React.cloneElement(child, { activeTab })}
        </div>)}
    </div>
  );
}


