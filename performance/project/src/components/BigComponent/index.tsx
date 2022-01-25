const BigComponent = () => {
  const fakeItems = new Array(1000).fill(true);
  console.log(fakeItems);

  return (
    <div>
      {fakeItems.map((_, index) => {
        return <p key={index}>{index}</p>;
      })}
    </div>
  );
};

export default BigComponent;
