import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import BackgroundPattern from './BackgroundPattern';
import RRFToggle from './RRFToggle';
import SearchResult from './SearchResult';

export default function ResultSet({ index, type, results, enableHybrid, setEnableHybrid, activeResult, setActiveResult, globalSettings }) {
  const { theme, id, label, hybrid_capable, showChange } = type;
  const resultSetClasses = classNames(
    "p-8 relative", {
      "border-4 border-elastic-blue": theme === "dark",
      "shadow-lg bg-elastic-blue-light": theme === "light",
    }
  )

  console.log("enableHybrid",enableHybrid);
  console.log("Results:", results);
  return (
    <div className={resultSetClasses}>
      <BackgroundPattern theme={theme} />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">{label}</h2>
        
      </div>
     
      {results.map((result) => (
        <SearchResult
          key={result._id}
          theme={theme}
          result={result}
          activeResult={activeResult}
          setActiveResult={setActiveResult}
          globalSettings={globalSettings}
          showChange={showChange}
          typeId={id}
        />
      ))}
    </div>
  );
}