import { Avatar, Box, Button, Grid, Main, Nav, Sidebar } from "grommet";
import { Help, Projects, Home } from "grommet-icons";
import { useHistory } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const history = useHistory();
  return (
    <>
      <Grid
        rows={["100vh"]}
        columns={["auto", "flex"]}
        areas={[
          { name: "nav", start: [0, 0], end: [0, 0] },
          { name: "main", start: [1, 0], end: [1, 0] },
        ]}
      >
        <Box gridArea="nav" margin="small">
          <Sidebar
            background="brand"
            round="small"
            header={<Avatar src="avatar.png" />}
            footer={<Button icon={<Help />} hoverIndicator />}
          >
            <Nav gap="small">
              <Button
                icon={<Home />}
                hoverIndicator
                onClick={() => history.push("/")}
              />
              <Button
                icon={<Projects />}
                onClick={() => history.push("/products")}
                hoverIndicator
              />
            </Nav>
          </Sidebar>
        </Box>
        <Box gridArea="main" background="light-2" margin="small">
          <Main pad="large">{children}</Main>
        </Box>
      </Grid>
    </>
  );
};
