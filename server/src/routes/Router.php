<?php

class Router
{
    private $routes = [];

    public function get($path, $handler)
    {
        $this->routes["GET"][$path] = $handler;
    }

    public function post($path, $handler)
    {
        $this->routes["POST"][$path] = $handler;
    }

    public function resolve($uri, $method)
    {
        $handler = $this->routes[$method][$uri] ?? null;

        if (!$handler) {
            echo json_encode([
                "error" => "Rota não encontrada",
                "uri" => $uri
            ]);
            return;
        }

        call_user_func($handler);
    }
}
