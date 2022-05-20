import React from "react";
interface Props {}

export const TestComponent: React.FC<Props> = (props: Props) => {
    return <div className="text-xl leading-8 text-black">hi</div>;
};
