import { ITodo } from "@/src/app/home/shared/models/itodo";

interface Props {
    todo: ITodo;
}

export const Todo: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <p>
                <span>
                    Id: {props.todo.id}, userId: {props.todo.userId}, title: {props.todo.title}, completed:{" "}
                    {props.todo.completed}
                </span>
            </p>
        </div>
    );
};
