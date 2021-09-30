# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

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

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais
>   (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais
>   (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
