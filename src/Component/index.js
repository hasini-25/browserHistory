import './index.css'

const UserHistoryList = props => {
  const {historyListDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyListDetails
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <div>
      <li>
        <div className="history-box">
          <div className="history">
            <p className="space">{timeAccessed}</p>
            <img className="logo-icon space" src={logoUrl} alt="domain logo" />
            <p className="space">{title}</p>
            <p className="space link">{domainUrl}</p>
          </div>
          <button
            type="button"
            className="delete-button"
            onClick={onDelete}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default UserHistoryList
