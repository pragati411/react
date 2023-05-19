import { useContext } from "react";
import { switchThemeContext } from "./context/themeContext";

import { Link } from "react-router-dom";
const ImplementDarkTheme = () => {
  console.log("abc");
  const theme = useContext(switchThemeContext);

  return (
    <>
      <h1 style={{ backgroundColor: theme.theme, color: "red" }}>
        Your childhood teacher did not wrong you when they taught you that there
        should be three, or four, or five sentences in a paragraph. It is
        important to understand, however, that the aim in teaching this was not
        to impart a hard-and-fast rule of grammar, drawn from an
        authoritative-but-dusty book. The true aim of this strategy was to teach
        you that your ideas must be well supported to be persuasive and
        effective.
      </h1>
      <button onClick={theme.toggleDarkMode}>THEME</button>

      <Link to="/Second">Second</Link>
      <Link to="/third">Third</Link>
    </>
  );
};
export default ImplementDarkTheme;
