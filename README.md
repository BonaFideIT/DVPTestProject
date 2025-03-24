# Test Project for Django Vite Plugin

[Django Vite Plugin](https://github.com/protibimbok/django-vite-plugin)

## Installation

1. [install uv](https://docs.astral.sh/uv/getting-started/installation/).
2. install the backend dependencies:
    ```shell
    uv sync
    ```
3. install the frontend dependencies:
    ```shell
    source .venv/bin/activate
    cd frontend
    uv run nodeenv -n 23.10.0 env
    source env/bin/activate
    npm install
    deactivate_node
    cd ..
    deactivate
    ```
4. run vite dev server:
    ```shell
    cd frontend
    source env/bin/activate
    npm run dev
    ```
5. run django server:
    ```shell
    source .venv/bin/activate
    uv run ./dvptestproject/manage.py migrate
    uv run ./dvptestproject/manage.py runserver
    ```

## Notes

The Svelte Vite template is based on the files created by using the following command:

```shell
cd frontend
source env/bin/activate
npm create vite@latest . -- --template svelte-ts
```
