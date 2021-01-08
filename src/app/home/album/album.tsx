import { IAlbum } from "@/src/app/home/shared/models/ialbum";

interface Props {
    album: IAlbum;
}

export const Album: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <p>
                <span>
                    Id: {props.album.id}, userId: {props.album.userId}, title: {props.album.title}
                </span>
            </p>
        </div>
    );
};
