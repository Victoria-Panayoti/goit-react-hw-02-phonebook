export const Filter = ({ filter, onFilterHandler }) => {
  return (
    <>
      <label htmlFor="find">
        Find contacts by name
        <input name="find" value={filter} onChange={onFilterHandler} />
      </label>
    </>
  );
};
