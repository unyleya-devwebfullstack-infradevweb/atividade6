# Atividade 6
Olá, turma!

Observamos na Unidade 4 que o Apache Kafka é uma excelente ferramenta na produção e consumo de mensagens, ao mesmo tempo que seu uso tem sido amplamente difundido.

Utilizando a aula "Criando fluxo no Kafka - Hands-On" como referência, implemente um fluxo no Kafka para o cenário a seguir:

● Uma empresa de Jogos Online deseja saber, durante um campeonato, qual a percepção dos usuários em relação ao jogo. A intenção é capturar tweets durante as partidas, e através de uma análise de sentimento, descobrir se o tweet é positivo e negativo.

● A análise de sentimento será baseada única e exclusivamente em uma lista de palavras positivas e outra lista de palavras negativas. O tweet que contiver uma ou mais palavras positivas será considerado um tweet positivo. Caso contrário, será verificado se tem uma ou mais palavras negativas. Caso não tenha nenhuma palavra das duas listas, o tweet é descartado.

● No final, será informado o número de tweets capturados, o número de tweets negativos e o número de tweets positivos.

● O material que deve ser enviado será uma pasta compactada contendo:

- Arquivos de configuração do Kafka;

- Código-fonte do consumidor.

Bom trabalho!

## Solução

Criei 2 serviços, um para adicionar tweets na fila do Kafka e outro para consumir a fila do kafka e gerar o relatório de análise dos tweets.
#### jogo-producer
Possui um _endpoint_ que envia tweets para um tópico no kafka.
<br>
Detalhes da configuração do kafka no arquivo [kafka.js](jogo-producer-api/src/config/kafka.js)

#### jogo-consumer
Se conecta na fila do kafka e adiciona os tweets em um array na memória. A cada stop/start do container, se conecta na fila com grupoId diferente para garantir que pegará todos os tweets desde o início.
<br>
Possui um _endpoint_ para gerar o relatório de análise com base nas palavras positivas e negativas definidas no [docker-compose.yaml](docker-compose.yaml). 
Possui um _endpoint_ que lista todos os tweets enviados.
<br>
Detalhes da configuração do kafka no arquivo [kafka.js](jogo-consumer-api/src/config/kafka.js)

## Start
`docker compose up -d`

## Adicionar um tweet
![Imagem postTweets.png não encontrada](/imagens/postTweets.png)

## Obter análise dos tweets
![Imagem getAnaliseTweets.png não encontrada](/imagens/getAnaliseTweets.png)

## Listar todos os tweets
![Imagem getTweets.png não encontrada](/imagens/getTweets.png)

## Configurar lista de palavras positivas e negativas
Se quiser configurar a lista de palavras positivas e negativas edite as variáveis de ambiente no arquivo [docker-compose.yaml](docker-compose.yaml):
```
  PALAVRAS_POSITIVAS: '["bom", "legal", "ótimo", "massa"]'
  PALAVRAS_NEGATIVAS: '["fraco", "ruim", "péssimo"]'
```

