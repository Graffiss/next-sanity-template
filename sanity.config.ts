import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { documentInternationalization } from "@sanity/document-internationalization";
import schemas from "./sanity/schemas/index";

const config = defineConfig({
  name: "default",
  title: "Next.js + Sanity.io",
  projectId: "", // Project ID from manage.sanity.io
  dataset: "production",
  apiVersion: "2023-06-04",
  basePath: "/admin",
  plugins: [
    deskTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "fi", title: "Finnish" },
        { id: "no", title: "Norwegian" },
      ],
      schemaTypes: [...schemas.map((schema) => schema.name)],
    }),
  ],
  schema: { types: schemas },
});

export default config;
