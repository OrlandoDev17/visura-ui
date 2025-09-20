import { useState } from "react";

import { Button } from "./packages/components/Button";
import { Badge } from "./packages/components/Badge";
import { Typography } from "./packages/components/Typography";
import { ButtonGroup } from "./packages/components/ButtonGroup";
import { Input } from "./packages/components/Input";
import { Header } from "./packages/components/Header";
import { NavBar } from "./packages/components/NavBar";
import { NavLink } from "./packages/components/NavLink";
import { Card } from "./packages/components/Card";
import Tooltip from "./packages/components/Tooltip";
import { Menu } from "./packages/components/Menu";
import { Modal } from "./packages/components/Modal";
import { Dropdown } from "./packages/components/Dropdown";

const Buttons = [
  {
    id: 100,
    label: "Google",
    href: "https://google.com",
  },
  {
    id: 200,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    id: 300,
    label: "Youtube",
    href: "https://youtube.com",
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const ToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const ToggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full gap-8 my-12 relative">
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
      <Header theme="light">
        <div className="flex-grow basis-0">
          <span className="text-2xl font-bold">Logo</span>
        </div>
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
        <div className="hidden md:flex gap-4 flex-grow basis-0 justify-end">
          <Button type="default">Iniciar Sesión</Button>
          <Button type="outlined">Registrarse</Button>
        </div>
        <Menu theme="light" links={Buttons} />
      </Header>
      <Header theme="dark">
        <div className="flex-grow basis-0">
          <span className="text-2xl font-bold">Logo</span>
        </div>
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
        <div className="hidden md:flex gap-4 flex-grow basis-0 justify-end">
          <Button type="default">Iniciar Sesión</Button>
          <Button type="outlined">Registrarse</Button>
        </div>
        <Menu theme="dark" links={Buttons} />
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
      <div className="flex gap-4">
        <Button onClick={ToggleModal} type="ghost">
          Haz Click Aqui
        </Button>
        <Modal
          theme="dark"
          isOpen={isOpen}
          setIsOpen={ToggleModal}
          title="Modal"
        >
          <div>
            <Typography as="p" variant="body">
              Un Modal es un elemento que se muestra en una ventana emergente,
              al darle click a un elemento en concreto. sirve para mostrar
              informacion adicional o para confirmar una accion.
            </Typography>
          </div>
        </Modal>
      </div>
      <div className="flex flex-col gap-4">
        <Dropdown
          theme="dark"
          title="Haz Click Aqui"
          isOpen={isOpenDropdown}
          toggleDropdown={ToggleDropdown}
        >
          {Buttons.map((button) => (
            <li
              className="px-4 py-2 bg-slate-600 rounded-lg font-medium hover:bg-slate-500 cursor-pointer transition-all"
              key={button.id}
            >
              {button.label}
            </li>
          ))}
        </Dropdown>
        <Dropdown
          theme="light"
          title="Haz Click Aqui"
          isOpen={isOpenDropdown}
          toggleDropdown={ToggleDropdown}
        >
          {Buttons.map((button) => (
            <li
              className="px-4 py-2 bg-gray-300 rounded-lg font-medium hover:bg-gray-400 cursor-pointer transition-all"
              key={button.id}
            >
              {button.label}
            </li>
          ))}
        </Dropdown>
      </div>
    </div>
  );
}

export default App;
