import { useQuery } from "react-query";
import { useEffect, useState } from "react";

export interface Props {}

export const AlbumList: React.FC<Props> = (props: Props) => {
    const API: string = "https://jsonplaceholder.typicode.com";
    const DEFAULT_QUERY: string = "/albums";

    const [albums, setAlbums] = useState(null);

    async function fetchAlbums() {
        const res = await fetch(API + DEFAULT_QUERY);
        return res.json();
    }

    // const { data, status } = useQuery("albums", fetchAlbums);
    // console.log(data);

    let test = null;

    useEffect(() => {
        fetchAlbums().then((data) => {
            setAlbums(data);
        });
    }, []);

    return (
        <div>
            <p>albumList</p>
            <pre>{JSON.stringify(albums, null, 2)}</pre>
        </div>
    );
};
