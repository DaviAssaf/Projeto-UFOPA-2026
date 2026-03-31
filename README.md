# UFOPA 2026 — 1º Encontro Zootecnista do Oeste do Pará

Site institucional do evento e backend de apoio com autenticação e gestão de anais/arquivos.

**Principais recursos**
- Página pública do evento (conteúdo institucional, programação e acesso a materiais).
- Autenticação básica (cadastro e login).
- Listagem e upload de anais/arquivos via API.

**Estrutura do projeto**
- `client/`: front-end estático (HTML, CSS e JS).
- `server/`: back-end em PHP (rotas, controllers, services, models).
- `database/`: scripts e recursos de banco de dados.
- `.env`: variáveis de ambiente do servidor (consumidas em `server/src/config/env.php`).

**Requisitos**
- PHP 8+ com servidor web (Apache/Nginx/WAMP/LAMP).
- Banco de dados compatível com os scripts em `database/`.

**Configuração local (Windows/WAMP)**
1. Configure o virtual host para apontar o site público em `client/public`.
2. Configure o endpoint da API para apontar `server/public`.
3. Ajuste o arquivo `.env` com as credenciais do banco e demais variáveis exigidas pela aplicação.
4. Importe os scripts em `database/` para seu banco local.

**Endpoints principais (API)**
- `POST /UFOPA2026/server/public/api/register` — cadastro.
- `POST /UFOPA2026/server/public/api/login` — login.
- `GET /UFOPA2026/server/public/api/archives` — lista de anais.
- `POST /UFOPA2026/server/public/api/upload-annal` — upload de anais.
Observação: o prefixo da rota pode variar conforme o virtual host configurado.

**Padrões e organização**
- Camadas de aplicação em `server/src` (config, routes, controllers, services, models).
- Assets e scripts do front-end em `client/src`.

**Contribuição**
- Abra issues para bugs ou melhorias.
- Mantenha o estilo e a organização atuais do projeto.

**Licença**
Este repositório ainda não possui licença definida.
