import React, { useEffect } from "react";
import FirebaseContext from "../../firebase/context";
import LinkItem from "./LinkItem";

function SearchLinks() {
  const { firebase } = React.useContext(FirebaseContext);
  const [links, setLinks] = React.useState([]);
  const [filteredlinks, setFilteredLinks] = React.useState([]);
  const [filter, setFilter] = React.useState("");

  useEffect(() => {
    getInitealLinks();
  }, []);

  function getInitealLinks() {
    firebase.db
      .collection("links")
      .get()
      .then(snapshot => {
        const links = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        setLinks(links);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const query = filter.toLowerCase();
    const machedLinks = links.filter(link => {
      return (
        link.description.toLowerCase().includes(query) ||
        link.url.toLowerCase().includes(query) ||
        link.postedBy.name.toLowerCase().includes(query)
      );
    });
    setFilteredLinks(machedLinks);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Search <input onChange={event => setFilter(event.target.value)} />
          <button>Ok</button>
        </div>
      </form>
      {filteredlinks.map((filteredLink, index) => (
        <LinkItem
          key={filteredLink.id}
          showCount={false}
          link={filteredLink}
          index={index}
        />
      ))}
    </div>
  );
}

export default SearchLinks;
