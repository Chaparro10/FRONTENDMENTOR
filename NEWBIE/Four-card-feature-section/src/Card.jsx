const Card = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#FFF",
        borderRadius: "7px",
        width: "180px",
        height: "140px",
        borderTop: `solid 4px ${props.color}`,
        contain: "content",
       boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
      }}
    >
      <div style={{ padding: "15px" }}>
        <h1 style={{ color: "black", fontSize: "13px", textAlign: "justify" }}>
          {props.name}
        </h1>
        <p style={{ color: "black", fontSize: "10px", textAlign: "justify" }}>
          {props.description}
        </p>
        <div
          style={{
            height: "auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            src="https://imgs.search.brave.com/ecJ6ZLy4oEpVO1vk2IUBjh8QNkneQyNoiQihhkc_IhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMTUzL1BO/Ry8yNTYvc2VhcmNo/X2ZpbmRfbHVwYV8y/MTg4OS5wbmc"
            style={{ height: "40px", width: "40px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
