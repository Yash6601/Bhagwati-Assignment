import React from 'react';

interface ProgressBarProps {
  progress: number;
}

function ProgressBar(props: ProgressBarProps) {
  const { progress } = props;
  return (
    <div className="flex items-center space-x-1 h-6">
      {Array.from({length: 8}).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-full rounded ${
            i < progress ? "bg-blue-500" : "bg-blue-200"
          }`}
        />
      ))}</div>
  );
}

export default ProgressBar;

