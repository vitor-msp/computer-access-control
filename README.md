# computer-access-control

Aplicação (focada em exercitar testes unitários e arquitetura de software) para testar se usuário pode acessar um computador em dado horário.

### Execução

1. Clonar este repositório
```
git clone https://github.com/vitor-msp/computer-access-control.git
```

2. Acessar a pasta baixada
```
cd computer-access-control
```

3. Executar o docker-compose

Obs.1: a porta 3000 da sua máquina deve estar liberada

Obs.2: será criada a pasta 'data' que terá os dados do MongoDB
```
docker-compose up -d
```

### Teste

1. Criando um usuário:
```
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"id": "1", "name": "Fulano"}'
```

2. Consultando o usuário criado:
```
curl -X GET http://localhost:3000/users -H "Content-Type: application/json" -d '{"id": "1"}'
```

Se tudo der certo, será retornado um json com os dados do usuário.