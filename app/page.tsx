import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const presentations = [
  {
    title: "Ciberseguridad",
    description: "Presentacion completa de ciberseguridad.",
    href: "/ciberseguridad",
    cta: "Entrar",
  },
  {
    title: "Inteligencia Artificial",
    description: "Presentacion de IA en preparacion.",
    href: "/inteligencia-artificial",
    cta: "Ver",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4 py-10">
      <section className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Presentaciones</h1>
        <p className="text-muted-foreground mt-2">
          Selecciona una presentacion para continuar.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {presentations.map((presentation) => (
          <Card key={presentation.href}>
            <CardHeader>
              <CardTitle>{presentation.title}</CardTitle>
              <CardDescription>{presentation.description}</CardDescription>
            </CardHeader>
            <CardContent />
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={presentation.href}>{presentation.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
