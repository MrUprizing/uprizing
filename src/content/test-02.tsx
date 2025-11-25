export const metadata = {
  title: "Test 01 ",
  date: "29.11.2025",
  description: "Una descripción corta de mi pensamiento",
  author: "Mr Uprizing",
};

export default function ExampleThought() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{metadata.title}</h1>
      <p className="text-muted-foreground">Publicado el {metadata.date}</p>
      <div className="mt-8">
        <p>Contenido de tu pensamiento aquí...</p>
      </div>
    </article>
  );
}
