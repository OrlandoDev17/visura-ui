import { Button } from "./components/Button";
import { Badge } from "./components/Badge";
import { Typography } from "./components/Typography";
import { ButtonGroup } from "./components/ButtonGroup";
import { Input } from "./components/Input";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { NavLink } from "./components/NavLink";
import { Card } from "./components/Card";
import Tooltip from "./components/Tooltip";

const Buttons = [
  {
    id: 1,
    label: "Google",
    href: "https://google.com",
  },
  {
    id: 2,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    id: 3,
    label: "Youtube",
    href: "https://youtube.com",
  },
];

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full gap-8 my-12">
      <div className="flex gap-4">
        <Button type="default">Default</Button>
        <Button href="https://google.com" type="outlined">
          Outlined
        </Button>
        <Button type="ghost">Ghost</Button>
        <Button type="link">Link</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </div>
      <div className="flex gap-4">
        <Badge type="success">Success</Badge>
        <Badge type="warning">Warning</Badge>
        <Badge type="error">Error</Badge>
        <Badge type="info">Info</Badge>
      </div>
      <div className="flex gap-4">
        <Typography as="h1" variant="heading">
          Heading
        </Typography>
        <Typography as="h2" variant="subheading">
          Subheading
        </Typography>
        <Typography as="p" variant="body">
          Body
        </Typography>
        <Typography as="span" variant="caption">
          Caption
        </Typography>
      </div>
      <div className="flex gap-4">
        <ButtonGroup buttons={Buttons} theme="dark" />
        <ButtonGroup buttons={Buttons} theme="light" />
      </div>
      <div className="flex gap-4">
        <Input type="text" label="Text" placeholder="hola como estas?" />
        <Input type="email" label="Email" placeholder="tuemail@gmail.com" />
        <Input
          type="password"
          label="Password"
          placeholder="tucontraseña123."
        />
      </div>
      <Header>
        <span className="text-2xl font-bold">Logo</span>
        <NavBar>
          {Buttons.map((button, index) => (
            <NavLink
              theme="light"
              key={button.id}
              href={button.href}
              index={index}
            >
              {button.label}
            </NavLink>
          ))}
        </NavBar>
      </Header>
      <Header theme="dark">
        <span className="text-2xl font-bold">Logo</span>
        <NavBar>
          {Buttons.map((button, index) => (
            <NavLink
              theme="dark"
              key={button.id}
              href={button.href}
              index={index}
            >
              {button.label}
            </NavLink>
          ))}
        </NavBar>
      </Header>
      <div className="flex gap-4">
        <Card theme="dark">
          <Typography as="h1" variant="heading">
            Heading
          </Typography>
          <Typography as="p" variant="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            ullam at laborum sapiente voluptas veritatis beatae alias fugit,
            minus libero odio provident mollitia delectus doloribus.
          </Typography>
        </Card>
        <Card theme="light">
          <Typography as="h1" variant="heading">
            Heading
          </Typography>
          <Typography as="p" variant="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            magnam quae nulla labore tenetur rerum consequatur, ratione repellat
            dicta consequuntur ducimus, ea saepe, eum libero.
          </Typography>
        </Card>
      </div>
      <div className="flex gap-4">
        <Tooltip
          content="¡Este es un tooltip de ejemplo!"
          position="top"
          theme="dark"
        >
          <Button>Tooltip Arriba</Button>
        </Tooltip>
        <Tooltip
          content="¡Este es un tooltip de ejemplo!"
          position="right"
          theme="dark"
        >
          <Button>Tooltip Derecha</Button>
        </Tooltip>
        <Tooltip
          content="¡Este es un tooltip de ejemplo!"
          position="bottom"
          theme="light"
        >
          <Button>Tooltip Abajo</Button>
        </Tooltip>
        <Tooltip
          content="¡Este es un tooltip de ejemplo!"
          position="left"
          theme="light"
        >
          <Button>Tooltip Izquierda</Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
