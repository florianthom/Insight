import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { IAlbum } from "@/src/app/home/shared/models/ialbum";
import { Album } from "@/src/app/home/album/album";

export interface Props {}

export const AlbumList: React.FC<Props> = (props: Props) => {
    const API = "https://jsonplaceholder.typicode.com";
    const DEFAULT_QUERY = "/albums";

    const [albums, setAlbums] = useState([] as IAlbum[]);

    async function fetchAlbums() {
        const res = await fetch(API + DEFAULT_QUERY);
        return res.json();
    }

    useEffect(() => {
        fetchAlbums().then((data) => {
            setAlbums(
                data.map((a) => {
                    return {
                        id: a.id,
                        userId: a.userId,
                        title: a.title,
                    } as IAlbum;
                }),
            );
        });
    }, []);

    return (
        <div>
            <h2>AlbumList</h2>
            {albums.map((a) => <Album key={a.id} album={a}></Album>).slice(0, 5)}
        </div>
    );
};
