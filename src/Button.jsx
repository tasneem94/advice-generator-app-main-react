export const Button = ({ fetchNewAdvice }) => {
  return (
    <>
      <div className="btn-dice" onClick={fetchNewAdvice}></div>
    </>
  );
};
