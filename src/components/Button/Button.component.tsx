import "./Button.scss";

interface IProps {
  children: React.ReactNode;
  addStyles?: string[];
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ children, addStyles, onClick }: IProps) => {
  const addClasses = addStyles?.length ? " " + addStyles.join(" ") : "";

  return (
    <button
      className={"TutorialButton" + addClasses}
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </button>
  );
};

export default Button;
