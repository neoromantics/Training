import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export interface Album {
  id: number;
  title: string;
}

const ListPage = () => {
  const [Albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Album[] = await response.json();
        setAlbums(data);
      } catch (error) {
        setError("Failed to fetch Albums");
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {Albums.slice(0, 10).map((album) => (
          <li key={album.id}>
            <div>
              <NavLink to={`/photo/${album.id}`}>
                {album.id}: {album.title}
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
