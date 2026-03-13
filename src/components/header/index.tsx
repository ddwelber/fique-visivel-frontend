import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Container } from "../../layouts/container";
import { Cta } from "../cta";

interface HeaderLinksProps {
  id: number;
  to: string;
  content: string;
}

export const Header = () => {
  const headerLinks: HeaderLinksProps[] = [
    {
      id: 1,
      to: "#how-it-works",
      content: "Como funciona",
    },
    {
      id: 2,
      to: "#who-is-it-for",
      content: "Para quem é",
    },
    {
      id: 3,
      to: "/plans",
      content: "Planos",
    },
  ];

  return (
    <div className="border-b border-gray-100">
      <Container>
        <header className="item-center flex max-h-full w-full justify-between border-r border-l border-gray-100 p-4">
          <div className="left flex items-center gap-4">
            <div className="brand">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            <nav>
              <ul className="flex items-center text-sm font-medium">
                {headerLinks.map((item) => {
                  const isAnchor = item.id !== 3;

                  if (isAnchor) {
                    return (
                      <li
                        key={item.id + item.content}
                        className="group px-4 py-1"
                      >
                        <a
                          href={item.to}
                          className="transition-colors duration-150 group-hover:text-gray-500"
                        >
                          {item.content}
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={item.id + item.content}
                        className="group px-4 py-1"
                      >
                        <Link
                          to={item.to}
                          className="transition-colors duration-150 group-hover:text-gray-500"
                        >
                          {item.content}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </nav>
          </div>
          <Cta to="/waitlist" size="small">
            Garantir acesso antecipado
          </Cta>
        </header>
      </Container>
    </div>
  );
};
