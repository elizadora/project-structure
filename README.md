# Modelo de estrutura para o projeto de piw

Esse repositório visa fornecer uma estrutura básica para o projeto de piw, com o objetivo de facilitar a organização e o desenvolvimento do projeto.

## Estrutura do projeto
A estrutura do projeto pode ser organizada da seguinte forma:

```plaintext
public/
src/
    ├── components/
    ├── pages/
    ├── styles/
    └── App.js
```

## Descrição dos diretórios
- `src/`: Diretório principal do código-fonte do projeto.
- `components/`: Diretório para componentes reutilizáveis.
- `pages/`: Diretório para as páginas do aplicativo.
- `App.js`: Arquivo principal do aplicativo, onde a aplicação é inicializada.

## Instalação
Escolha um dos métodos abaixo para instalar o projeto:

### 1. Usando o git clone
Para instalar as dependências do projeto, execute o seguinte comando:

1. Abra o seu terminal ou prompt de comando.
2. Vá para onde você deseja criar o projeto.
3. Execute o seguinte comando:
```bash
git clone https://github.com/elizadora/project-structure.git
```
4. Navegue até o diretório do projeto:
```bash
cd project-structure
```
5. Instale as dependências do projeto:
```bash
npm install
```
6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

7. Abra o navegador e acesse `http://localhost:5173` para visualizar o projeto.


### Download ZIP
1. Acesse o repositório do projeto no GitHub.
2. Clique no botão "Code" e selecione "Download ZIP".
3. Extraia o arquivo ZIP em um diretório de sua escolha.
4. Navegue até o diretório do projeto:
```bash
cd project-structure
```
5. Instale as dependências do projeto:
```bash
npm install
```
6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
7. Abra o navegador e acesse `http://localhost:5173` para visualizar o projeto.


## Fork no repositório
1. Acesse o repositório do projeto no GitHub.
2. Clique no botão "Fork" no canto superior direito da página.
3. Escolha a conta onde deseja criar o fork.
4. Após o fork ser criado, você pode clonar o repositório forkado para a sua máquina local e manter ele atualizado com o repositório original, basta executar os seguintes comandos:

```bash
git clone https://github.com/elizadora/project-structure.git

git remote add upstream https://github.com/elizadora/project-structure.git
```
> O comando `git remote add upstream` adiciona o repositório original como um repositório remoto chamado "upstream". Isso permite que você busque atualizações do repositório original no futuro. Para que o repositório forkado fique atualizado com o repositório original. Para puxar as atualizações do repositório original, execute os seguintes comandos:
```bash
git fetch upstream
git checkout main
git merge upstream/main
```

5. Navegue até o diretório do projeto:
```bash
cd project-structure
```
6. Instale as dependências do projeto:
```bash
npm install
```
7. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
8. Abra o navegador e acesse `http://localhost:5173` para visualizar o projeto.



