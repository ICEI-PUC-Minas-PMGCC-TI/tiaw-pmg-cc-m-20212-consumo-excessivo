# Especificações Do Projeto

Na especificação do projeto abordaremos sobre alguns detalhes essencias do nosso projeto, quanto a seus usuarios e restrições de plataforma. Para compreende melhor o publico que visamos atender realizamos uma pesquisa qualitativa, para entendermos as carencias e as dores do público. Então, juntamente a ferramenta Miro, fora a criação de personas juntamente com seus mapas de empatia.

## Personas

Luis Cláudio é um caminhoneiro que ama passar tempo com sua família e amigos, porém, nem sempre isso é possível, pois a sua renda mensal não está sendo suficiente para cumprir com seus compromissos. Então, para realizar seu sonho de fazer um transplante capilar, precisa aprender a organizar seus recursos para melhorar sua vida. 

> Persona:

> ![Luis Persona](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20212-consumo-excessivo/master/Documentacao/images/Luis_Persona.png)

> Mapa de Empatia

> ![Luis Mapa de Empatia](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20212-consumo-excessivo/master/Documentacao/images/Luis_Mapa_de_Empatia.png)


Xeyla Texeira é uma universitária de 19 anos de idade que procura conseguir seu primeiro estágio para conseguir ajudar sua família. Ela sente que existe uma falta de retorno em seus esforços, devido a isso cobra de si mesma um maior empenho, o que acaba causando grande desgaste físico e mental. 

> Persona:

> ![Xeyla Persona](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20212-consumo-excessivo/master/Documentacao/images/Xeyla_Persona.png)

> Mapa de Empatia

> ![Xeyla Mapa de Empatia](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20212-consumo-excessivo/master/Documentacao/images/Xeyla_Mapa_de_Empatia.png)


João Andrade tem 27 anos e é freelancer. Ele usa seu tempo livre para ver lives na Twitch, e também faz lives nas horas vagas. Atualmente namorando, está estudando design gráfico para ter uma melhor formação acadêmica, com o sonho de se casar e ter uma renda estável.

> Persona:

> ![Joao Persona](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20212-consumo-excessivo/master/Documentacao/images/Joao_Persona.png)

> Mapa de Empatia

> ![Joao Mapa de Empatia](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20212-consumo-excessivo/master/Documentacao/images/Joao_Mapa_de_Empatia.png)


Carolina da Silva é uma advogada trabalhista de 26 anos de idade que gosta de usar seu tempo livre para frequentar festas, ler e fazer compras com suas amigas. Ela deseja se mudar da casa da sua mãe, além de ter mais poder aquisitivo, porém, não é capaz de economizar dinheiro o bastante para realizar esses objetivos pois está sempre gastando para se manter a par com as atualizações da moda.

> Persona:

> ![Carolina Persona](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20212-consumo-excessivo/master/Documentacao/images/Carolina_Persona.png)

> Mapa de Empatia

> ![Carolina Mapa de Empatia](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20212-consumo-excessivo/master/Documentacao/images/Carolina_Mapa_de_Empatia.png)

## Histórias de Usuários

Em base de nossas personas, podemos ver as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Luis Claudio       | Quero ter renda suficiente para o  | Para poder passar tempo com minha      |
|                    | mês todo                           | familia                                |
|--------------------|------------------------------------|----------------------------------------|
| Xeyla Texeira      | Quero conseguir um emprego         | Conseguir ajudar a familia e diminuir  |
|                    | estável e bem remunerado           | a sensação de autocobrança             |
|--------------------|------------------------------------|----------------------------------------|
| João Andrade       | Quero ter uma renda estável        | Para morar junto com a namorada e se   |
|                    |                                    | casar                                  |
|--------------------|------------------------------------|----------------------------------------|
| Carolina da Silva  | Quero economizar dinheiro          | Me mudar da casa da minha mãe e        |
|                    |                                    | comprar tudo o que desejo              |

## Requisitos

As tabelas a seguir apresentam os requisitos funcionais e não funcionais sobre o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                  | Prioridade |
|------|-----------------------------------------|------------|
|RF-001| Permitir que o usuário cadastre uma     | ALTA       |
|      | conta                                   |            |
|------|-----------------------------------------|------------| 
|RF-002| Emitir um relatório de tarefas no mês   | ALTA       |
|------|-----------------------------------------|------------| 
|RF-003| Enviar um relatório ao usuário baseado  | ALTA       |
|      | nas informações fornecidas              |            |
|------|-----------------------------------------|------------| 
|RF-004| Recomendações para otimizar os gastos   | MÉDIA      |
|      | do usuário                              |            |
|------|-----------------------------------------|------------| 
|RF-005| Garantir uma experiência anônima        | MÉDIA      |
|------|-----------------------------------------|------------| 
|RF-006| Apresentar recomendações de conteúdo    | BAIXA      |
|      | externo para auxiliar na geração        |            |
|      | de renda                                |            |


### Requisitos não Funcionais

|ID     | Descrição do Requisito                  | Prioridade |
|-------|-----------------------------------------|------------|
|RNF-001| Site compatível com vários navegadores  | ALTA       | 
|-------|-----------------------------------------|------------|
|RNF-002| Compatível com Desktop, Tablets e Mobile| ALTA       |
|       | (completamente responsivo)              |            |
|-------|-----------------------------------------|------------|
|RNF-003| O site deverá ser intuitivo e didático  | MÉDIA      |
|-------|-----------------------------------------|------------|
|RNF-004| O site deverá ser de fácil acesso       | Baixa      |

## Restrições

Os seguintes itens na tabela abaixo, servem para limitar a execução do projeto e são tidos como obrigações quanto ao desenvolvimento do projeto.

|ID   | Restrição                                                            |
|-----|----------------------------------------------------------------------|
|RE-01| O projeto deverá ser entregue até o final do semestre letivo         |
|-----|----------------------------------------------------------------------|
|RE-02| A aplicação devera se limitar apenas a tecnologias basicas Front End |
|-----|----------------------------------------------------------------------|
|RE-03| A equipe não pode terceirizar a confecção do trabalho                |

