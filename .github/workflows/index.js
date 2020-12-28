import run from "github-pages-deploy-action";
// Not in use yet
run({
  accessToken: process.env["ACCESS_TOKEN"],
  branch: "gh-pages",
  folder: "build",
  repositoryName: "JamesIves/github-pages-deploy-action",
  silent: true,
  workspace: "src/project/location",
});