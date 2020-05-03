function filterByStatus(personagens, status) {
  return personagens.filter((personagem) => personagem.status === status);
}

function filterByGender(personagens, gender) {
  return personagens.filter((personagem) => personagem.gender === gender);
}

function getEpisodeFromURL(url) {
  const splittedURL = url.split("/");
  return splittedURL[splittedURL.length - 1];
}

function generateEpisodeList(character) {
  return character.episode.map((url) => getEpisodeFromURL(url));
}

function mapCharacterToEpisodes(episodes, character) {
  const characterEpisodes = generateEpisodeList(character);
  let newEpisodes = { ...episodes };
  characterEpisodes.map((episode) => {
    if (newEpisodes[episode]) {
      newEpisodes = {
        ...newEpisodes,
        [episode]: [...newEpisodes[episode], character],
      };
      return;
    }
    newEpisodes[episode] = [character];
  });
  return newEpisodes;
}

function filterByEpisode(characters, episode) {
  const episodios = characters.reduce((episodes, character) => {
    return mapCharacterToEpisodes(episodes, character);
  }, {});
  return episodios[episode];
}

module.exports = {
  filterByStatus,
  filterByGender,
  filterByEpisode,
  getEpisodeFromURL,
  generateEpisodeList,
  mapCharacterToEpisodes,
};
