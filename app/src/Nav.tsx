function Nav({
  isPlaying,
  onGameChange,
}: {
  isPlaying: boolean;
  onGameChange: (game: boolean) => any;
}) {
  return (
    <div>
      <button onClick={() => onGameChange(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default Nav;
