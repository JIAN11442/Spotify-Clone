import usePlayer from "./usePlayer";

const useSwitchSongs = () => {
  const player = usePlayer();

  const next = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[(currentIndex + 1) % player.ids.length];

    player.setId(nextSong);
  };

  const previous = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];

    if (!previousSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }

    player.setId(previousSong);
  };

  return {
    next,
    previous,
  };
};

export default useSwitchSongs;
