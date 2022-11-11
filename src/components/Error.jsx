const Error = () => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="loader" className="w-32 h-32" />
    <h1 className="font-bold text-2xl text-white mt-2">Something went wrong, please try again.</h1>
  </div>
);

export default Error;
