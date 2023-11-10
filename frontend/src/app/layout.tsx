import "./globals.css";
import type { Metadata } from "next";
import Aside from "./patterns/Aside";
import Content from "./patterns/Content";
import Header from "./patterns/Header";
import Container from "./patterns/Container";

export const metadata: Metadata = {
  title: "Open Space",
  description: "Gerenciador de tarefas e bloco de notas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-bt">
      <body>
        <Container>
          <Aside />
          <Header />
          <Content>{children}</Content>
        </Container>
      </body>
    </html>
  );
}
