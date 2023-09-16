import './index.css'

const TabsList = props => {
  const {eachTab, filterListBasedOnTab} = props
  const {tabId, displayText} = eachTab

  const onClickToggleId = () => {
    filterListBasedOnTab(tabId)
  }

  return (
    <li className="item-container">
      <button className="btn" type="button" onClick={onClickToggleId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
