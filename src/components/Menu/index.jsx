import { AppBar, Toolbar, MenuItem } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/"> Sair </Link>
        <MenuItem onClick={() => sendTo("/home")}>Home</MenuItem>
        <MenuItem onClick={() => sendTo("/tecnologias")}>Stacks</MenuItem>
        <MenuItem onClick={() => sendTo("/adicionar-tecnologia")}>Add Stack</MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
