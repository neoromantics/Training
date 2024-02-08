import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Photos {
  thumbnailUrl: string;
}

const PhotoPage = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${params.id}/photos`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Photos[] = await response.json();
        setPhotos(data);
      } catch (error) {
        setError("Failed to fetch photos");
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.thumbnailUrl}
          alt={`Photo ${index + 1}`}
          style={{ margin: "10px" }}
        />
      ))}
    </div>
  );
};

export default PhotoPage;
