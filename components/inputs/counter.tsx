"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter = ({ title, subtitle, value, onChange }: CounterProps) => {
  const onAdd = useCallback(() => {
    if (value === 8) {
      return;
    }
    onChange(value + 1);
  }, [value, onChange]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex items-center gap-4">
        <div
          onClick={onReduce}
          className={`w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition
            ${value === 1 ? "opacity-30 cursor-not-allowed" : ""}
          `}
        >
          <AiOutlineMinus />
        </div>
        <div className="font-light text-xl text-neutral-600">
          {value} {value === 8 ? "+" : ""}
        </div>
        <div
          onClick={onAdd}
          className={`w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition
            ${value === 8 ? "opacity-30 cursor-not-allowed" : ""}
          `}
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
