import { ITodo } from "@/src/app/home/shared/models/itodo";

interface Props {
    todo: ITodo;
}

export const Todo: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <p>Todo</p>
        </div>
    );
};
