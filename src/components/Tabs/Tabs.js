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
  isResponsive,
  ...attrs
}) => {

  const classes = clsx(
    "tabs-nav",
    { "tabs-nav__responsive": isResponsive },
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
  onChangeTabAction,
  isResponsive
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

  const renderTabsNav = (isResponsive) => {
    return (
      getTabsLabels(children).map((label, i) => {
        return (
          <TabsNav
            label={label}
            key={i}
            activeTab={activeTab}
            onChangeActiveTab={handleChangeTab}
            isResponsive={isResponsive}
          />
        )
      })
    )
  }

  const tabsWrapperClasses = clsx(
    "tabs-nav-wrapper",
    { "tabs-nav-wrapper__responsive": isResponsive }
  );

  return (
    <div>
      <div className={tabsWrapperClasses} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {renderTabsNav(isResponsive)}
      </div>

      {children.map((child, i) =>
        <div key={i}>
          {React.cloneElement(child, { activeTab })}
        </div>)}
    </div>
  );
}


