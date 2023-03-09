- name: Deploy to Deno Deploy
  uses: denoland/deployctl@v1
  with:
    project: my-project
    entrypoint: https://deno.land/std/http/file_server.ts
    root: dist
