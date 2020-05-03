const filtro = require("./filtro-aula");
const data = require("./data/data.json");

describe("Filtro", () => {
  describe("Status", () => {
    it("Retorna somente os vivos", () => {
      const response = filtro.filterByStatus(data.results, "Alive");
      expect(response.length).toBe(8);
    });

    it("Retorna somente os mortos", () => {
      const response = filtro.filterByStatus(data.results, "Dead");
      expect(response.length).toBe(6);
    });

    it("Retorna somente os desconhecidos", () => {
      const response = filtro.filterByStatus(data.results, "unknown");
      expect(response.length).toBe(6);
    });
  });

  describe("Sexo", () => {
    it("Retorna somente os homens", () => {
      const response = filtro.filterByGender(data.results, "Male");
      expect(response.length).toBe(15);
    });

    it("Retorna somente as mulheres", () => {
      const response = filtro.filterByGender(data.results, "Female");
      expect(response.length).toBe(4);
    });

    it("Retorna somente os de gênero desconhecido", () => {
      const response = filtro.filterByGender(data.results, "unknown");
      expect(response.length).toBe(1);
    });
  });

  describe("Episodios", () => {
    it("Retorna episodio 6 da URL", () => {
      const url = "https://rickandmortyapi.com/api/episode/6";
      expect(filtro.getEpisodeFromURL(url)).toBe("6");
    });

    it("Retorna um array de numeros dos espisodios de um personagem", () => {
      const character = data.results[0];
      const response = filtro.generateEpisodeList(character);
      expect(response.length).toBe(31);
    });

    it("Retorna um array de numeros dos espisodios", () => {
      const character = data.results[6];
      const ricky = data.results[0];
      const episodes = {
        "10": [ricky],
        "11": [ricky],
      };
      const response = filtro.mapCharacterToEpisodes(episodes, character);
      expect(response["10"].length).toBe(2);
      expect(response["10"][1].name).toBe(character.name);
    });

    it("Retorna somente Rick e Morty para o episodio 1", () => {
      const response = filtro.filterByEpisode(data.results, "1");
      expect(response.length).toBe(2);
      expect(response[1].name).toBe("Morty Smith");
    });
  });
});
