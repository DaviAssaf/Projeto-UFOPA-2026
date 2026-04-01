# UFOPA 2026 — 1º Encontro Zootecnista do Oeste do Pará

Site institucional do evento e backend de apoio com autenticação e gestão de anais/arquivos.

**Principais recursos**
- Página pública do evento (conteúdo institucional, programação e acesso a materiais).
- Autenticação básica (cadastro e login).
- Listagem e upload de anais/arquivos via API dedicada.
- Arquitetura modular para separação de lógica e interface.

**Estrutura do projeto**
- `client/`: front-end estático (HTML, CSS e JS).
- `server/`: back-end em PHP (rotas, controllers, services, models).
- `database/`: scripts e recursos de banco de dados.
- `.env.example`: modelo de variáveis de ambiente do servidor.
- `.env`: variáveis reais (consumidas em `server/src/config/env.php`).

**Requisitos**
- PHP 8+ com servidor web (Apache/Nginx/WAMP/LAMP).
- Extensões PHP ativas: `pdo_mysql`, `fileinfo` e `mbstring`.
- Banco de dados compatível com os scripts em `database/`.

**Configuração local (Windows/WAMP)**
1. Configure o virtual host para apontar o site público em `client/public`.
2. Configure o endpoint da API para apontar `server/public`.
3. Renomeie o arquivo `.env.example` para `.env` e ajuste as credenciais do banco.
4. Importe os scripts em `database/` para seu banco local.

**Endpoints principais (API)**
- `POST /api/register` — cadastro de novos usuários.
- `POST /api/login` — login e autenticação.
- `GET /api/archives` — lista de anais/arquivos disponíveis.
- `POST /api/upload-annal` — upload de arquivos (requer validação).
Observação: o prefixo da rota pode variar conforme o virtual host configurado.

**Padrões e organização**
- Camadas de aplicação em `server/src` (config, routes, controllers, services, models).
- Assets e scripts do front-end em `client/src`.
- Uso obrigatório de variáveis de ambiente para dados sensíveis.

**Contribuição**
- **Atenção**: Nunca envie o arquivo `.env` real para o repositório oficial.
- Abra issues para bugs ou melhorias.
- Mantenha o estilo e a organização atuais do projeto.

**Licença**
Este repositório ainda não possui licença definida.
