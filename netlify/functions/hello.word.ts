export default async () => {
    return new Response("Hello from Edge Functions!", {
      headers: { "content-type": "text/plain" },
    });
  };
  