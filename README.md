# Teste Prático para Desenvolvedor na Easy App Reports

# Go-to

- [How to run](#how-to-run)
- [Links](#links)
- [Tecnologias](#tech)

<a name="how-to-run"></a>

# How to run

## Rodando o projeto

Esse projeto foi arquitetado visando o deploy em **Kubernetes** para a facilitação na execução dos processos, tendo em vista que há problemas quando se trata de máquinas diferentes, os container devem ser executados da seguinte forma:

**OBS**: Certifique-se de ter a [ferramenta de CLI do Kubernetes](https://kubernetes.io/pt-br/docs/tasks/tools/#kubectl) instalado e também o seu terminal localizado no diretório raiz.

```bash
kubectl apply -f deployment.yaml
```

```bash
kubectl apply -f service.yaml
```

Ao rodar esses comandos, você terá executado a aplicação e terá os seus recursos disponibilizados na porta 80 (padrão) do seu navegador. 

A aplicação pode ser depurada pelos logs das ferramentas Docker CLI ou Docker Desktop.

<a name="links"></a>

# Links

Após a inicialização dos projetos, as aplicações estarão disponíveis nos seguintes URLs:

**OBS**: Lembrando que para o navegador a porta padrão é a 80, logo, você pode ocultar a porta quando acessar as URLs e.g. http://localhost:80 === http://localhost

## Página de Login
[http://localhost/pug](http://localhost:80/pug)

## Página de Registro

[http://localhost/pug/register](http://localhost:80/pug/register)

## Página de Home (Autenticação obrigatória)

[http://localhost/pug/home](http://localhost:80/pug/home)

<a name="tech"></a>

# Tecnologias

Abaixo deixo listada as tecnologias utilizadas nas vertentes do projeto:

## Back-end

- Typescript
- Express (API)
- Mongoose (ORM)
- MongoDB (Banco de dados)
- Joi (Validação de endpoints)
- Bcryptjs (Hash)

## Templates

- Pug
- CSS

## DevOps

- Docker
- Kubernetes
