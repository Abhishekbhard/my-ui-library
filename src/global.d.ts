// src/global.d.ts

// For CSS Modules
declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// For SVGs
declare module "*.svg" {
  const content: string;
  export default content;
}
