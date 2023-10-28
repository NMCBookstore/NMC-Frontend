import React from "react";
interface ChildProps {
    numberCount: number;
  }
const NoteNotify: React.FunctionComponent<ChildProps> = (props) => {
    return (
        <div className="w-[20px] h-[20px] flex justify-center items-center rounded-full bg-orange-orange-6 notify-header">
            <span className="text-[10px] text-accent font-semibold">{props.numberCount}</span>
        </div>
    );
};

export default NoteNotify;