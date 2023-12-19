const BASE_URL = "http://localhost:3000/";

type Query = Record<string, string | undefined | Array<string>>;

// Developed only core functions for the API (headers, cookies skipped for simplicity)
type Request = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  body?: Record<string, unknown> | null | void;
  query?: Query;
  signal?: AbortSignal;
};

function getQueryString(queryObj?: Query) {
  if (!queryObj) return "";

  const queryString = Object.entries(queryObj)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => `${key}=${v}`).join("&");
      }

      return `${key}=${value}`;
    })
    .join("&");

  return queryString ? `?${queryString}` : "";
}

export async function apiRequest<Response = unknown>({
  method,
  path,
  body,
  query,
  signal,
}: Request) {
  const queryString = query ? getQueryString(query) : "";

  const response = await fetch(`${BASE_URL}${path}${queryString}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
    signal,
  });

  const data: Response = await response.json();

  return data;
}
