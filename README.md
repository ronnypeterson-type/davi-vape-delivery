# Davi Vapes — E-commerce + PDV + Painel Administrativo
🌐 Demonstração

*Site em produção:*  
https://davi-vape.brixly.com.br/

Sistema comercial completo desenvolvido para centralizar a operação de uma loja em uma única aplicação.

O projeto possui três ambientes principais:

- **Área do Usuário** — experiência de compra e acompanhamento de pedidos.
- **PDV** — operação de vendas presenciais e controle de caixa.
- **Painel Administrativo** — gestão da operação, produtos, estoque, usuários e indicadores.

A aplicação foi desenvolvida pensando em uma operação real, com integração entre vendas, estoque, produtos, código de barras, caixa e permissões de acesso.

---

## 🎯 Objetivo do projeto

O objetivo foi desenvolver uma solução capaz de atender tanto as vendas realizadas online quanto a operação física da loja.

Em vez de utilizar sistemas separados para e-commerce, caixa e administração, o projeto centraliza essas operações em uma única aplicação.

### Fluxo integrado

```text
Cadastro do produto
        ↓
Código de barras
        ↓
Estoque
        ↓
PDV
        ↓
Venda
        ↓
Baixa no estoque
        ↓
Dashboard / gestão
```

---

# 🖥️ Os 3 ambientes do sistema

## 1. Área do Usuário

Ambiente destinado ao cliente final.

### Principais funcionalidades

- Catálogo de produtos
- Busca de produtos
- Visualização de produtos
- Carrinho de compras
- Finalização do pedido
- Pagamento
- Registro do pedido
- Envio obrigatório do pedido para WhatsApp após a confirmação
- Comunicação com a equipe para combinação da entrega
- Acompanhamento das informações do pedido

### Fluxo de compra

```text
Cliente
  ↓
Catálogo
  ↓
Produto
  ↓
Carrinho
  ↓
Checkout
  ↓
Pagamento
  ↓
Pedido registrado
  ↓
WhatsApp
  ↓
Combinação da entrega
```

A entrega é combinada diretamente com o cliente através do WhatsApp, em vez de utilizar cálculo automático de frete.

---

# 🧾 2. PDV — Ponto de Venda

Ambiente destinado à operação física da loja.

### Funcionalidades

- Busca de produtos
- Leitura de código de barras
- Adição de produtos à venda
- Controle de quantidade
- Cálculo do total
- Finalização de vendas
- Registro das vendas
- Baixa de estoque
- Controle de caixa
- Abertura de caixa
- Fechamento de caixa
- Histórico de operações
- Identificação do operador responsável

### Código de barras

O código de barras é utilizado em diferentes partes da operação:

```text
Cadastro do produto
       ↓
Estoque
       ↓
PDV
```

Além do leitor tradicional, o sistema permite utilizar a câmera do celular para realizar a leitura.

---

# 📦 3. Painel Administrativo

Ambiente responsável pela gestão da operação.

### Gestão de produtos

- Cadastro de produtos
- Edição de produtos
- Código de barras
- Preços
- Categorias
- Informações dos produtos
- Controle de disponibilidade
- Controle de estoque

### Gestão de estoque

As movimentações de estoque são integradas às operações do sistema.

```text
Entrada de estoque
       ↓
Estoque atualizado
       ↓
Venda no PDV
       ↓
Baixa de estoque
```

### Entrada de estoque por código de barras

O abastecimento de estoque pode ser realizado pelo celular:

1. Abrir a função de entrada de estoque.
2. Utilizar a câmera do celular.
3. Escanear o código de barras.
4. Identificar o produto.
5. Informar a quantidade.
6. Registrar a movimentação.

Isso permite realizar reposições diretamente no estoque sem depender de um computador.

---

# 👥 Sistema de usuários e permissões

O sistema possui diferentes níveis de acesso.

### Dono

Possui acesso completo à operação.

### Gerente

Possui acesso às funcionalidades administrativas permitidas para o seu nível de acesso.

### Operador de Caixa

Possui acesso às funções necessárias para operação do PDV.

O operador não possui acesso às funcionalidades administrativas sensíveis, como determinadas operações de estoque e configurações.

Essa separação evita que todos os usuários tenham acesso irrestrito ao sistema.

---

# 📊 Dashboard

O painel administrativo apresenta uma visão geral da operação.

Entre as informações disponibilizadas estão:

- Vendas
- Faturamento
- Pedidos
- Produtos
- Estoque
- Movimentações
- Informações do caixa
- Indicadores da operação

O dashboard transforma os dados registrados pelo sistema em informações úteis para tomada de decisão.

---

# 💰 Controle de caixa

O sistema possui controle do fluxo de caixa utilizado no PDV.

O processo contempla:

```text
Abertura do caixa
       ↓
Vendas
       ↓
Movimentações
       ↓
Fechamento
```

Isso permite manter maior rastreabilidade das operações realizadas durante o expediente.

---

# 🔗 Integração entre os ambientes

Os três ambientes não são sistemas independentes.

Eles compartilham a mesma estrutura de dados e regras de negócio.

```text
                 ┌─────────────────┐
                 │     USUÁRIO     │
                 │    E-commerce   │
                 └────────┬────────┘
                          │
                          ↓
                 ┌─────────────────┐
                 │    BACKEND /    │
                 │   DATA LAYER    │
                 └───────┬─┬───────┘
                         │ │
              ┌──────────┘ └──────────┐
              ↓                       ↓
       ┌─────────────┐        ┌─────────────┐
       │     PDV     │        │    ADMIN    │
       │   Vendas    │        │   Gestão    │
       └──────┬──────┘        └──────┬──────┘
              │                      │
              └──────────┬───────────┘
                         ↓
                  ┌─────────────┐
                  │   ESTOQUE   │
                  └─────────────┘
```

