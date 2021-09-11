import headerStyles from "../styles/Header.module.css";

const header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span>News
      </h1>
    </div>
  );
};

export default header;
