const Message = ({ mensaje }) => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Mensaje</h2>
      <p className="text-lg text-gray-700">{mensaje}</p>
    </div>
  );
};

export default Message;