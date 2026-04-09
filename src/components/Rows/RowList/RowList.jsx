
import SingleRow from '../SingleRow/SingleRow';
import requests from '../../../utils/requests';

const ROWS = [
  { title: "NETFLIX ORIGINALS", fetchUrl: requests.fetchNetflixOriginals, isLargeRow: true },
  { title: "Trending Now", fetchUrl: requests.fetchTrending, isLargeRow: true},
  { title: "Top Rated", fetchUrl: requests.fetchTopRatedMovies, isLargeRow: true},
  { title: "Action Movies", fetchUrl: requests.fetchActionMovies,isLargeRow: true},
  { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies, isLargeRow: true},
  { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies, isLargeRow: true},
  { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies, isLargeRow: true},
  { title: "Tv Shows", fetchUrl: requests.fetchTvShow ,isLargeRow: true},
  { title: "Documentaries", fetchUrl: requests.fetchDocumentaries, isLargeRow: true}
];

export default function RowList() {
  return (
    <>
      {ROWS.map((row, index) => (
        <SingleRow
          key={index}
          title={row.title}
          fetchUrl={row.fetchUrl}
          isLargeRow={row.isLargeRow || false}
        />
      ))}
    </>
  );
}