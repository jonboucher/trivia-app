function FinalScoreRing({ children }) {
  return (
    <div
      style={{
        borderColor: 'white',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
}
export default FinalScoreRing;
