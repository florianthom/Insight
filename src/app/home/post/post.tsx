import { IPost } from "@/src/app/home/shared/models/ipost";

interface Props {
    post: IPost;
}

export const Post: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <span>
                Id: {props.post.id}, UserId: {props.post.userId}, Title: {props.post.title}, Content: {props.post.body}
            </span>
        </div>
    );
};
