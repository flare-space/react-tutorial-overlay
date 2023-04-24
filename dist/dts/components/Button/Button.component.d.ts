/// <reference types="react" />
import "./Button.scss";
interface IProps {
    children: React.ReactNode;
    addStyles?: string[];
    onClick?: () => void;
}
declare const Button: React.FC<IProps>;
export default Button;
