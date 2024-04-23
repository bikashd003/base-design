import React, { useState, useEffect } from "react";
import "./Base.css";
import Header from "./Header";
import spinner from "../assets/spinner.svg";
import tick from "../assets/tick.svg";
import refresh from "../assets/refresh.svg";
import {query} from "../Constant/Query"

const Base = () => {
  const [activeTab, setActiveTab] = useState("query-history");
  const [latestQueryId, setLatestQueryId] = useState(null);
  const [queryHistory, setQueryHistory] = useState(query);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleExecuteClick = () => {
    const newQuery = {
      id: Date.now(),
      text: "Lorem ipsum dolor sit ame consectetur.Lorem ipsum dolor sit ame consectetur.",
      status: "loading",
    };
    setQueryHistory([newQuery, ...queryHistory]);
    setLatestQueryId(newQuery.id);
  };

  useEffect(() => {
    if (latestQueryId) {
        const timer = setTimeout(() => {
          const updatedQueryHistory = queryHistory.map((query) => {
            if (query.id === latestQueryId) {
              return { ...query, status: "success" };
            }
            return query;
          });
          setQueryHistory(updatedQueryHistory);
          setLatestQueryId(null);
        }, 10000);
  
        return () => clearTimeout(timer);
      }
    }, [queryHistory, latestQueryId]);

  return (
    <>
      <div className="container">
        <Header />
        <div className="execution-container">
          <div className="execution">
            <select>
              <option>Sheet 1</option>
            </select>
            <div className="line"></div>
            <input type="text" placeholder="Type your query" />
          </div>
        </div>
        <button className="execute-btn" onClick={handleExecuteClick}>
          Execute &rarr;
        </button>
        <div className="tabs-container">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "query-history" ? "active" : ""}`}
              onClick={() => handleTabClick("query-history")}
            >
              Query History
            </div>
            <div
              className={`tab ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => handleTabClick("tab1")}
            >
              Tab Name 1
            </div>
            <div
              className={`tab ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabClick("tab2")}
            >
              Tab Name 3
            </div>
          </div>
          <div
            className="tab-content"
          >
            <div className={`tab-pane ${
              activeTab === "query-history" ? "active" : ""
            }`}>
              {queryHistory.map((query, index) => (
                <div key={query.id} className="message">
                  <div className="text">
                    <span>{index + 1}</span> {query.text}
                  </div>
                  {query.status === "loading" ? (
                    <img
                      src={spinner}
                      alt="spinner"
                      className="spinner rotating"
                    />
                  ) : query.status === "success" ? (
                    <img src={tick} alt="tick" className="tick" />
                  ) : (
                    <img src={refresh} alt="refresh" className="refresh" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="tab-content">
          <div
            className={`tab-pane ${activeTab === "tab1" ? "active" : ""}`}
          >
            <div className="message">
              <div className="text">
                <span>1</span> Lorem ipsum dolor sit ame consectetur.Lorem ipsum
                dolor sit ame consectetur.
              </div>
              <img src={refresh} alt="refresh" className="refresh" />
            </div>
            <div className="message">
              <div className="text">
                <span>2</span> Lorem ipsum dolor sit ame consectetur.Lorem ipsum
                dolor sit ame consectetur.
              </div>
              <img src={spinner} alt="spinner" className="spinner rotating" />
            </div>
            <div className="message">
              <div className="text">
                <span>3</span> Lorem ipsum dolor sit ame consectetur.Lorem ipsum
                dolor sit ame consectetur.
              </div>
              <img src={tick} alt="tick" className="tick" />
            </div>
          </div>
          </div>
         <div className="tab-content">
         <div
            className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`}
          >
            <div className="message">
              <div className="text">
                <span>1</span> Lorem ipsum dolor sit ame consectetur.Lorem ipsum
                dolor sit ame consectetur.
              </div>
              <img src={refresh} alt="refresh" className="refresh" />
            </div>
            <div className="message">
              <div className="text">
                <span>2</span> Lorem ipsum dolor sit ame consectetur.Lorem ipsum
                dolor sit ame consectetur.
              </div>
              <img src={spinner} alt="spinner" className="spinner rotating" />
            </div>
            <div className="message">
              <div className="text">
                <span>3</span> Lorem ipsum dolor sit ame consectetur.Lorem ipsum
                dolor sit ame consectetur.
              </div>
              <img src={tick} alt="tick" className="tick" />
            </div>
          </div>
         </div>
          
        </div>
      </div>
    </>
  );
};

export default Base;