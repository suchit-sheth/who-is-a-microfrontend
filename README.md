# Who is a Micro frontend

## Visual Example 
1. visit [excalidraw](https://excalidraw.com/) website
2. Upload this [file](./who%20is%20a%20microfrontend.excalidraw)


## Steps and folder structure

- Node Version `v24.x`
- Package Manager: `pnpm`
### with origin js aproach
- location: [Origin js vite module federation plugin example for a microfrontend](./originjs%20vite%20module%20federation%20plugin/)
- Installation Steps
  - `cd ./origin...` // folder
  - `pnpm i`
  - open 2 terminal
    - 1. will point remote
      - > first this should be process then switch to host terminal
      - `pnpm build`
      - `pnpm preview`
    - 1 will point host
      - if remote is up and running in preview mode not in dev mode
      - Safe Approach
        - `pnpm build`
        - `pnpm preview`
      - Quick Approach
        - `pnpm dev` (might face issue)
### with module-federation/vite approach
- location: [Module federation vite plugin module federation plugin example for a microfrontend](./simple%20vite%20module%20federation%20plugin/)
- Installation Steps
  - `cd ./simple...` folder
  - `pnpm i`
  - open 2 terminal Approach 1 with build and preview mode
    - 1. will point remote
      - > first this should be process then switch to the host terminal
      - `pnpm build`
      - `pnpm preview`
    - 1 will point host
      - if remote is up and running in preview mode not in dev mode
        - `pnpm build`
        - `pnpm preview`
  - open 2 terminal Approach 2 with dev mode
    - 1. will point remote
      - > first this should be process then switch to the host terminal
      - `pnpm dev`
    - 1 will point host
      - if remote is up and running in dev mode then perform below actions
        - `pnpm dev`