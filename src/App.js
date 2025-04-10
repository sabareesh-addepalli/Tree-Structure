import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const addFirstItem = () => {
    setData([
      {
        label: "Parent",
        child: [],
      },
    ]);
  };
  const addItem = (level, index) => {
    console.log(level, index);
    const updatedData = [...data];
    updatedData[index + 1] = { label: "child", child: [] };
    console.log(updatedData);
    setData(updatedData);
  };
  const addChild = (level,index) => {
    console.log(level,index);
    const updatedData = [...data];
    console.log(updatedData[index])
    updatedData[index].child.push({ label: "child", child: [] })
    console.log(updatedData);
    setData(updatedData);
  };
  const renderChild = (children, level = 0) => {
    if (children.length === 0) {
      return <button onClick={addFirstItem}>add</button>;
    }
    return (
      <>
        {children.map((item, index) => (
          <div>
            <span>
              <input value={item.label} className="item" />{" "}
              <button onClick={() => addChild(level,index)}>add child</button>
            </span>

            {children.length === index + 1 && (
              <button onClick={() => addItem(level, index)}>add</button>
            )}
            {item.child && item.child.length > 0 && (
              <div className="childItem">
                {renderChild(item.child, level + 1)}
              </div>
            )}
          </div>
        ))}
      </>
    );
  };
  return <div className="App">{renderChild(data)}</div>;
}

export default App;