Uma venda realizada no PDV, por exemplo, influencia o estoque e os dados administrativos.

---

# 🏷️ Sistema de código de barras

O código de barras foi tratado como parte central da operação.

Ele pode ser utilizado em:

- Cadastro de produtos
- Identificação de produtos
- PDV
- Entrada de estoque
- Reposição de estoque
- Leitura através da câmera do celular

### Fluxo

```text
Código de barras
       ↓
Identificação do produto
       ↓
Consulta dos dados
       ↓
Operação desejada
       ↓
Atualização do sistema
```

A implementação utiliza leitura através de câmera para permitir que dispositivos móveis também sejam utilizados na operação.

---

# 📱 Operação mobile

Uma preocupação importante do projeto foi permitir que determinadas tarefas administrativas fossem realizadas pelo celular.

Um exemplo é a reposição de estoque.

Em vez de exigir que o responsável vá até um computador para registrar uma entrada, o processo pode ser realizado utilizando a câmera do smartphone.

---

# 🔐 Controle de acesso

O sistema utiliza autenticação e níveis de permissão para separar as responsabilidades de cada usuário.

```text
Dono
  └── Acesso administrativo completo

Gerente
  └── Acesso administrativo conforme permissões

Operador
  └── Operação do PDV
```

Essa estrutura reduz o risco de operações administrativas serem executadas por usuários sem autorização.

---

# 🧠 Principais desafios técnicos

### Integração entre sistemas

Fazer com que e-commerce, PDV, estoque e painel administrativo trabalhassem sobre as mesmas regras de negócio.

### Controle de permissões

Criar diferentes níveis de acesso sem expor funcionalidades administrativas para operadores.

### Estoque integrado

Garantir que operações de venda e movimentação reflitam corretamente no estoque.

### Código de barras

Implementar a identificação de produtos através de código de barras tanto no PDV quanto nas operações de estoque.

### Leitura por câmera

Adaptar a leitura de códigos para dispositivos móveis, permitindo utilizar a câmera do smartphone.

### Controle de caixa

Organizar abertura, movimentações e fechamento de caixa dentro do fluxo do PDV.

### Regras de negócio

Transformar processos reais da operação da loja em regras executáveis pelo sistema.

---

# 🏗️ Arquitetura

O projeto foi desenvolvido utilizando arquitetura baseada em componentes e separação de responsabilidades.

### Frontend

- React 18
- TypeScript
- React Router
- Tailwind CSS
- Context API
- Vite
- Lucide React

### Backend / Data

A aplicação utiliza a infraestrutura nativa da plataforma para:

- API
- Persistência de dados
- Collections
- Autenticação
- Armazenamento
- Regras de negócio

### Código de barras

- ZXing
- Câmera do dispositivo
- Leitura e identificação de códigos

---

# 📁 Estrutura do projeto

```text
src/
├── components/
├── pages/
├── contexts/
├── hooks/
├── services/
├── utils/
└── ...
```

A separação facilita a manutenção e permite evoluir cada ambiente sem comprometer o restante da aplicação.

---

# ⚡ Performance e responsividade

A aplicação foi desenvolvida com foco em:

- Responsividade
- Mobile-first
- Componentização
- Reutilização de componentes
- Carregamento eficiente
- Interface adaptada para diferentes tamanhos de tela
- Operação em dispositivos móveis

O suporte mobile é especialmente importante para as funções de estoque que utilizam a câmera do smartphone.

---

# 🔒 Segurança

O sistema considera segurança desde a camada de acesso até as regras de negócio.

Entre os pontos considerados:

- Autenticação
- Controle de permissões
- Separação de perfis
- Proteção de funcionalidades administrativas
- Validação de operações
- Controle de acesso às movimentações sensíveis
- Separação entre frontend e operações de backend

---

# 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| React 18 | Interface |
| TypeScript | Tipagem e desenvolvimento |
| Vite | Build e desenvolvimento |
| Tailwind CSS | Interface visual |
| React Router | Navegação |
| Context API | Estado global |
| Lucide React | Ícones |
| ZXing | Leitura de código de barras |
| Backend nativo | API e regras |
| Collections | Persistência de dados |
| File Storage | Armazenamento |

---

# 💡 O que este projeto demonstra

Este projeto representa a capacidade de transformar uma necessidade comercial em uma aplicação funcional.

### Competências demonstradas

- Desenvolvimento frontend
- TypeScript
- React
- Arquitetura de aplicações
- Componentização
- Gestão de estado
- Autenticação
- Controle de permissões
- CRUD
- Gestão de estoque
- PDV
- Controle de caixa
- Código de barras
- Leitura através de câmera
- Integração entre módulos
- Regras de negócio
- Responsividade
- Desenvolvimento mobile-first
- Integração com WhatsApp
- Organização de sistemas administrativos

---

# 🚀 Como executar

Clone o projeto:

```bash
git clone SEU_REPOSITORIO
```

Entre na pasta:

```bash
cd davi-pdv
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

O projeto será disponibilizado no ambiente local indicado pelo Vite.

---

# 📌 Projeto

**Davi Vapes — E-commerce + PDV + Painel Administrativo**

Projeto desenvolvido com foco em uma operação comercial real, unificando:

```text
E-commerce
     +
PDV
     +
Estoque
     +
Código de barras
     +
Caixa
     +
Painel administrativo
     +
Controle de usuários
```

A proposta foi transformar processos reais de operação, venda, estoque e gestão em um único sistema integrado.

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido por **Ronny Peterson**.

**Análise → Planejamento → Arquitetura → Implementação → Integração → Validação**
