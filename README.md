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

## Start
`docker compose up -d`

## Adicionar um tweet
![Imagem postTweets.png não encontrada](/imagens/postTweets.png)
