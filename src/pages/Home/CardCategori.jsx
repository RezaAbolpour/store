function CardCategori(propse) {
  return (
    <div className="h-32 w-40 rounded-md bg-gray-200">
      <div className="flex justify-center items-center">
        <img src={propse.img} alt="" />
      </div>
      <div className="flex justify-center items-center mt-3">
        <p className="_font-bold text-sm">{propse.name}</p>
      </div>
    </div>
  );
}

export default CardCategori;
