const initialState = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: "idle",
  erroMessage: "",
};

export default function content(state = initialState, action) {
  return state;
}
